import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
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
  dropDownContainerStyle: {
    color: '$txtFocusInput',
    borderColor: '$btnBorderColor',
    padding: 10,
  },
  textStyle: {
    padding: 0,
    margin: -10,
    width: '100%',
    lineHeight: '$mediumLineHeight',
    fontSize: '$mediumText',
    fontWeight: '$fontWeightNormal',
  },
  searchTextInputStyle: {
    borderWidth: 0,
    borderColor: '$btnBorderColor',
    backgroundColor: '$txtBg',
    lineHeight: '$mediumLineHeight',
    fontSize: '$mediumText',
    fontWeight: '$fontWeightNormal',
  },
  dropDownWrapperContainerStyle: {
    padding: 0,
    margin: 0,
    borderBottomWidth: '$borderInputWidth',
    borderColor: '$btnBorderColor',
  },
  dropDownWrapperContainerStyleActive: {
    padding: 0,
    margin: 0,
    borderBottomWidth: '$borderInputWidth',
    borderColor: '$txtFocusInput',
  },
  searchContainerStyle: {
    padding: 0,
    margin: 0,
    borderBottomWidth: '$borderInputWidth',
    borderColor: '$btnBorderColor',
    borderWidth: 0,
  },
  dropDownPickerStyle: {
    borderWidth: 0,
    padding: 0,
    margin: 0,
  },
  listItemLabelStyle: {
    color: '$black',
  },
  selectedItemLabelStyle: {
    color: '$txtFocusInput',
  },
  tickIconStyle: {
    color: '$txtFocusInput',
  },
  placeholderStyle: {
    color: '$btnBorderColor',
  },
  dropDownActive: {
    color: '$txtFocusInput',
  },
});
