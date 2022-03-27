import EStyleSheet from 'react-native-extended-stylesheet';
import {Dimensions} from 'react-native';
import {getBottomSpace} from 'react-native-iphone-x-helper';
import {Platform} from 'react-native';
const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;
export default EStyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '$white',
    position: 'relative',
  },
  content: {
    flex: 1,
    marginTop: 35,
  },
  inputWrap: {
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
  },
  scrollViewInner: {
    flex: 1,
    paddingLeft: '$screenPaddingLeft',
    paddingRight: '$screenPaddingRight',
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
    marginTop: 20,
    fontSize: '$largeText',
    color: '$txtFocusInput',
    fontWeight: '$fontWeightBold',
    marginBottom: 50,
  },
  footer: {
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '$white',
    paddingVertical: 10,
    paddingHorizontal: 32,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.41,
    elevation: 8,
    paddingBottom:
      Platform.OS === 'android'
        ? 10
        : getBottomSpace() > 0
        ? getBottomSpace()
        : 10,
  },
  lineOr: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
  },
  txtOr: {
    fontSize: '$largeText',
    paddingHorizontal: 20,
    color: '$btnColorBlack',
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
});
