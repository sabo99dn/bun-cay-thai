import EStyleSheet from 'react-native-extended-stylesheet';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export default EStyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '$white',
  },
  leftComponent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightComponent: {
    paddingHorizontal: 15,
  },
  backStyle: {
    paddingLeft: 5,
  },
  titleStyle: {
    fontWeight: '$fontWeightMedium',
    fontSize: '$largeText',
  },
  emptyRightStyle: {
    width: 32,
  },
  wrapHeader: {
    backgroundColor: '$white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 10,
    paddingTop: getStatusBarHeight(),
  },
  flex1: {
    flex: 1,
  },
  textDeliveryTo: {
    fontSize: '$smallLineHeight',
    lineHeight: '$normalLineHeight',
    color: '$btnColorBlack',
  },
  address: {
    fontSize: '$normalLineHeight',
    lineHeight: 19,
    color: '$btnColorBlack',
    paddingHorizontal: 9,
    flex: 1,
  },
  wrapCart: {
    alignSelf: 'flex-end',
    marginBottom: 2,
  },
  wrapBadge: {
    width: 22,
    height: 22,
    position: 'absolute',
    backgroundColor: '$btnRed',
    right: -10,
    top: -10,
    borderRadius: 11,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
  textBadge: {
    fontSize: '$borderBtnRadius',
    color: '$white',
    fontWeight: '$fontWeightBold',
  },
  wrapHeaderCT: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: getStatusBarHeight(),
    backgroundColor: '$white',
    shadowColor: '$shadow',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    elevation: 3,
    zIndex: 2,
  },
  screenName: {
    flex: 1,
    fontSize: '$screenName',
    paddingHorizontal: 20,
    color: '$black',
    fontFamily: '$fontBold',
  },
});
