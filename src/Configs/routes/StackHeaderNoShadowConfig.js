import React from 'react';
import {TouchableOpacity} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import {ChevronLeft} from '../../svg/common';

const styles = EStyleSheet.create({
  titleStyle: {
    fontWeight: '$fontWeight600',
    fontSize: '$largeText',
    fontFamily: '$fontBold',
  },
  headerTitleContainerStyle: {
    left: 45,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerLeftTitle: {
    fontWeight: '$fontWeight600',
    fontSize: '$largeText',
    fontFamily: '$fontBold',
  },
  rightStyle: {
    paddingRight: 20,
  },
});

export default {
  screenOptions: ({route, navigation}) => {
    return {
      headerTitleContainerStyle: styles.headerTitleContainerStyle,
      headerTitleStyle: styles.titleStyle,
      headerTitleAlign: 'left',
      headerBackTitleVisible: false,
      headerStyle: {
        shadowColor: 'transparent',
      },

      headerLeft: () => {
        return navigation.canGoBack() ? (
          <TouchableOpacity
            style={styles.backStyle}
            onPress={() => navigation.goBack()}>
            <ChevronLeft />
          </TouchableOpacity>
        ) : null;
      },
    };
  },
};
