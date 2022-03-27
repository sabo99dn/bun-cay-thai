import EStyleSheet from 'react-native-extended-stylesheet';
import {Dimensions} from 'react-native';
import {getBottomSpace} from 'react-native-iphone-x-helper';
import {getStatusBarHeight} from 'react-native-status-bar-height';
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

  listWrapper: {
    flex: 1,
  },
  listInner: {
    paddingHorizontal: 10,
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    paddingHorizontal: 10,
    backgroundColor: '$white',
    justifyContent: 'center',
    paddingBottom: 10 + getBottomSpace() / 2 || 0,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 10,
  },

  confirm: {
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
  itemContainer: {
    width: '100%',
    minHeight: WIDTH / 2.6 - 20,
    borderRadius: 8,
    marginTop: 20,
    backgroundColor: '$white',
    flexDirection: 'column',
    position: 'relative',
    padding: 13,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 2,
  },
  itemContainerActive: {
    width: '100%',
    minHeight: WIDTH / 2.6 - 20,
    borderRadius: 8,
    marginTop: 20,
    backgroundColor: '$activeCardBackground',
    flexDirection: 'column',
    position: 'relative',
    padding: 13,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 2,
  },
  addressName: {
    fontWeight: '$fontWeightBold',
    fontSize: '$largeText',
    color: '$btnColorBlack',
    lineHeight: '$largeLineHeight',
  },
  userName: {
    fontWeight: '$fontWeightBold',
    fontSize: '$mediumText',
    color: '$bgLogin',
    lineHeight: '$maxLineHeight',
  },

  textRed: {
    fontWeight: '$fontWeightNormal',
    fontSize: '$mediumText',
    color: '$btnRed',
    maxWidth: '80%',
    lineHeight: '$largeText',
  },
  textBlack: {
    fontWeight: '$fontWeightNormal',
    fontSize: '$mediumText',
    color: '$btnColorBlack',
    maxWidth: '80%',
    lineHeight: '$largeText',
  },
  textGreen: {
    fontWeight: '$fontWeightNormal',
    fontSize: '$mediumText',
    color: '$bgLogin',
    maxWidth: '80%',
    lineHeight: '$largeText',
  },
  buttonText: {
    fontWeight: '$fontWeightNormal',
    fontSize: '$normalText16',
    color: '$white',
  },
  wrapTextRow: {
    flexDirection: 'row',
    marginTop: 5,
  },
  wrapButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonStyle: {
    width: 65,
    height: 25,
    backgroundColor: '$btnRed',
    borderWidth: 0,
    borderRadius: 8,
  },
  checked: {
    position: 'absolute',
    top: -1,
    right: -1,
  },
  loaderContainer: {
    flex: 1,
    backgroundColor: '$white',
    paddingTop: 20,
  },
  loaderItem: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    overflow: 'hidden',
  },
  notFoundText: {
    alignSelf: 'center',
    marginTop: 20,
    fontSize: '$normalText',
    fontWeight: '$fontWeightMedium',
    color: '#999',
  },
  headerContainer: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: getStatusBarHeight(),
    backgroundColor: '$white',
    shadowColor: '$shadow',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
    borderBottomWidth: 1,
    borderColor: '$btnBorderColor',
  },
});
