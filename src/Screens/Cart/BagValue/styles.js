import {Dimensions, StyleSheet} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  containerStyle: {
    position: 'absolute',
    zIndex: 1,
    alignSelf: 'flex-end',
    right: 3,
    top: 1,
  },
  badgeStyle: {
    width: 20,
    height: 20,
    borderRadius: 20,
  },
});
