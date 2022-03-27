import EStyleSheet from 'react-native-extended-stylesheet';

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
    marginTop: 35,
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
  },
  footerDescription: {
    marginTop: 35,
    alignSelf: 'flex-start',
    alignItems: 'flex-start',
    paddingBottom: 35,
  },
  textDescription: {
    fontSize: '$normalText16',
    color: '$btnColorBlack',
    fontFamily: '$font',
  },
  textDescriptionBottom: {
    fontSize: '$normalText16',
    color: '$btnColorBlack',
    fontFamily: '$font',
    alignItems: 'flex-start',
    fontWeight: '$fontWeightNormal',
  },
  textDescriptionBold: {
    fontSize: '$normalText16',
    color: '$btnColorBlack',
    fontFamily: '$font',
    alignItems: 'flex-start',
    fontWeight: '$fontWeightBold',
  },
  textDescriptionEmail: {
    color: '$txtFocusInput',
  },
});
