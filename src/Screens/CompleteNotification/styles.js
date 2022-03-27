import {Dimensions} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default EStyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'white',
    height: windowHeight,
  },
  container: {
    flex: 1,
    width: windowWidth,
    paddingHorizontal: 30,
    alignSelf: 'center',
  },
  emailAddress: {
    color: '$bgLogin',
    fontSize: 16,
  },
  txtHeader: {
    fontSize: 16,
    color: 'black',
  },
  footer: {
    alignSelf: 'center',
    paddingBottom: 30,
    width: windowWidth,
    paddingHorizontal: 30,
  },
  btnLogin: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    borderColor: '#BDBDBD',
    borderWidth: 1.5,
    borderRadius: 10,
    marginBottom: 30,
    width: windowWidth - 55,
  },
  txtLogin: {
    paddingVertical: 10,
    fontSize: '$mediumText',
  },
  notSend: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  notifi: {
    color: 'black',
    fontSize: 16,
    width: windowWidth - 40,
    paddingBottom: 10,
  },
  contact: {
    fontSize: '$mediumText',
    color: '$bgLogin',
  },
});
