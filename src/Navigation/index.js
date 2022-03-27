import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import RootNavigator from './RootNavigator';
import {loginSuccessSelector} from '../Store/auth/selectors';
import routesConfig from '../Configs/routes';
import {useTranslation} from 'react-i18next';
import * as Screens from '../Screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const RenderStackScreen = ({configRoutes}) => {
  const key = configRoutes.name;
  const screens = Object.values(configRoutes.screens);
  const StackScreen = createStackNavigator();
  const {i18n} = useTranslation();
  const component = screens.map(item => {
    switch (item.modeScreen) {
      case 'STACK':
        return (
          <StackScreen.Navigator
            key={item.name}
            name={item.name}
            screenOptions={{
              title: i18n.t('navigation:' + item.i18n),
            }}
            {...item.props}>
            {prop => <RenderStackScreen {...prop} configRoutes={item} />}
          </StackScreen.Navigator>
        );
        break;
      case 'TAB':
        return (
          <StackScreen.Screen
            key={item.name}
            name={item.name}
            title={i18n.t(item.i18n)}
            {...item.props}
            options={{
              title: i18n.t('navigation:' + item.i18n),
              ...(item?.props?.options || null),
            }}>
            {prop => <RenderTabScreen {...prop} configRoutes={item} />}
          </StackScreen.Screen>
        );
        break;
      case 'SCREEN':
        return (
          <StackScreen.Screen
            key={item.name}
            name={item.name}
            {...item.props}
            options={{
              title: i18n.t('navigation:' + item.i18n),
              ...(item?.props?.options || null),
            }}
            component={Screens[item.screenName]}
          />
        );
        break;
    }
  });
  return (
    <StackScreen.Navigator key={key} {...configRoutes.props}>
      {component}
    </StackScreen.Navigator>
  );
};

const RenderTabScreen = ({configRoutes}) => {
  const key = configRoutes.name;
  const screens = Object.values(configRoutes.screens);
  const Tab = createBottomTabNavigator();
  const {i18n} = useTranslation();
  const component = screens.map(item => {
    switch (item.modeScreen) {
      case 'STACK':
        return (
          <Tab.Screen
            key={item.name}
            name={item.name}
            title={i18n.t(item.i18n)}
            {...item.props}>
            {prop => <RenderStackScreen {...prop} configRoutes={item} />}
          </Tab.Screen>
        );
        break;
      case 'TAB':
        return (
          <Tab.Screen key={item.name} name={item.name} {...item.props}>
            {prop => <RenderTabScreen {...prop} configRoutes={item} />}
          </Tab.Screen>
        );
        break;
      case 'SCREEN':
        return (
          <Tab.Screen
            key={item.name}
            name={item.name}
            title={i18n.t(item.i18n)}
            {...item.props}
            component={Screens[item.screenName]}
          />
        );
        break;
    }
  });
  return (
    <Tab.Navigator key={key} {...configRoutes.props}>
      {component}
    </Tab.Navigator>
  );
};

const RenderStack = configRoutes => {
  const {i18n} = useTranslation();
  const component = configRoutes.map(item => {
    switch (item.modeScreen) {
      case 'STACK':
        return (
          <Stack.Screen
            key={item.name}
            name={item.name}
            title={i18n.t(item.i18n)}
            options={{
              title: i18n.t('navigation:' + item.i18n),
            }}
            {...item.props}>
            {prop => <RenderStackScreen {...prop} configRoutes={item} />}
          </Stack.Screen>
        );
        break;
      case 'TAB':
        return (
          <Stack.Screen
            key={item.name}
            name={item.name}
            title={i18n.t(item.i18n)}
            options={{
              title: i18n.t('navigation:' + item.i18n),
            }}
            {...item.props}>
            {prop => <RenderTabScreen {...prop} configRoutes={item} />}
          </Stack.Screen>
        );
        break;
      case 'SCREEN':
        return (
          <Stack.Screen
            key={item.name}
            name={item.name}
            title={i18n.t(item.i18n)}
            options={{
              title: i18n.t('navigation:' + item.i18n),
            }}
            {...item.props}
            component={Screens[item.screenName]}
          />
        );
        break;
    }
  });
  return component;
};

const RootStack = () => {
  const loginSuccess = useSelector(state => loginSuccessSelector(state));
  const component = RenderStack(Object.values(routesConfig));
  return (
    <NavigationContainer
      ref={containerRef => {
        RootNavigator.setTopLevelNavigator(containerRef);
      }}>
      <Stack.Navigator
        headerMode={'none'}
        initialRouteName={
          loginSuccess
            ? routesConfig.MainStack.name
            : routesConfig.AuthStack.name
        }>
        {component}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
