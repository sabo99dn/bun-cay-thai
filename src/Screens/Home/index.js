import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import {useDispatch} from 'react-redux';
import styles from './styles';
import Header from './Header';
import Carousel from './Carousel';
import PromotionProduct from './PromotionProduct';
import {useTranslation} from 'react-i18next';
import PromotionNews from './PromotionNews';
import FlashSale from './FlashSale/FlashSale';
import {useNavigation} from '@react-navigation/native';
import {actions as flashSaleActions} from '../../Store/flashSale/reducer';
import RoutesConfig from '../../Configs/routes';
import {PAGE_DEFAULT, GET_ALL_DATA_LIMIT} from '../../Configs/contants';
import {AnalyticsAction} from '../../Utils/analytics';
const Home = () => {
  const {i18n} = useTranslation();
  const dispatch = useDispatch();
  const [refreshing, handleRefreshing] = useState(false);
  const [keyRender, setKeyRender] = useState(1);
  const navigation = useNavigation();
  useEffect(() => {
    setKeyRender(keyRender + 1);
    handleRefreshing(false);
    dispatch(
      flashSaleActions.getList({
        page: PAGE_DEFAULT,
        limit: GET_ALL_DATA_LIMIT,
      }),
    );
  }, [refreshing]);

  const handleRefresh = () => {
    handleRefreshing(true);
  };

  return (
    <View style={styles.container}>
      <Header />
      <SafeAreaView style={styles.container}>
        <View style={styles.body}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={handleRefresh}
              />
            }>
            <View style={styles.wrapperCarousel}>
              <Carousel key={'Carousel' + keyRender} />
            </View>
            <View style={styles.wrapper}>
              <FlashSale />
            </View>
            <View style={styles.wrapper}>
              <View style={styles.headerBox}>
                <Text style={styles.title}>{i18n.t('home:sale_ready')}</Text>
                <TouchableOpacity
                  onPress={() => {
                    AnalyticsAction(
                      () =>
                        navigation.navigate(
                          RoutesConfig.MainStack.screens.ProductPromotion.name,
                        ),
                      {
                        routes:
                          RoutesConfig.MainStack.screens.BottomTabs.screens
                            .Promotion.screens.Promotion.name,
                        action: 'navigation',
                      },
                    );
                  }}>
                  <Text style={styles.seemore}>
                    {i18n.t('common:view_more')}
                  </Text>
                </TouchableOpacity>
              </View>
              <PromotionProduct key={'PromotionProduct' + keyRender} />
            </View>
            <View style={styles.wrapper}>
              <View style={styles.headerBox}>
                <Text style={styles.title}>
                  {i18n.t('home:title_promotion')}
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    AnalyticsAction(
                      () =>
                        navigation.navigate(
                          RoutesConfig.MainStack.screens.BottomTabs.screens
                            .Promotion,
                        ),
                      {
                        routes:
                          RoutesConfig.MainStack.screens.BottomTabs.screens
                            .Promotion.screens.Promotion.name,
                        action: 'navigation',
                      },
                    );
                  }}>
                  <Text style={styles.seemore}>
                    {i18n.t('common:view_more')}
                  </Text>
                </TouchableOpacity>
              </View>
              <PromotionNews key={'PromotionNews' + keyRender} />
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Home;
