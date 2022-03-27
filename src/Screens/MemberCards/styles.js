import EStyleSheet from 'react-native-extended-stylesheet';
import {Dimensions} from 'react-native';
const windowHeight = Dimensions.get('window').height;

export default EStyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    height: windowHeight,
  },
  notification: {
    textAlign: 'center',
    fontSize: 16,
    width: '90%',
    color: '$black',
  },
  wrapContent: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  img: {
    alignSelf: 'center',
    marginBottom: 30,
  },
  html: {
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
