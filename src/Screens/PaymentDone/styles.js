import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: '$white',
  },
  wrapContent: {
    flex: 1,
    backgroundColor: '$bgPaymentDone',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '$textClick',
    fontSize: '$maxText',
    lineHeight: 28,
  },
  btn: {
    width: 239,
    height: 44,
    borderRadius: 8,
    backgroundColor: '$txtFocusInput',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 34,
  },
  des: {
    color: '$white',
    fontSize: '$mediumText',
    lineHeight: 21,
    marginLeft: 19,
  },
  titleStyle: {
    paddingLeft: 0,
  },
  shadow: {
    shadowColor: '$shadow',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2,
    elevation: 3,
  },
});
