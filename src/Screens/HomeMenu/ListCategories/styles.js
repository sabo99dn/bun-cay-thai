import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default EStyleSheet.create({
  container: {
    marginTop: 1,
    paddingVertical: 5,
    paddingLeft: 10,
    backgroundColor: 'white',
  },
  category: {
    borderColor: '#BDBDBD',
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 20,
    width: windowWidth / 3,
    padding: 7,
  },
});
