import {StyleSheet, Dimensions} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
const windowWidth = Dimensions.get('window').width;

export default EStyleSheet.create({
  wrapper: {
    flex: 1,
    width: windowWidth,
    marginTop: 2,
  },
  container: {
    flexDirection: 'column',
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  amount: {
    backgroundColor: '$bgLogin',
    borderRadius: 8,
  },
  txtAmount: {
    color: 'white',
    fontSize: '$mediumText',
    paddingVertical: 2,
    paddingHorizontal: 13,
  },
  name: {
    fontSize: '$mediumText',
    paddingLeft: 5,
    color: '$btnColorBlack',
  },
  price: {
    fontSize: '$mediumText',
    paddingRight: 10,
    color: '$btnColorBlack',
  },
  wrapTop: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 5,
  },
  topRight: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  wrapMiddle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingLeft: 40,
    marginTop: 15,
  },
  request: {
    fontSize: '$mediumText',
    fontStyle: 'italic',
    color: '#BDBDBD',
  },
  quantumGroup: {
    flexDirection: 'row',
  },
  stepAmount: {
    borderColor: '#C4C4C4',
    borderWidth: 1,
    paddingHorizontal: 8,
    height: 28,
    marginHorizontal: -1,
  },
  txtStepAmount: {
    color: 'black',
    fontSize: 17,
  },
  extras: {
    color: '#FF5728',
    fontSize: '$mediumText',
    paddingHorizontal: 52,
    paddingTop: 3,
  },
});
