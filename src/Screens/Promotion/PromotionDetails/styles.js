import {Dimensions, Platform, StatusBar} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {getBottomSpace} from 'react-native-iphone-x-helper';
import {getStatusBarHeight} from 'react-native-status-bar-height';

const HEIGHT = Dimensions.get('window').height;

const WIDTH = Dimensions.get('window').width;

const HEADER_HEIGHT = 50;
const FOOTER_HEIGHT = 60;
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

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 3,
  },
  headerTitle: {
    fontSize: '$mediumText',
    fontWeight: '$fontWeightMedium',
    color: '#BDBDBD',
  },
  promotionFooterContainter: {
    width: '100%',
    height: 60,
    backgroundColor: '#fafafa',
    paddingHorizontal: 10,
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 8,
  },
  promotionContentContainer: {
    height: CONTAINER_HEIGHT - FOOTER_HEIGHT - HEADER_HEIGHT,
    width: '100%',
    backgroundColor: '$white',
  },
  contentWrapper: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  imageContainer: {
    width: '100%',
    height: WIDTH / 2,
    borderRadius: 8,
    position: 'relative',
  },
  mainTitle: {
    fontSize: '$largeText',
    fontWeight: '$fontWeightBold',
    lineHeight: 24,
    marginVertical: 15,
    color: '$btnColorBlack',
  },
  title: {
    fontSize: '$mediumText',
    lineHeight: '$largeLineHeight',
    fontWeight: '$fontWeightBold',
    marginVertical: 15,
    color: '$btnColorBlack',
  },
  textContent: {
    fontSize: '$mediumText',
    lineHeight: '$largeLineHeight',
    marginBottom: 15,
    fontWeight: '$fontWeightMedium',
    color: '$btnColorBlack',
  },
  textContentHTML: {
    fontSize: '$mediumText',
    lineHeight: '$largeLineHeight',
    marginBottom: 12,
  },
  closeText: {
    fontSize: '$mediumText',
    fontWeight: '$fontWeightMedium',
    lineHeight: 22,
    color: '$white',
  },
  closeButton: {
    paddingVertical: 12,
    paddingHorizontal: 46,
    borderRadius: 8,
    backgroundColor: '$bgLogin',
  },
  contentImg: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  badgeContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(255, 87, 40, 0.5)',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
});

export default styles;
