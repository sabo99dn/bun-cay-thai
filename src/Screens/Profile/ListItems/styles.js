import {Dimensions} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const windowWidth = Dimensions.get('window').width;

export default EStyleSheet.create({
  container: {
    flex: 1,
    width: windowWidth,
  },
  items: {
    backgroundColor: 'transparent',
    paddingVertical: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: '$btnBorderColor',
  },
  icons: {
    width: 25,
    height: 25,
  },
});
