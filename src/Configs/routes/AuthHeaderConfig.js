import React from 'react';
import {TouchableOpacity} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
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
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,

        elevation: 3,
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
