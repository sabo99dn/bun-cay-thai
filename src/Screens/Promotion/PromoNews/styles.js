import {StyleSheet, Dimensions} from 'react-native';
const windowHeight = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;
import EStyleSheet from 'react-native-extended-stylesheet';
import {theme} from '../../../theme';
const styles = EStyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 5,
    borderRadius: 13,
    minHeight: WIDTH / 3.45,
    marginVertical: 7,
    backgroundColor: theme.colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 2,
  },
  imageContainer: {
    flex: 55,
    height: '100%',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    position: 'relative',
  },
  img: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  wrapContent: {
    flex: 45,
    flexDirection: 'column',
    paddingHorizontal: 7,
    paddingVertical: 9,
  },
  title: {
    color: '#000',
    fontSize: '$mediumText',
    fontWeight: '$fontWeightMedium',
    flex: 2,
  },
  date: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '$fontWeightMedium',
    paddingVertical: 5,
    lineHeight: '$mediumLineHeight',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
  },
  time: {
    fontSize: '$mediumText',
    fontWeight: 'bold',
    color: 'white',
  },
  wrapHead: {
    padding: 10,
  },
  wrapFoot: {
    backgroundColor: theme.colors.green,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 16,
  },
  dateWrapper: {
    width: '100%',
    backgroundColor: '$bgLogin',
    borderRadius: 8,
    paddingHorizontal: 9,
    marginTop: 8,
  },
  badgeContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(255, 87, 40, 0.5)',
    borderBottomLeftRadius: 8,
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
  },
  loaderItem: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    overflow: 'hidden',
  },
});
export default styles;
