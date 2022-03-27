import EStyleSheet from 'react-native-extended-stylesheet';
import {Dimensions} from 'react-native';
import {getBottomSpace} from 'react-native-iphone-x-helper';
const WIDTH = Dimensions.get('window').width;

export default EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '$white',
  },
  buttonContainer: {
    height: 65,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '$white',
    paddingHorizontal: 32,
    borderColor: '$btnBorderColor',
    paddingBottom: getBottomSpace() > 0 ? 0 : 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.41,
    elevation: 8,
  },
  addAddress: {
    flex: 1,
    marginRight: 10,
    backgroundColor: '$btnRed',
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: '$mediumText',
    fontWeight: '$fontWeightNormal',
  },
  formContainer: {
    flex: 1,
  },
  inputWrap: {
    justifyContent: 'flex-start',
    paddingHorizontal: 32,
    paddingTop: 20,
  },
  labelStyle: {
    fontSize: '$normalText',
    fontWeight: 'normal',
    color: 'black',
  },
  inputStyle: {
    color: '$bgLogin',
  },
  leftStyle: {
    fontWeight: '$fontWeightBold',
  },
  textDeliveryAddress: {
    marginTop: 26,
    fontSize: '$largeText',
    color: '$txtFocusInput',
    fontWeight: '$fontWeightBold',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderColor: '$btnBorderColor',
    paddingBottom: 10,
  },
  textDeliveryAddressTyped: {
    marginTop: 26,
    fontSize: '$largeText',
    color: '$txtFocusInput',
    fontWeight: '$fontWeightBold',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderColor: '$txtFocusInput',
    paddingBottom: 10,
  },
  footer: {
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
  },
  lineOr: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
  },
  txtOr: {
    fontSize: '$largeText',
    paddingHorizontal: 20,
  },
  security: {
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingLeft: 0,
  },
  txt: {
    color: '$black',
    fontWeight: '$fontWeightNormal',
    fontSize: '$normalText',
    fontFamily: '$font',
    alignSelf: 'flex-start',
    textAlign: 'left',
  },
  txtClick: {
    color: '$textClick',
    fontFamily: '$font',
    fontWeight: '$fontWeightBold',
  },
  checkBox: {
    width: 20,
    paddingTop: 2,
    paddingLeft: 0,
    margin: 0,
    marginLeft: -5,
  },
  errorContainer: {
    marginVertical: 5,
  },
  errorText: {
    color: '$textColorError',
  },
  confirm: {
    flex: 1,
    backgroundColor: '$bgLogin',
    borderWidth: 0,
  },
  buttonLabel: {
    color: '$white',
    fontSize: '$mediumText',
    fontWeight: '$fontWeightBold',
  },

  addressPickerContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: 500,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: 'white',
  },
  headerModal: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 0.5,
    borderColor: '#F4F5F5',
  },
  titleModal: {
    textAlign: 'center',
    fontSize: '$largeText',
    fontWeight: '$fontWeightBold',
    color: '$btnColorBlack',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  contentColors: {
    bottom: 0,
    width: WIDTH,
    height: '70%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: 'white',
  },
  modalDataContainer: {
    flex: 1,
  },
  itemName: {
    fontSize: '$mediumText',
    color: '$btnColorBlack',
  },
  listInner: {
    paddingHorizontal: 16,
  },
  listItem: {
    width: '100%',
    paddingVertical: 16,
    borderBottomWidth: 0.5,
    borderColor: '$btnBorderColor',
  },
  textInputWrapper: {
    paddingBottom: 7,
    borderBottomWidth: 0.5,
    borderColor: '$btnBorderColor',
  },
  textInput: {
    color: '$btnBorderColor',
  },
  formFieldPicker: {
    marginBottom: 30,
  },
  labelPicker: {
    paddingVertical: 5,
    marginBottom: 20,
    color: '$btnColorBlack',
  },
  activeLabel: {color: '$bgLogin'},
  fieldActive: {
    borderColor: '$bgLogin',
  },
  textInputActive: {
    color: '$bgLogin',
  },
  notFoundText: {
    color: '$btnBorderColor',
    fontSize: '$mediumText',
    textAlign: 'center',
  },
  listItemActive: {
    borderColor: '$bgLogin',
  },
  itemNameActive: {
    fontWeight: '$fontWeightBold',
    color: '$bgLogin',
  },
  addressNameLabelStyle: {fontWeight: '$fontWeightBold'},
});
