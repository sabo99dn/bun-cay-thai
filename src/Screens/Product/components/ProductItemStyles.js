import {Platform} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  wrap: {
    flexDirection: 'row',
    borderRadius: 10,
    marginBottom: 15,
    backgroundColor: '$white',
    shadowColor: '$shadow',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 2,
  },
  image: {
    width: 125,
    height: 125,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  wrapContent: {
    flex: 1,
    paddingLeft: 16,
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingRight: 9,
  },
  name: {
    fontSize: '$mediumText',
    fontWeight: '$fontWeightBold',
    color: '$btnColorBlack',
  },
  description: {
    fontSize: '$normalLineHeight',
    lineHeight: 19,
    color: '$btnBorderColor',
    fontStyle: 'italic',
  },
  wrapBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textDiscount: {
    color: '$txtFocusInput',
    fontSize: '$mediumText',
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
    color: '$btnColorBlack',
    paddingHorizontal: 1,
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
  wrapPrice: {
    paddingTop: 10,
    flexDirection: 'row',
  },
  wrapViewDisCount: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 85,
    height: 25,
    backgroundColor: '$bgDiscount',
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '$shadow',
    shadowOffset: {
      width: 0.5,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 4,
    borderTopLeftRadius: 10,
  },
  wrapTextDisCount: {
    color: '$white',
    fontSize: '$normalText',
    fontWeight: '$fontWeightBold',
  },
});
