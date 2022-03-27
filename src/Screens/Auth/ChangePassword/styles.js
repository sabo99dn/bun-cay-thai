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
  contactPhone: {
    marginTop: 10,
    fontSize: '$mediumText',
    color: '$bgLogin',
  },
  footer: {
    bottom: 0,
    position: 'absolute',
    alignSelf: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '$white',
    paddingHorizontal: 32,
    paddingTop: 10,
    paddingBottom:
      Platform.OS === 'android'
        ? 10
        : getBottomSpace() > 0
        ? getBottomSpace()
        : 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 8,
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
