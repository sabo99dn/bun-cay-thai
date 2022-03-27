import {StyleSheet, Dimensions} from 'react-native';

import {theme} from '../../../theme';
import EStyleSheet from 'react-native-extended-stylesheet';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {getBottomSpace} from 'react-native-iphone-x-helper';
import {Platform} from 'react-native';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const CONTAINER_HEIGHT = Platform.select({
  ios: HEIGHT - getStatusBarHeight(),
  android: getStatusBarHeight() > 24 ? HEIGHT : HEIGHT - getStatusBarHeight(),
});

export default EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '$whiteSmoke',
    width: WIDTH * 0.9,
    position: 'absolute',
    bottom: 0,
    right: 0,
    height: CONTAINER_HEIGHT,
    paddingHorizontal: 0,
  },
  itemContainer: {
    flex: 1,
    borderRadius: 13,
    marginVertical: 8,
    backgroundColor: theme.colors.white,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 2,
    borderTopLeftRadius: 50,
  },
  listWrapper: {flex: 1},
  wrapTitle: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  title: {
    color: theme.colors.darkred,
    fontSize: '$largeText',
    fontWeight: 'bold',
    paddingBottom: 15,
    paddingLeft: 5,
  },
  decription: {
    paddingHorizontal: 20,
    paddingTop: 5,
    paddingBottom: 10,
  },
  txtdecrip: {
    fontSize: 16,
    paddingVertical: 2,
    color: '$btnColorBlack',
  },
  wrapBox: {
    position: 'absolute',
    left: -6,
    top: -6,
    width: 75,
    height: 75,
    borderRadius: 37.5,
    backgroundColor: '$whiteSmoke',
    justifyContent: 'center',
    alignItems: 'center',
  },
  saleKeys: {
    backgroundColor: theme.colors.darkred,
    width: 64,
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 64,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 2,
  },
  discount: {
    fontSize: '$largeText',
    fontWeight: 'bold',
    color: '#fff',
  },
  notFoundText: {
    alignSelf: 'center',
    marginTop: 20,
    fontSize: '$normalText',
    fontWeight: '$fontWeightMedium',
    color: '#999',
  },
  viewLoadmore: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  textGreen: {
    fontWeight: '$fontWeightNormal',
    fontSize: '$normalText16',
    lineHeight: '$mediumLineHeight',
    color: '$bgLogin',
    paddingLeft: 5,
  },
  wrapText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  loaderContainer: {
    flex: 1,
    backgroundColor: '$white',
  },
  loaderItem: {
    paddingHorizontal: 16,
    overflow: 'hidden',
  },
  buttonContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10 + getBottomSpace() / 2,
    justifyContent: 'center',

    backgroundColor: '$white',
    shadowColor: '$shadow',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 8,
  },

  confirm: {
    width: '70%',
    backgroundColor: '$bgLogin',
    borderWidth: 0,
    height: 41,
  },
  confirmDisable: {
    flex: 1,
    backgroundColor: '$bgGrey',
    borderWidth: 0,
  },
  buttonLabel: {
    color: '$white',
    fontSize: '$mediumText',
    fontWeight: '$fontWeightBold',
  },
  divider: {alignSelf: 'flex-end', width: '80%', overflow: 'hidden'},
});
