import EStyleSheet from 'react-native-extended-stylesheet';
import {getBottomSpace} from 'react-native-iphone-x-helper';

export default EStyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: '$white',
  },
  wrapPaymentMethod: {
    padding: 10,
  },
  title: {
    fontSize: '$mediumText',
    lineHeight: 21,
    color: '$black',
    fontWeight: '$fontWeightBold',
    paddingHorizontal: 5,
  },
  separated: {
    height: 1,
    backgroundColor: '$btnBorderColor',
    marginVertical: 10,
  },
  shadow: {
    shadowColor: '$shadow',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2,
    elevation: 3,
  },
  wrapInfo: {
    borderRadius: 8,
    backgroundColor: '$white',
    marginHorizontal: 10,
    marginTop: 10,
    marginBottom: 71,
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textLeft: {
    fontSize: '$titleSelect',
    lineHeight: 18,
    color: '$black',
  },
  textBold: {
    fontWeight: '$fontWeightBold',
  },
  marginTop20: {
    marginTop: 20,
  },
  textGreen: {
    color: '$txtFocusInput',
  },
  textMoney: {
    fontSize: '$maxText',
    lineHeight: 28,
    color: '$btnRed',
  },
  viewMethod: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    height: 85,
    borderRadius: 8,
    backgroundColor: 'white',
    marginTop: 20,
    paddingLeft: 11,
    paddingRight: 32,
  },
  name: {
    fontSize: '$normalText',
    lineHeight: 19,
    fontWeight: '$fontWeightBold',
    color: '$black',
  },
  des: {
    fontSize: '$normalText',
    lineHeight: 19,
    fontStyle: 'italic',
    marginTop: 8,
    color: '$black',
  },
  wrapCheckBox: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '$black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapActiveCheckBox: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    backgroundColor: '$txtFocusInput',
  },
  wrapBottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingTop: 10,
    paddingBottom: 10 + getBottomSpace() / 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 2,
    borderColor: '$whiteSmoke',
    zIndex: 2,
    backgroundColor: '$white',
  },
  btnPay: {
    width: '80%',
    height: 41,
    backgroundColor: '$txtFocusInput',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textPay: {
    fontSize: '$normalText16',
    lineHeight: 19,
    fontWeight: '$fontWeightBold',
    color: '$white',
  },
});
