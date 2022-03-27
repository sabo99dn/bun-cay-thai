import {Dimensions, StyleSheet} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    backgroundColor: 'white',

    marginTop: 2,
  },
  wrapper: {
    paddingLeft: 15,
    paddingTop: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  noteText: {
    fontWeight: 'normal',
    color: '#BDBDBD',
    fontStyle: 'italic',
  },
  address: {
    fontSize: 16,
    paddingVertical: 10,
  },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtDropdown: {
    color: '$bgLogin',
    fontWeight: 'bold',
    fontSize: 16,
    paddingLeft: 10,
  },
  range: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  numberKm: {
    color: '#FF5728',
  },
});
