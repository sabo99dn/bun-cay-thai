import EStyleSheet from 'react-native-extended-stylesheet';
import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;

export default EStyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 10,
    paddingLeft: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 2,
  },
});
