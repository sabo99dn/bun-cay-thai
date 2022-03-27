import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  wrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 19,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 0.8,
    borderColor: '$black',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  childCheckBox: {
    width: 14,
    height: 14,
    backgroundColor: '$txtFocusInput',
    borderRadius: 7,
  },
  name: {
    flex: 1,
    paddingHorizontal: 14,
    fontSize: '$mediumText',
    lineHeight: 21,
    color: '$btnColorBlack',
  },
  price: {
    fontSize: '$mediumText',
    lineHeight: 21,
    color: '$btnColorBlack',
  },
});
