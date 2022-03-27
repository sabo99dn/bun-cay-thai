import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  containerAlert: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalAlert: {
    backgroundColor: 'white',
    borderRadius: '3rem',
    width: '80%',
    padding: '15rem',

    '@media ios': {
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 1},
      shadowOpacity: 0.3,
      shadowRadius: 2,
    },
    '@media android': {
      elevation: 5,
    },
  },
  textTitle: {
    fontFamily: '$font',
    fontSize: '$largeText',
    marginBottom: '10rem',
    color: '$black',
    textAlign: 'center',
  },
  message: {
    fontFamily: '$font',
    fontSize: '$normalText',
    color: '$gray',
    marginBottom: '10rem',
    lineHeight: '18rem',
    textAlign: 'center',
  },
  titleStyle: {
    fontFamily: '$font',
    fontSize: '$largeText',
    color: '$white',
    textAlign: 'center',
  },
});

export default styles;
