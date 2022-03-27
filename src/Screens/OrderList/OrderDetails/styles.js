import {Dimensions, Platform} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {getBottomSpace} from 'react-native-iphone-x-helper';
import {getStatusBarHeight} from 'react-native-status-bar-height';
const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;
const HEADER_HEIGHT = 50;
const FOOTER_HEIGHT = 60;
const WIDTH_BANNER = 66;
const BOTTOM_TAB_ANDROID = 66;
const BOTTOM_TAB_IOS = 65 + getBottomSpace();
const CONTAINER_HEIGHT = Platform.select({
  ios: HEIGHT - BOTTOM_TAB_IOS,
  android:
    getStatusBarHeight() > 24
      ? HEIGHT - BOTTOM_TAB_ANDROID * 0.7
      : HEIGHT - getStatusBarHeight() - BOTTOM_TAB_ANDROID * 0.7,
});
const styles = EStyleSheet.create({
  container: {
    height: CONTAINER_HEIGHT,
    width: WIDTH,
    flexDirection: 'column',
    paddingHorizontal: 10,
    position: 'absolute',
    alignSelf: 'center',
    bottom:
      Platform.OS === 'ios' ? BOTTOM_TAB_IOS / 2 : BOTTOM_TAB_ANDROID * 0.5,
  },
  contentWrapper: {
    flexDirection: 'column',
    paddingHorizontal: 10,
  },
  promotionHeaderContainter: {
    width: '100%',
    height: HEADER_HEIGHT,
    paddingHorizontal: 16,
    backgroundColor: '#F3F3F3',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  headerTitle: {
    fontSize: '$mediumText',
    fontWeight: '$fontWeightMedium',
    color: '#BDBDBD',
  },
  promotionFooterContainter: {
    width: '100%',
    height: 60,
    backgroundColor: '#F3F3F3',
    paddingHorizontal: 10,
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  promotionContentContainer: {
    height: CONTAINER_HEIGHT - FOOTER_HEIGHT - HEADER_HEIGHT,
    width: '100%',
    backgroundColor: '$white',
  },

  closeText: {
    fontSize: '$mediumText',
    fontWeight: '$fontWeightBold',
    lineHeight: 22,
    color: '$white',
  },
  closeButton: {
    paddingVertical: 12,
    paddingHorizontal: 46,
    borderRadius: 8,
    backgroundColor: '$btnRed',
  },
  orderDetailsContainer: {
    flex: 1,
  },
  caculateArea: {
    width: '100%',
    height: WIDTH / 2,
    position: 'relative',
  },
  paymentContainer: {
    height: WIDTH / 4,
    backgroundColor: '$white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    alignSelf: 'center',
  },
  imageContainer: {
    width: WIDTH_BANNER,
    height: WIDTH_BANNER,
    borderRadius: 33,
    backgroundColor: '$white',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 3,
  },
  bannerContainer: {
    position: 'absolute',
    alignSelf: 'center',
  },
  itemContainer: {
    flexDirection: 'column',
    paddingVertical: 20,
  },
  itemHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemQuantity: {
    backgroundColor: '$bgLogin',
    width: 50,
    height: 30,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  itemQuantityText: {
    fontSize: '$mediumText',
    fontWeight: '$fontWeightBold',
    color: '$white',
    textAlign: 'center',
  },
  itemName: {
    fontSize: '$mediumText',
    fontWeight: '$fontWeightNormal',
    color: '$btnColorBlack',
  },
  itemPrice: {
    fontSize: '$mediumText',
    fontWeight: '$fontWeightBold',
    color: '$btnColorBlack',
  },
  noteContainer: {
    width: '100%',
    borderColor: '$btnBorderColor',
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderStyle: 'dashed',
    borderRadius: 10,
    marginVertical: 15,
  },
  subItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '$bgLogin',
    marginRight: 10,
    marginLeft: 4,
  },
  wrapTextRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    alignItems: 'center',
  },
  textBlack: {
    fontSize: '$mediumText',
    fontWeight: '$fontWeightNormal',
    color: '$btnColorBlack',
  },
  textGreen: {
    fontSize: '$mediumText',
    fontWeight: '$fontWeightNormal',
    color: '$bgLogin',
  },
  total: {
    fontSize: '$maxText',
    fontWeight: '$fontWeightBold',
    color: '$btnRed',
  },
  paymentText: {
    fontSize: '$largeText',
    fontWeight: '$fontWeightBold',
    color: '$bgLogin',
  },
  bannerImage: {
    width: WIDTH_BANNER - 4,
    height: WIDTH_BANNER - 4,
    borderRadius: (WIDTH_BANNER - 4) / 2,
  },
  note: {
    color: '$btnBorderColor',
    fontWeight: '$fontWeightMedium',
    fontSize: '$normalText',
    lineHeight: '$mediumLineHeight',
    fontStyle: 'italic',
  },
  bottomTitle: {
    fontSize: '$mediumText',
    fontWeight: '$fontWeightMedium',
    color: '$txtFocusInput',
  },
});

export default styles;
