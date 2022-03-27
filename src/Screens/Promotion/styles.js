import {StyleSheet, Dimensions} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default EStyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    height: windowHeight,
  },
  wrapPromo: {
    flex: 1,
    paddingTop: 10,
  },
  tabbarText: {
    fontSize: '$mediumText',
    fontWeight: '$fontWeightMedium',
    color: '$btnColorBlack',
  },
  tabbarTextActive: {
    fontSize: '$mediumText',
    fontWeight: '$fontWeightMedium',
    color: '$bgLogin',
  },
  indicatorStyle: {
    backgroundColor: '#80CD28',
    height: 5,
  },
  tabbarContainer: {
    backgroundColor: '$white',
  },
});
