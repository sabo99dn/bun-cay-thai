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
    color: '$gray',
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
      headerStyle: {shadowColor: 'transparent'},
      headerStyle: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.1,
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
