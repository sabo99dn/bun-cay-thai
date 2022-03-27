import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  formGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: '$normalText',
    lineHeight: '$normalLineHeight',
    color: '$black',
    fontFamily: '$font',
    fontWeight: '$fontWeightNormal',
  },
  input: {
    paddingTop: 20,
    borderBottomWidth: '$borderInputWidth',
    borderColor: '$btnBorderColor',
    backgroundColor: '$txtBg',
    lineHeight: '$mediumLineHeight',
    fontSize: '$mediumText',
    fontWeight: '$fontWeightNormal',
    paddingBottom: 5,
  },
  labelFocusColor: {
    color: '$txtFocusInput',
  },
  inputFocusBordersColor: {
    color: '$txtFocusInput',
    borderColor: '$txtFocusInput',
  },
  errorContainer: {
    marginVertical: 5,
  },
  errorText: {
    color: '$textColorError',
  },
});
