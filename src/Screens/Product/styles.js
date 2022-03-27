import EStyleSheet from 'react-native-extended-stylesheet';
import {getBottomSpace} from 'react-native-iphone-x-helper';

export default EStyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '$white',
  },
  title: {
    fontSize: '$mediumLineHeight',
    fontWeight: '$fontWeightBold',
    marginBottom: 14,
    color: '$btnColorBlack',
  },
  wrapList: {
    flex: 1,
    backgroundColor: '$whiteSmoke',
    paddingHorizontal: 7,
    paddingTop: 15,
  },
  btnTitle: {
    width: 146,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginRight: 10,
    backgroundColor: '$white',
    color: '$gray',
    shadowColor: '$shadow',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1.5,
    elevation: 3,
    marginTop: 5,
  },
  btnTitleActive: {
    backgroundColor: '$txtFocusInput',
    color: '$gray',
  },
  wrapScrollTitle: {
    paddingVertical: 6,
    backgroundColor: '$white',
    borderBottomWidth: 1.2,
    borderColor: '$borderGray',
    paddingHorizontal: 7,
  },
  textBtnTitle: {
    fontSize: 16,
    lineHeight: 19,
    color: '$btnColorBlack',
  },
  textBtnTitleActive: {
    color: '$white',
  },
  wrapViewBottom: {
    borderBottomWidth: 0.8,
    backgroundColor: '$white',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: getBottomSpace() / 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 8,
  },
  btnBottom: {
    marginVertical: 8,
    marginHorizontal: 20,
    backgroundColor: '$btnRed',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  wrapChildBottom: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textLeft: {
    fontSize: '$smallText',
    lineHeight: 19,
    color: '$white',
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  textRight: {
    fontSize: '$smallText',
    lineHeight: 19,
    fontWeight: 'bold',
    color: '$btnColorBlack',
  },
  contentContainerStyle: {
    paddingBottom: 80,
  },
  contentContainerStyle1: {
    paddingBottom: 10,
  },
  textBtnTitleInActive: {
    color: '$gray',
  },
  headerStyle: {
    elevation: 0,
    shadowColor: '$transparent',
  },
});
