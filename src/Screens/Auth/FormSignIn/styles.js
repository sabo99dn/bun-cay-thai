import {Platform} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {getBottomSpace} from 'react-native-iphone-x-helper';

export default EStyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '$white',
  },
  content: {
    flex: 1,
    paddingLeft: '$screenPaddingLeft',
    paddingRight: '$screenPaddingRight',
    marginTop: 35,
  },
  inputWrap: {
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
  },
  labelStyle: {
    fontSize: '$normalText',
    fontWeight: 'normal',
    color: 'black',
  },
  inputStyle: {
    color: '$bgLogin',
  },
  leftStyle: {
    fontWeight: '$fontWeightBold',
  },
  forgotPassword: {
    marginTop: 10,
    fontSize: '$mediumText',
    color: '$bgLogin',
  },
  footer: {
    bottom:
      Platform.OS === 'android'
        ? 10
        : getBottomSpace() > 0
        ? getBottomSpace()
        : 10,
    position: 'absolute',
    alignSelf: 'center',
    alignItems: 'center',
  },
  lineOr: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
  },
  txtOr: {
    fontSize: '$largeText',
    paddingHorizontal: 20,
    color: '$btnColorBlack',
  },
});
