import {Dimensions, StyleSheet} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default EStyleSheet.create({
  container: {
    flex: 1,
    width: windowWidth,
    minHeight: windowHeight,
  },
  order: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: windowWidth,
    padding: 5,
    marginTop: 2,
    backgroundColor: 'white',
  },
  btnOrder: {
    backgroundColor: '#FF5728',
    width: '55%',
    borderRadius: 10,
  },
  btnMore: {
    backgroundColor: '$bgLogin',
    width: '40%',
    borderRadius: 10,
  },
  txtButton: {
    fontSize: '$mediumText',
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    paddingVertical: 10,
  },
});
