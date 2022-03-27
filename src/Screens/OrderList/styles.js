import EStyleSheet from 'react-native-extended-stylesheet';
import {Dimensions} from 'react-native';
const WIDTH = Dimensions.get('window').width;
const WIDTH_BANNER = 66;
export default EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '$white',
  },

  background1: {backgroundColor: '$activeCardBackground'},
  background2: {backgroundColor: '$activeCardBackground'},
  background3: {backgroundColor: '$backgroundOrderOndelivery'},
  background4: {backgroundColor: '$white'},
  background5: {backgroundColor: '$cancelOrder'},
  border1: {borderColor: '$txtFocusInput'},
  border2: {borderColor: '$txtFocusInput'},
  border3: {borderColor: '$btnRed'},
  border4: {borderColor: '$borderGray'},
  border5: {borderColor: '$btnBorderColor'},
  orderCodeColor1: {
    borderColor: '$txtFocusInput',
    color: '$txtFocusInput',
  },
  orderCodeColor2: {
    borderColor: '$txtFocusInput',
    color: '$txtFocusInput',
  },
  orderCodeColor3: {
    borderColor: '$txtFocusInput',
    color: '$txtFocusInput',
  },
  orderCodeColor4: {
    borderColor: '$txtFocusInput',
    color: '$txtFocusInput',
  },
  orderCodeColor5: {
    borderColor: '$btnColorBlack',
    color: '$btnColorBlack',
  },
  statusNameColor1: {
    color: '$btnRed',
  },
  statusNameColor2: {
    color: '$pendingOrder',
  },
  statusNameColor3: {
    color: '$deliveringOrder',
  },
  statusNameColor4: {
    color: '$txtFocusInput',
  },
  statusNameColor5: {
    color: '$btnColorBlack',
  },
  branchColor1: {
    color: '$txtFocusInput',
  },
  branchColor2: {
    color: '$txtFocusInput',
  },
  branchColor3: {
    color: '$btnRed',
  },
  branchColor4: {
    color: '$btnColorBlack',
  },
  branchColor5: {
    color: '$btnColorBlack',
  },
  deliveryColor1: {
    color: '$bgLogin',
  },
  deliveryColor2: {
    color: '$btnRed',
  },

  listWrapper: {
    flex: 1,
    height: '100%',
    backgroundColor: '$white',
  },
  listInner: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  itemContainer: {
    width: '100%',
    minHeight: WIDTH / 3.6,
    borderWidth: 0.5,
    borderRadius: 8,
    backgroundColor: '$white',
    marginBottom: 20,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 2,
  },
  itemBlock1: {
    flex: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  itemBlock2: {
    flex: 18,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
    padding: 8,
  },
  itemBlock3: {
    flex: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerContainer: {
    width: WIDTH_BANNER,
    height: WIDTH_BANNER,
    borderRadius: 33,
    backgroundColor: '$white',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 3,
  },
  orderCodeTitle: {
    fontWeight: '$fontWeightNormal',
    fontSize: '$mediumText',
    lineHeight: '$largeLineHeight',
    color: '$btnColorBlack',
  },
  orderCode: {
    fontWeight: '$fontWeightBold',
    fontSize: '$normalText16',
    lineHeight: '$maxText',
    borderWidth: 1,
    borderRadius: 8,
    width: '100%',
    textAlign: 'center',
    letterSpacing: -0.5,
    marginVertical: 2,
  },
  statusName: {
    fontWeight: '$fontWeightBold',
    fontSize: '$normalText16',
    lineHeight: '$maxText',
    width: '100%',
    textAlign: 'center',
    letterSpacing: -0.2,
    marginVertical: 2,
  },
  branchName: {
    textAlign: 'center',
    fontWeight: '$fontWeightBold',
    fontSize: '$normalText16',
    lineHeight: '$maxText',
  },
  delivery: {
    textAlign: 'center',
    fontWeight: '$fontWeightNormal',
    fontSize: '$normalText16',
    lineHeight: '$maxText',
  },
  createdDate: {
    textAlign: 'center',
    fontWeight: '$fontWeightNormal',
    fontSize: '$normalText',
    lineHeight: '$maxText',
    fontStyle: 'italic',
    color: '$btnColorBlack',
  },
  price: {
    textAlign: 'center',
    fontWeight: '$fontWeightBold',
    fontSize: '$normalText16',
    lineHeight: '$maxText',
  },
  priceColor1: {
    color: '$btnRed',
  },
  priceColor2: {
    color: '$btnRed',
  },
  priceColor3: {
    color: '$btnRed',
  },
  priceColor4: {
    color: '$btnRed',
  },
  priceColor5: {
    color: '$btnColorBlack',
  },
  bannerImage: {
    width: WIDTH_BANNER - 4,
    height: WIDTH_BANNER - 4,
    borderRadius: (WIDTH_BANNER - 4) / 2,
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
  loaderContainer: {
    flex: 1,
    backgroundColor: '$white',
    paddingVertical: 20,
    overflow: 'hidden',
  },
  loaderItem: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    overflow: 'hidden',
  },
});
