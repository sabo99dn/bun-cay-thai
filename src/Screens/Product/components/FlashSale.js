import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useTranslation} from 'react-i18next';
import FImage from '../../../Components/Image/FImage';
import {currencyFormatWithNoSpace} from '../../../Utils/currency';
import {formatTypeDate} from '../../../Utils/datetime';
import SlideInModal from '../../../Components/SlideInModal';
import ProductDetail from '../../ProductDetail';
import CountDown from '../../../Components/CountDownTimer';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import moment from 'moment';
import {
  getListSelector,
  getListStartTimeSelector,
  getListEndTimeSelector,
} from '../../../Store/flashSale/selector';
import {FlashSaleImage} from '../../../svg/common';
import styles from './FlashSaleStyles';

const FlashSale = () => {
  const {i18n} = useTranslation();
  const {navigate} = useNavigation();
  const productSale = useSelector(getListSelector);

  // Time Calculation
  const startTime = useSelector(getListStartTimeSelector);
  const endTime = useSelector(getListEndTimeSelector);
  const startTimeFormat = formatTypeDate(
    startTime,
    'DD-MM-YYYY h:mm:ss',
  ).subtract(7, 'hours'); // subtract 7 hours for +7 GMT timezone
  const endTimeFormat = formatTypeDate(endTime, 'DD-MM-YYYY h:mm:ss').subtract(
    7,
    'hours',
  ); // subtract 7 hours for +7 GMT timezone
  const isStarted = moment().isAfter(startTimeFormat);
  const isOver = moment().isAfter(endTimeFormat);
  const diffTimeInSecond = endTimeFormat.diff(moment(), 'seconds');

  const unit = 'đ';
  const RenderItem = ({item = {}}) => {
    const _handlePress = () => {
      SlideInModal.show(() => {},
      <ProductDetail item={item} navigate={navigate} is_flash_sale={true} />);
    };
    const {
      qty_status,
      name = '',
      price_value = '0',
      price_discount = '0',
      image = '',
      qty_flashsale = 0,
      qty_sold = 0,
    } = item;
    const discountPercent =
      100 - (price_discount / price_value).toFixed(2) * 100;
    const soldPart = (qty_sold / qty_flashsale).toFixed(2) * 100;
    if (qty_status !== 'available') {
      return null;
    }
    return (
      <View style={styles.itemWrap}>
        <FImage uri={image} style={styles.image} />
        <View style={styles.wrapContent}>
          <Text style={styles.name} numberOfLines={1}>
            {name}
          </Text>
          <View style={styles.wrapBottom}>
            <View style={styles.wrapPrice}>
              <Text style={styles.textDiscount}>{`${currencyFormatWithNoSpace(
                parseInt(price_discount),
                unit,
              )}`}</Text>
              <View style={styles.viewSeparated} />
              {discountPercent !== 0 && (
                <View>
                  <Text
                    style={
                      styles.textMoneyOrigin
                    }>{`${currencyFormatWithNoSpace(
                    parseInt(price_value),
                    unit,
                  )}`}</Text>
                  <View style={styles.centerTextMoney} />
                </View>
              )}
            </View>
            <View style={styles.wrapViewDisCount}>
              <Text style={styles.wrapTextDisCount}>
                {`${i18n.t('product:textDiscount')} ${discountPercent}%`}
              </Text>
            </View>
          </View>
          <View style={styles.wrapBottom}>
            <View style={styles.wrapSold}>
              <View style={{...styles.soldLine, width: `${soldPart}%`}} />
              {qty_sold !== qty_flashsale ? (
                <Text style={styles.wrapSoldText}>{`${i18n.t(
                  'product:sold',
                )} ${qty_sold}`}</Text>
              ) : (
                <Text style={styles.wrapSoldText}>
                  {i18n.t('product:sold_out')}
                </Text>
              )}
            </View>
            {qty_sold !== qty_flashsale ? (
              <TouchableOpacity style={styles.btnBuy} onPress={_handlePress}>
                <Text style={styles.buyText}>{i18n.t('product:buy')}</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity style={styles.btnBuyOff}>
                <Text style={styles.buyText}>{i18n.t('product:buy_off')}</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    );
  };
  if (!productSale.length || (isStarted && !isOver)) {
    return null;
  }
  return (
    <View style={styles.wrap}>
      <View style={styles.wrapFlashSale}>
        <View style={styles.flashSaleImage}>
          <FlashSaleImage />
        </View>

        <View style={styles.wrapTimer}>
          <CountDown
            until={diffTimeInSecond}
            showSeparator
            timeToShow={['H', 'M', 'S']}
            onFinish={() => alert('finished')}
            onPress={() => alert('hello')}
            size={14}
            digitStyle={{
              backgroundColor: '#000',
            }}
            digitTxtStyle={{
              color: '#FFF',
              fontWeight: 'normal',
            }}
            timeLabels={{
              d: '',
              h: '',
              m: '',
              s: '',
            }}
          />
        </View>
      </View>
      <View>
        {productSale.map((item, index) => (
          <RenderItem item={item} key={index} />
        ))}
      </View>
    </View>
  );
};

export default FlashSale;
