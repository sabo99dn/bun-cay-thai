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
    marginTop: 35,
  },
  inputWrap: {
    justifyContent: 'flex-start',
    paddingLeft: '$screenPaddingLeft',
    paddingRight: '$screenPaddingRight',
    marginTop: 35,
  },
  description: {
    paddingLeft: '$screenPaddingLeft',
    paddingRight: '$screenPaddingRight',
    color: 'black',
  },
  labelStyle: {
    fontSize: '$normalText',
    fontWeight: 'normal',
  },
  inputStyle: {
    color: '$bgLogin',
  },
  leftStyle: {
    fontWeight: '$fontWeightBold',
  },
  contactPhone: {
    marginTop: 10,
    fontSize: '$mediumText',
    color: '$bgLogin',
  },
  footer: {
    position: 'absolute',
    alignSelf: 'center',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 32,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.41,
    elevation: 8,
    paddingTop: 10,
    backgroundColor: '$white',
    bottom: 0,
    paddingBottom:
      Platform.OS === 'android'
        ? 10
        : getBottomSpace() > 0
        ? getBottomSpace()
        : 10,
  },
  lineOr: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
  },
  txtOr: {
    fontSize: '$largeText',
    paddingHorizontal: 20,
  },
});
