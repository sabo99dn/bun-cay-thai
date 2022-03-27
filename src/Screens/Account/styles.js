import {StyleSheet, Dimensions} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
const WIDTH = Dimensions.get('window').width;
const AVATAR_WIDTH = WIDTH / 2.5;
export default EStyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  contentWrapper: {
    flex: 1,
    flexDirection: 'column',
    padding: 10,
    backgroundColor: '$whiteSmoke',
  },
  bannerContainer: {
    width: '100%',
    height: WIDTH / 1.8,
    borderRadius: 8,
    marginBottom: AVATAR_WIDTH / 2,
  },
  avatar: {
    width: AVATAR_WIDTH,
    height: AVATAR_WIDTH,
    borderRadius: AVATAR_WIDTH / 2,
    position: 'absolute',
    bottom: -AVATAR_WIDTH / 2,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    backgroundColor: '$white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  backgroundImg: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  avataImg: {
    width: '100%',
    height: '100%',
    backgroundColor: '$btnColorBlack',
    borderRadius: AVATAR_WIDTH / 2 - 5,
  },
  iconWrapper: {
    width: 32,
    height: 32,
    backgroundColor: '#fff',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    position: 'absolute',
    right: 0,
    bottom: 15,
  },
  name: {
    fontSize: '$largeText',
    fontWeight: '$fontWeightBold',
    textAlign: 'center',
    marginTop: 20,
    color: '$btnColorBlack',
  },
  contactInfo: {
    flexDirection: 'row',
    marginTop: 20,
    paddingLeft: 10,
  },
  contactInfoRow: {
    flexDirection: 'row',
    paddingLeft: 18,
  },
  contactInfoColumn: {
    flexDirection: 'column',
    paddingLeft: 18,
  },
  textInfo: {
    fontWeight: '$fontWeightNormal',
    fontFamily: '$font',
    fontSize: '$mediumText',
    maxWidth: '100% - 80px',
    lineHeight: 22,
    color: '$btnColorBlack',
  },
  buttonWrapper: {
    flexDirection: 'row',
    marginTop: 20,
  },
  contact: {
    flex: 6,
    marginRight: 10,
    backgroundColor: '$bgLogin',
    borderWidth: 0,
  },
  changePassword: {
    flex: 4,
    backgroundColor: '$btnRed',
    borderWidth: 0,
  },
  buttonLabel: {
    color: '$white',
    fontSize: '$mediumText',
    fontWeight: '$fontWeightBold',
  },
  listInner: {
    paddingBottom: 30,
  },
  loaderContainer: {
    flex: 1,
    backgroundColor: '$white',
    paddingTop: 20,
  },
  loaderItem: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    overflow: 'hidden',
  },
  notFoundText: {
    alignSelf: 'center',
    marginTop: 20,
    fontSize: '$normalText',
    fontWeight: '$fontWeightMedium',
    color: '#999',
  },
  viewLoadmore: {
    paddingVertical: 20,
  },
  iconContainer: {
    width: 25,
    alignItems: 'center',
  },
});
