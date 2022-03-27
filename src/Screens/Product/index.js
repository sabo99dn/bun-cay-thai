import React, {useEffect, useRef, useState} from 'react';
import {
  SectionList,
  TouchableOpacity,
  View,
  Text,
  ScrollView,
} from 'react-native';
import {PAGE_DEFAULT, GET_ALL_DATA_LIMIT} from '../../Configs/contants';
import {useDispatch, useSelector} from 'react-redux';
import {groupBy} from 'lodash';
import {actions as productActions} from '../../Store/product/reducer';
import * as productSelector from '../../Store/product/selectors';
import * as productSaleSelector from '../../Store/productSale/selector';
import {actions as flashSaleActions} from '../../Store/flashSale/reducer';
import {actions as productSaleActions} from '../../Store/productSale/reducer';
import {actions as categoryActions} from '../../Store/category/reducer';
import * as categorySelector from '../../Store/category/selectors';
import styles from './styles';
import ProductItem from './components/ProductItem';
import HeaderLocationCart from '../../Components/Header/HeaderLocationCart';
import {addItemToCart} from '../../Store/cart/actions';
import {useNavigation, useRoute} from '@react-navigation/native';
import {cartDataSelector} from '../../Store/cart/selectors';
import {currencyFormatWithNoSpace} from '../../Utils/currency';
import ProductDetail from '../ProductDetail';
import SlideInModal from '../../Components/SlideInModal';
import ProductItemLoader from './components/ProductItemLoader';
import ScrollTitleLoader from './components/SCrollTitleLoader';
import FlashSale from './components/FlashSale';
import TitleLoader from './components/TitleLoader';
import {getUserAddress} from '../../Store/user/selector';
import {AnalyticsAction} from '../../Utils/analytics';
import RoutesConfig from '../../Configs/routes';
import HeaderCT from '../../Components/Header/HeaderCT';
import {useTranslation} from 'react-i18next';
import {BackHandler} from 'react-native';

const keyExtractor = item => item.id;

const getTotalToppingMoney = (data = []) => {
  let total = 0;
  for (let i of data) {
    if (i.isChecked) {
      total += parseInt(i.price);
    }
  }
  return total;
};

export const getTotalMoney = (data = []) => {
  let total = 0;
  for (let i of data) {
    const productPrice = parseInt(
      i.is_sale == 1 ? i.price_discount : i.price_value,
    );
    total += parseInt(
      i.amount * (productPrice + getTotalToppingMoney(i.topping)),
    );
  }
  return total;
};

let isCanSetActiveItem = true;
function getLargestString(s, k) {
  let key = '';
  let num = 0;
  let numTemp = 0;
  let arrayString = s.split('').sort();
  for (let i = 0 ; i < arrayString.length; i++) {
    key = arrayString[i];
    num = 0;
    for (let j = 0; j < arrayString.length; j++) {
      if (key === arrayString[j]) {
        num++;
      }
      if (num !== k) {
        let temp = arrayString[j];
        arrayString[j] = arrayString[j + 1];
        arrayString[j + 1] = temp;
      }
    }
  }
  return arrayString;
}
console.log(getLargestString('zzzaz', 2));

