import EStyleSheet from 'react-native-extended-stylesheet';
import {Dimensions, Platform} from 'react-native';
import {getBottomSpace} from 'react-native-iphone-x-helper';
const WIDTH = Dimensions.get('window').width;

export default EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '$whiteSmoke',
  },

  listWrapper: {
    flex: 1,
  },
  listInner: {
    paddingHorizontal: 10,
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '$white',
    paddingBottom:
      Platform.OS === 'android'
        ? 10
        : getBottomSpace() > 0
        ? getBottomSpace()
        : 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 8,
  },
  addAddress: {
    flex: 1,
    marginRight: 10,
    backgroundColor: '$btnRed',
    borderWidth: 0,
  },
  confirm: {
    flex: 1,
    backgroundColor: '$bgLogin',
    borderWidth: 0,
  },
  confirmDisable: {
    flex: 1,
    backgroundColor: '$bgGrey',
    borderWidth: 0,
  },
  buttonLabel: {
    color: '$white',
    fontSize: '$mediumText',
    fontWeight: '$fontWeightBold',
  },
  itemContainer: {
    width: '100%',
    minHeight: WIDTH / 2.6 - 20,
    borderRadius: 8,
    marginTop: 20,
    backgroundColor: '$white',
    flexDirection: 'column',
    position: 'relative',
    padding: 13,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 2,
  },
  itemContainerActive: {
    width: '100%',
    minHeight: WIDTH / 2.6 - 20,
    borderRadius: 8,
    marginTop: 20,
    backgroundColor: '$activeCardBackground',
    flexDirection: 'column',
    position: 'relative',
    padding: 13,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 2,
  },
  addressName: {
    fontWeight: '$fontWeightBold',
    fontSize: '$largeText',
    color: '$btnColorBlack',
    lineHeight: '$largeLineHeight',
  },
  userName: {
    fontWeight: '$fontWeightBold',
    fontSize: '$mediumText',
    color: '$bgLogin',
    lineHeight: '$maxLineHeight',
  },

  textBlack: {
    fontWeight: '$fontWeightNormal',
    fontSize: '$mediumText',
    color: '$btnColorBlack',
    maxWidth: '80%',
    lineHeight: '$largeText',
  },
  textGreen: {
    fontWeight: '$fontWeightNormal',
    fontSize: '$mediumText',
    color: '$bgLogin',
    maxWidth: '80%',
    lineHeight: '$largeText',
  },
  buttonText: {
    fontWeight: '$fontWeightNormal',
    fontSize: '$normalText16',
    color: '$white',
  },
  wrapTextRow: {
    flexDirection: 'row',
    marginTop: 5,
    flex: 1,
  },
  wrapButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonStyle: {
    width: 65,
    height: 25,
    backgroundColor: '$btnRed',
    borderWidth: 0,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '$replyBackgroundRed',
  },
  checked: {
    position: 'absolute',
    top: -1,
    right: -1,
  },
  loaderContainer: {
    flex: 1,
    backgroundColor: '$white',
  },
  loaderItem: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    overflow: 'hidden',
  },
  notFoundText: {
    alignSelf: 'center',
    marginTop: 20,
    fontSize: '$normalText',
    fontWeight: '$fontWeightMedium',
    color: '#999',
  },
});
