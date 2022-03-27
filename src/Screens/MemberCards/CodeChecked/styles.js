import {Dimensions} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
const windowWidth = Dimensions.get('window').width;
export default EStyleSheet.create({
  container: {
    width: windowWidth - 20,
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 10,
    borderRadius: 15,
  },
  fullName: {
    fontSize: '$largeText',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '$black',
  },
  numberPhone: {
    textAlign: 'center',
    fontSize: '$mediumText',
    letterSpacing: 3,
    color: '$gray',
  },
  wrapper: {
    backgroundColor: '$txtFocusInput',
    width: windowWidth - 40,
    marginTop: 10,
    marginBottom: 10,
    justifyContent: 'center',
    borderRadius: 10,
  },
  name: {
    width: windowWidth - 40,
    paddingTop: 10,
    paddingHorizontal: 10,
    fontSize: '$largeText',
  },
  wrapperImgBarcode: {
    backgroundColor: 'white',
    width: windowWidth - 60,
    margin: 10,
    borderRadius: 20,
    padding: 10,
  },
  wrapperImg: {
    backgroundColor: 'white',
    width: windowWidth - 60,
    height: windowWidth - 60,
    margin: 10,
    borderRadius: 20,
    padding: 10,
  },
  img: {
    width: '100%',
    alignSelf: 'center',
  },
  barcode: {
    height: 110,
    resizeMode: 'stretch',
  },
  qrcode: {
    height: '100%',
  },
});
