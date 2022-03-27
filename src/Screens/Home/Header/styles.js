import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
    backgroundColor: '$white',
    elevation: 2,
    borderBottomWidth: 1,
    borderColor: '$btnBorderColor',
  },
  address: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 3,
    color: '$btnColorBlack',
  },
  tittle: {
    paddingLeft: 5,
    paddingRight: 10,
    color: '$btnColorBlack',
  },
});