const Product = props => {
  const is_promotion_product = props.is_promotion ? props.is_promotion : false;
  const sectionListRef = useRef(null);
  const scrollViewRef = useRef(null);
  const dispatch = useDispatch();
  const {navigate, goBack} = useNavigation();
  const {name} = useRoute();
  const productData = useSelector(state =>
    productSelector.getListSelector(state),
  );
  const productSaleData = useSelector(state =>
    productSaleSelector.getListSelector(state),
  );

  const categoryData = useSelector(state =>
    categorySelector.getListSelector(state),
  );
  const userAddress = useSelector(getUserAddress);
  const isLoading = useSelector(state =>
    productSelector.getListLoadingSelector(state),
  );
  const isLoadingCategory = useSelector(state =>
    categorySelector.getListLoadingSelector(state),
  );
  const cartData = useSelector(cartDataSelector);
  const [data, setData] = useState([]);
  const [titleData, setTitleData] = useState([]);
  const [activeItem, setActiveItem] = useState(1);
  const {i18n} = useTranslation();
  const isProductStack = name === RoutesConfig.MainStack.screens.Product.name;

  const getTitle = id =>
    (categoryData.find(item => item.id === id) || {}).name || '';

  const onPressTitle = (id, index) => async () => {
    if (isCanSetActiveItem) {
      isCanSetActiveItem = false;
      await setActiveItem(id);
      sectionListRef &&
        sectionListRef.current &&
        sectionListRef.current.scrollToLocation({
          sectionIndex: index,
          itemIndex: 0,
        });
      const timeout = setTimeout(() => {
        isCanSetActiveItem = true;
        clearTimeout(timeout);
      }, 300);
    }
  };

  const onPressProductItem = item => () => {
    SlideInModal.show(() => {},
    <ProductDetail item={item} navigate={navigate} />);
  };

  const onAddProductItem = item =>
    dispatch(addItemToCart({...item, amount: 1}));

  const onViewableItemsChanged = ({viewableItems}) => {
    if (isCanSetActiveItem) {
      const dataTemp = groupBy(
        viewableItems.filter(i => i.index !== null),
        'item.categoryId',
      );
      const result = Object.keys(dataTemp).map(key => ({
        id: parseInt(key),
        length: dataTemp[key].length,
      }));
      if (result && result.length && result[0].id !== activeItem) {
        setActiveItem(result[0].id);
      }
    }
  };

  const renderItem = ({item}) => (
    <ProductItem
      key={item.id}
      item={item}
      onPress={onPressProductItem(item)}
      onAdd={onPressProductItem(item)}
    />
  );

  const renderSectionHeader = ({section: {title = ''}}) => (
    <Text style={styles.title}>{title.toUpperCase()}</Text>
  );

  const goToOrderScreen = () => {
    cartData &&
      cartData.length &&
      AnalyticsAction(
        () => navigate(RoutesConfig.MainStack.screens.Order.name),
        {
          routes: RoutesConfig.MainStack.screens,
          action: 'navigation',
        },
      );
  };

  const getProduct = () => {
    dispatch(categoryActions.getList());
    if (is_promotion_product) {
      dispatch(
        productSaleActions.getList({
          page: PAGE_DEFAULT,
          limit: GET_ALL_DATA_LIMIT,
        }),
      );
    } else {
      dispatch(
        productActions.getList({page: PAGE_DEFAULT, limit: GET_ALL_DATA_LIMIT}),
      );
      dispatch(
        flashSaleActions.getList({
          page: PAGE_DEFAULT,
          limit: GET_ALL_DATA_LIMIT,
        }),
      );
    }
  };

  useEffect(() => {
    if (is_promotion_product) {
      if (productSaleData && productSaleData.length) {
        const dataTemp = groupBy(productSaleData, 'categoryId');
        const result = Object.keys(dataTemp).map(key => ({
          id: parseInt(key),
          title: getTitle(key),
          data: dataTemp[key],
        }));
        setData(result);
      }
    } else {
      if (productData && productData.length) {
        const dataTemp = groupBy(productData, 'categoryId');
        const result = Object.keys(dataTemp).map(key => ({
          id: parseInt(key),
          title: getTitle(key),
          data: dataTemp[key],
        }));
        setData(result);
      }
    }
  }, [productData, productSaleData, categoryData]);

  useEffect(() => {
    const dataTemp = data.map(item => ({id: item.id, name: item.title}));
    dataTemp.sort((a, b) => a.id - b.id);
    setTitleData(dataTemp);
  }, [data]);

  useEffect(() => {
    if (!isProductStack) {
      getProduct();
    }
  }, []);

  useEffect(() => {
    scrollViewRef &&
      scrollViewRef.current &&
      scrollViewRef.current.scrollTo({
        x: (parseInt(activeItem) - 1) * 150,
        y: 0,
        animated: true,
      });
  }, [activeItem]);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', e => {
      SlideInModal.hide();
      return true;
    });
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', e => {
        SlideInModal.hide();
        return true;
      });
    };
  }, []);
  return (
    <View style={styles.wrapper}>
      {isProductStack ? (
        <HeaderCT
          title={i18n.t('screensTitle:Product')}
          isShowBack
          isShowCart
          onBack={goBack}
          onPressCart={goToOrderScreen}
          headerStyle={isProductStack && styles.headerStyle}
        />
      ) : (
        <HeaderLocationCart
          isShowCart
          address={userAddress}
          onPressCart={goToOrderScreen}
          wrapStyle={is_promotion_product ? {paddingTop: 12} : {}}
        />
      )}

      <View style={styles.wrapScrollTitle}>
        {(isLoading || isLoadingCategory) &&
        !isProductStack &&
        !Boolean(titleData.length) ? (
          <ScrollTitleLoader />
        ) : (
          <ScrollView
            ref={scrollViewRef}
            horizontal
            contentContainerStyle={{
              flexWrap: 'wrap',
              alignItems: 'center',
            }}
            showsHorizontalScrollIndicator={false}>
            {titleData.map((item, index) => (
              <TouchableOpacity
                key={item.id}
                onPress={onPressTitle(item.id, index)}
                style={[
                  styles.btnTitle,
                  item.id === activeItem && styles.btnTitleActive,
                ]}>
                <Text
                  style={
                    ([styles.textBtnTitle],
                    item.id === activeItem
                      ? styles.textBtnTitleActive
                      : styles.textBtnTitleInActive)
                  }>
                  {item.name}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        )}
      </View>

      <View style={{flex: 1}}>
        {(isLoading || isLoadingCategory) && !Boolean(data.length) ? (
          <>
            <TitleLoader style={{marginTop: 25}} />
            <ProductItemLoader />
            <ProductItemLoader style={{marginTop: 15}} />
            <ProductItemLoader style={{marginTop: 15}} />
            <ProductItemLoader style={{marginTop: 15}} />
          </>
        ) : (
          <View style={{flex: 1}}>
            <SectionList
              ListHeaderComponent={is_promotion_product ? null : <FlashSale />}
              ref={sectionListRef}
              sections={data}
              keyExtractor={keyExtractor}
              renderItem={renderItem}
              showsVerticalScrollIndicator={false}
              renderSectionHeader={renderSectionHeader}
              style={styles.wrapList}
              stickySectionHeadersEnabled={false}
              extraData={data}
              removeClippedSubviews={true}
              maxToRenderPerBatch={10}
              onViewableItemsChanged={onViewableItemsChanged}
              viewabilityConfig={{
                itemVisiblePercentThreshold: 17, //means if 17% of the item is visible
              }}
              contentContainerStyle={
                isProductStack
                  ? styles.contentContainerStyle
                  : styles.contentContainerStyle1
              }
              onRefresh={getProduct}
              refreshing={isLoading}

              // TODO: Refresh, LoadMore
              // ListEmptyComponent={renderListEmptyComponent}
              // onRefresh={onRefresh}
              // refreshing={isRefreshing}
              // onEndReached={onLoadMore}
              // onEndReachedThreshold={0.5}
              // onMomentumScrollBegin={onMomentumScrollBegin}
              // ListFooterComponent={renderListFooterComponent}
            />
          </View>
        )}
      </View>

      {Boolean(cartData.length) && isProductStack && (
        <View style={styles.wrapViewBottom}>
          <TouchableOpacity onPress={goToOrderScreen} style={styles.btnBottom}>
            <View style={styles.wrapChildBottom}>
              <Text style={styles.textLeft}>
                {`Có ${
                  cartData.length.toString().length > 1
                    ? cartData.length
                    : '0' + cartData.length
                } sản phẩm trong giỏ hàng | `}
              </Text>
              <Text style={styles.textRight}>
                {`${currencyFormatWithNoSpace(getTotalMoney(cartData))}`}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Product;
