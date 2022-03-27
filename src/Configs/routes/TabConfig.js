import React from 'react';
import {TouchableOpacity, View, Alert, Platform} from 'react-native';
import {useTranslation} from 'react-i18next';
import * as BottomIcons from '../../svg/bottomTabs';
import {Logout} from '../../svg/common';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import routes from '../../Configs/routes/index';
import {getBottomSpace} from 'react-native-iphone-x-helper';
import {actions as authActions} from '../../Store/auth/reducer';

export const headerRightLogout = props => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {i18n} = useTranslation();
  return (
    <TouchableOpacity
      style={{paddingRight: 20}}
      onPress={() => {
        Alert.alert(i18n.t('common:info'), i18n.t('common:question_logout'), [
          {
            text: i18n.t('common:cancel'),
          },
          {
            text: i18n.t('common:logout'),
            onPress: () => {
              dispatch(authActions.authLogout());
              navigation.replace(routes.AuthStack.name);
            },
          },
        ]);
      }}>
      <Logout />
    </TouchableOpacity>
  );
};
const androidStyle = {
  height: 65,
  paddingTop: 17,
  paddingBottom: 8,
  backgroundColor: '#fff',
  elevation: 8,
  borderTopWidth: 0,
};
const iosStyle = {
  height: getBottomSpace() > 0 ? 87 : 65,
  paddingTop: 17,
};
if (getBottomSpace() === 0) {
  iosStyle.paddingBottom = 5;
}
export default {
  tabBarOptions: {
    inactiveTintColor: '#333333',
    activeTintColor: '#80CD28',
    labelStyle: {
      fontSize: 14,
      marginTop: 15,
    },
    style: Platform.OS === 'android' ? androidStyle : iosStyle,
  },
  screenOptions: ({route, navigation}) => {
    const {i18n} = useTranslation();
    const Icon = BottomIcons[route.name];
    const IconActive = BottomIcons[route.name + '_ACTIVE']
      ? BottomIcons[route.name + '_ACTIVE']
      : BottomIcons[route.name];
    let style = null;
    if (route.name === 'MAIN_STACK_BOTTOM_TABS_CART_STACK') {
      style = {marginBottom: 10};
    }
    return {
      tabBarIcon: ({focused}) => (
        <View style={style}>{focused ? <IconActive /> : <Icon />}</View>
      ),
      tabBarButton: props => <TouchableOpacity {...props} />,
      title: i18n.t('navigation:' + route.name),
    };
  },
};
