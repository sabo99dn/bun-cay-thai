import {StyleSheet, Dimensions} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default EStyleSheet.create({
  wrapper: {
    flex: 1,
    width: windowWidth,
  },
  container: {
    flexDirection: 'row',
    margin: 5,
    backgroundColor: 'white',
    borderRadius: 13,
    borderWidth: 1,
    borderColor: '#BDBDBD',
  },
  img: {
    width: 125,
    height: 125,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
  },
  content: {
    paddingLeft: 10,
    width: '65%',
  },
  name: {
    color: 'black',
    fontSize: '$mediumText',
    paddingTop: 5,
    fontWeight: 'bold',
  },
  descrip: {
    fontSize: 15,
    color: '#BDBDBD',
    paddingBottom: 10,
  },
  priceWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  price: {
    color: '$bgLogin',
    fontSize: '$largeText',
    fontWeight: 'bold',
  },
  priceOr: {
    color: '$bgLogin',
    fontSize: 17,
    fontWeight: 'bold',
    paddingHorizontal: 5,
  },
  pricesale: {
    fontSize: '$normalText',
    fontWeight: 'bold',
  },
  footerList: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
