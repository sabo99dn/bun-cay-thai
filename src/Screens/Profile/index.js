import React, {useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {useDispatch} from 'react-redux';
import ListItems from './ListItems';
import FastImage from 'react-native-fast-image';
import styles from './styles';
import SlideInModal from '../../Components/SlideInModal';
import PageDetails from '../PageDetails';
import {AnalyticsAction} from '../../Utils/analytics';
import RoutesConfig from '../../Configs/routes';
import {actions as userActions} from '../../Store/user/reducer';
import {
  PersonalPage,
  BranchListIcon,
  SalePolici,
  ShipLocation,
  DeliveryPolicy,
  OrderManageIcon,
  RechargePolicy,
} from '../../svg/profile';

const list = [
  {
    it18n: 'profile:personal_page',
    icon: <PersonalPage />,
    onPress: navigation => {
      AnalyticsAction(
        () =>
          navigation.navigate(
            RoutesConfig.MainStack.screens.BottomTabs.screens.ProfileStack
              .screens.Account.name,
          ),
        {
          routes: RoutesConfig.AuthStack.screens.Account,
          action: 'navigation',
        },
      );
    },
  },
  {
    it18n: 'profile:delivery_address',
    icon: <ShipLocation />,
    onPress: navigation => {
      AnalyticsAction(
        () =>
          navigation.navigate(RoutesConfig.MainStack.screens.ShippingAddress),
        {
          routes: RoutesConfig.MainStack.screens.ShippingAddress,
          action: 'navigation',
        },
      );
    },
  },
  {
    it18n: 'profile:list_of_branches',
    icon: <BranchListIcon />,
    onPress: navigation => {
      AnalyticsAction(
        () =>
          navigation.navigate(
            RoutesConfig.MainStack.screens.BottomTabs.screens.ProfileStack
              .screens.Branchs,
          ),
        {
          routes: RoutesConfig.AuthStack.screens.ShippingAddress,
          action: 'navigation',
        },
      );
    },
  },
  {
    it18n: 'profile:order_management',
    icon: <OrderManageIcon />,
    onPress: navigation => {
      AnalyticsAction(
        () =>
          navigation.navigate(
            RoutesConfig.MainStack.screens.BottomTabs.screens.ProfileStack
              .screens.OrderList,
          ),
        {
          routes:
            RoutesConfig.MainStack.screens.BottomTabs.screens.ProfileStack
              .screens.OrderList,
          action: 'navigation',
        },
      );
    },
  },
  // keyPage:
  // 167 = chính sách bảo mật thông tin
  // 101 = chính sách đổi trả hàng
  // 100 = chính sách giao hàng
  // 99  = chính sách bán hàng
  {
    it18n: 'profile:sales_policy',
    icon: <SalePolici />,
    onPress: () => {
      SlideInModal.show(() => {},
      <PageDetails keyPage={'99'} it18n={'profile:sales_policy'} />);
    },
  },
  {
    it18n: 'profile:delivery_policy',
    icon: <DeliveryPolicy />,
    onPress: () => {
      SlideInModal.show(() => {},
      <PageDetails keyPage={'100'} it18n={'profile:delivery_policy'} />);
    },
  },
  {
    it18n: 'profile:return_policy',
    icon: <RechargePolicy />,
    onPress: () => {
      SlideInModal.show(() => {},
      <PageDetails keyPage={'101'} it18n={'profile:return_policy'} />);
    },
  },
];

const Profile = ({navigation}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userActions.getInfoUser());
  }, []);
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      data={list}
      renderItem={item => <ListItems navigation={navigation} {...item} />}
      keyExtractor={(item, index) => index}
      ListFooterComponent={() => {
        return (
          <View style={styles.listComponent}>
            <FastImage
              resizeMode={FastImage.resizeMode.cover}
              source={require('../../assets/images/group.png')}
              style={styles.imagePolicy}
            />
            <View style={styles.wrapperImage}>
              <FastImage
                resizeMode={FastImage.resizeMode.cover}
                source={require('../../assets/images/baemin.png')}
                style={styles.imageLogo}
              />
              <FastImage
                resizeMode={FastImage.resizeMode.cover}
                source={require('../../assets/images/grab.png')}
                style={styles.imageLogo}
              />
              <FastImage
                resizeMode={FastImage.resizeMode.cover}
                source={require('../../assets/images/goFood.png')}
                style={styles.imageLogo}
              />
              <FastImage
                resizeMode={FastImage.resizeMode.cover}
                source={require('../../assets/images/now.png')}
                style={styles.imageLogo}
              />
            </View>
          </View>
        );
      }}
      ListFooterComponentStyle={styles.ListFooterComponentStyle}
      contentContainerStyle={styles.contentContainerStyle}
    />
  );
};

export default Profile;
