import { Platform } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
export default EStyleSheet.create({
  wrap: {
    marginHorizontal: 10,
    position: 'absolute',
    top:
      getStatusBarHeight() +
      Platform.select({
        android: 0,
        ios: 10,
      }),
    bottom: getStatusBarHeight() + 10,
    overflow: 'hidden',
    borderRadius: 20,
    alignSelf: 'center',
  },
  wrapPrice: {
    paddingTop: 10,
    flexDirection: 'row',
  },
  textDiscount: {
    color: '$txtFocusInput',
    fontSize: '$mediumLineHeight',
    lineHeight: 23,
    fontWeight: '$fontWeightBold',
  },
  viewSeparated: {
    width: 2,
    height: 17,
    backgroundColor: '$txtFocusInput',
    marginHorizontal: 7,
    alignSelf: 'center',
  },
  textMoneyOrigin: {
    paddingTop: 4,
    fontWeight: '$fontWeightBold',
    paddingHorizontal: 1,
    color: '$btnColorBlack',
  },
  viewSeparated: {
    width: 2,
    height: 17,
    backgroundColor: '$txtFocusInput',
    marginHorizontal: 7,
    alignSelf: 'center',
  },
  centerTextMoney: {
    height: 1,
    width: '100%',
    backgroundColor: '$black',
    position: 'absolute',
    alignSelf: 'center',
    top: '50%',
    marginTop: Platform.select({
      android: 2,
      ios: 0,
    }),
  },
  coverPhoto: {
    width: '100%',
    height: 222,
  },
  btnClose: {
    position: 'absolute',
    top: 15,
    right: 15,
  },
  des: {
    fontSize: '$normalText16',
    lineHeight: 20,
    color: '$btnBorderColor',
    marginTop: 10,
    fontFamily: 'Roboto',
  },
  wrapContent: {
    paddingVertical: 20,
    paddingHorizontal: 14,
  },
  productName: {
    fontWeight: '$fontWeightBold',
    fontSize: '$largeText',
    color: '$btnColorBlack',
  },
  wrapSeparated: {
    height: 3,
    backgroundColor: '$contentLoaderBackgroundColor',
  },
  textLeftDes: {
    color: '$btnRed',
  },
  toppingTitleWrapper: {
    paddingBottom: 16,
  },
  toppingTitle: {
    color: '$btnColorBlack',
    fontWeight: '$fontWeightBold',
    fontSize: '$mediumText',
    lineHeight: 21,
  },
  wrapTopping: {
    paddingHorizontal: 14,
    paddingVertical: 22,
  },
  height1: {
    height: 1,
  },
  specialNote: {
    fontSize: '$normalText16',
    lineHeight: 18,
    color: '$btnBorderColor',
    marginTop: 10,
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  rightNote: {
    color: '$btnColorBlack',
    fontWeight: '$fontWeightBold',
    fontSize: '$mediumText',
    lineHeight: 21,
  },
  textInput: {
    marginHorizontal: 10,
    fontStyle: 'italic',
    fontSize: '$mediumText',
    lineHeight: 21,
    marginVertical: 10,
    color: 'black',
    minHeight: 150,
  },
  wrapBottom: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    textAlignVertical: 'top',
    backgroundColor: '$white',
  },
  wrapAmount: {
    marginVertical: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapSeparated2: {
    width: '100%',
    height: 1,
    backgroundColor: '$contentLoaderBackgroundColor',
  },
  textAmount: {
    marginHorizontal: 18,
    fontSize: '$textAmount',
    color: '$btnColorBlack',
  },
  wrapBtnAddToCart: {
    backgroundColor: Platform.select({
      android: '$transparent',
      ios: '$white',
    }),
    width: '102%',
    shadowColor: '$shadow',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.23,
    shadowRadius: 3,
    elevation: 2,
    paddingVertical: 14,
    borderTopWidth: 1,
    borderColor: '$transparent',
  },
  btnAddToCart: {
    width: '90%',
    height: 44,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '$txtFocusInput',
    alignSelf: 'center',
  },
  textAddToCart: {
    color: '$white',
    fontSize: '$normalLineHeight',
    fontFamily: '$fontBold',
  },
  flex1: {
    backgroundColor: '$white',
    flex: 1,
  },
});
