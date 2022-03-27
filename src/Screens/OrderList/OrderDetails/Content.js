import React from 'react';
import {useTranslation} from 'react-i18next';
import {Text, View, Image, Dimensions, ScrollView} from 'react-native';
import {Divider} from 'react-native-elements/dist/divider/Divider';

import styles from './styles';

import {ImageLoader} from './Loader/ImageLoader';
import {TitleLoader} from './Loader/TitleLoader';
import {BodyLoader} from './Loader/ContentLoader';
import FastImage from 'react-native-fast-image';
import {
  CancelOrder,
  CompletedOrder,
  DashLine,
  InProgressOrder,
  NewOrderIcon,
  OnDeliveryOrder,
} from '../../../svg/common';

import ProductItem from './item';
import {getOrderDetails} from '../../../Store/orders/service';
import {currencyFormatWithNoSpace} from '../../../Utils/currency';
import FImage from '../../../Components/Image/FImage';
import Loader from './Loader';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const OrderDetails = ({id = 0, data = {}}) => {
  const {i18n} = useTranslation();

  const [loading, setLoading] = React.useState(false);
  // const [data, setData] = React.useState({});
  // React.useEffect(() => {
  //   getData();
  // }, []);
  // const getData = async () => {
  //   try {
  //     setLoading(true);
  //     const res = await getOrderDetails({id: id});
  //     setData(res.data?.data);
  //   } catch (err) {
  //     console.log('GER DETAILS ERROR', err);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  const getOrderBackground = () => {
    switch (data?.status?.id) {
      case 1: {
        return <NewOrderIcon />;
      }
      case 2: {
        return <InProgressOrder />;
      }
      case 3: {
        return <OnDeliveryOrder />;
      }
      case 4: {
        return <CompletedOrder />;
      }
      case 5: {
        return <CancelOrder />;
      }
      default: {
        return null;
      }
    }
  };

  const caculateSubtotal = () => {
    let subTotal = data?.cartData?.reduce((total, item) => {
      let itemTotal = item?.price?.value * 1;
      let topingTotal = [item?.topping]?.reduce(
        (toppingTotal, topping) =>
          (toppingTotal += topping?.isChecked ? parseInt(topping?.price?.value) : 0),
        0,
      );
      total += (itemTotal + topingTotal) * item?.amount;
      return total;
    }, 0);
    return subTotal;
  };
  const ORDER_SUBTOTAL = React.useMemo(
    () => caculateSubtotal(),
    [JSON.stringify(data)],
  );

  return (
    <View style={styles.promotionContentContainer}>
      <ScrollView
        contentContainerStyle={styles.contentWrapper}
        showsVerticalScrollIndicator={false}>
        {loading ? (
          <>
            <Loader />
          </>
        ) : (
          <>
            <View style={styles.orderDetailsContainer}>
              {data?.cartData?.map((item, index) => (
                <>
                  <ProductItem item={item} key={index} />
                  <DashLine width={WIDTH - 40} />
                </>
              ))}
            </View>

            <View style={styles.caculateArea}>
              <View style={styles.wrapTextRow}>
                <Text style={styles.itemPrice}>
                  {i18n.t('profiles:sub_total')}
                </Text>
                <Text style={styles.textBlack}>
                  {currencyFormatWithNoSpace(ORDER_SUBTOTAL, 'đ')}
                </Text>
              </View>
              <View style={styles.wrapTextRow}>
                <Text style={styles.itemPrice}>
                  {i18n.t('profiles:shipping_fee')}
                </Text>
                <Text style={styles.textBlack}>
                  {currencyFormatWithNoSpace(
                    data?.deliveryMethod?.price?.value * 1 || 0,
                    'đ',
                  )}
                </Text>
              </View>
              <View style={styles.wrapTextRow}>
                <Text style={styles.itemPrice}>
                  {i18n.t('profiles:discount')}
                </Text>
                <Text style={styles.textGreen}>
                  -
                  {currencyFormatWithNoSpace(
                    Math.abs(ORDER_SUBTOTAL - data?.totalPay),
                    'đ',
                  )}
                </Text>
              </View>
              <View style={styles.wrapTextRow}>
                <Text style={styles.itemPrice}>{i18n.t('profiles:total')}</Text>
                <Text style={styles.total}>
                  {currencyFormatWithNoSpace(parseInt(data?.totalPay), 'đ')}
                </Text>
              </View>
              <View style={styles.bannerContainer}>{getOrderBackground()}</View>
            </View>
            <DashLine width={WIDTH - 40} />
            <View style={styles.paymentContainer}>
              <View style={styles.imageContainer}>
                <FImage
                  uri={data?.paymentMethod?.icon_url}
                  style={styles.bannerImage}
                />
              </View>
              <Text style={styles.paymentText}>
                {data?.paymentMethod?.name || ''}
              </Text>
            </View>
          </>
        )}
      </ScrollView>
    </View>
  );
};
export default OrderDetails;
