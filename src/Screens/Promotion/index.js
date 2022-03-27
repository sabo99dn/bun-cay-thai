import React from 'react';
import {View, Text, useWindowDimensions} from 'react-native';

import styles from './styles';
import ListNews from './PromoNews';
import Listkeys from './PromoKeys';

import {useTranslation} from 'react-i18next';

import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {StatusBar} from 'react-native';

const renderScene = SceneMap({
  vouchers: Listkeys,
  news: ListNews,
});

const Promotion = () => {
  const {i18n} = useTranslation();
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    {key: 'vouchers', title: i18n.t('promotion:code')},
    {key: 'news', title: i18n.t('promotion:promotions_news_lower')},
  ]);

  return (
    <View style={styles.container}>
      {/* <StatusBar backgroundColor="#fff" /> */}
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
        renderTabBar={props => (
          <TabBar
            {...props}
            style={styles.tabbarContainer}
            labelStyle={styles.tabbarText}
            activeColor={'#80CD28'}
            inactiveColor={'#333'}
            indicatorStyle={styles.indicatorStyle}
            renderLabel={({route, focused, color}) => (
              <Text
                style={focused ? styles.tabbarTextActive : styles.tabbarText}>
                {route?.title}
              </Text>
            )}
          />
        )}
      />
    </View>
  );
};

export default Promotion;
