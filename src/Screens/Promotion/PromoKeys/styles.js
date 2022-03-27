import {StyleSheet, Dimensions} from 'react-native';

import {theme} from '../../../theme';
import EStyleSheet from 'react-native-extended-stylesheet';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default EStyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 13,
    marginVertical: 8,
    backgroundColor: theme.colors.white,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 2,
    borderTopLeftRadius: 50,
  },
  listWrapper: {flex: 1},
  wrapTitle: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  title: {
    color: theme.colors.darkred,
    fontSize: '$largeText',
    fontWeight: 'bold',
    paddingBottom: 15,
  },
  decription: {
    paddingHorizontal: 20,
    paddingTop: 5,
    paddingBottom: 10,
  },
  txtdecrip: {
    fontSize: 16,
    paddingVertical: 2,
    color: '$btnColorBlack',
  },
  wrapBox: {
    position: 'absolute',
    left: -6,
    top: -6,
    width: 75,
    height: 75,
    borderRadius: 37.5,
    backgroundColor: '$whiteSmoke',
    justifyContent: 'center',
    alignItems: 'center',
  },
  saleKeys: {
    backgroundColor: theme.colors.darkred,
    width: 64,
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 64,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 5,
  },
  discount: {
    fontSize: '$normalText16',
    fontWeight: 'bold',
    color: '#fff',
  },
  notFoundText: {
    alignSelf: 'center',
    marginTop: 20,
    fontSize: '$normalText',
    fontWeight: '$fontWeightMedium',
    color: '#999',
  },
  viewLoadmore: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  textGreen: {
    fontWeight: '$fontWeightNormal',
    fontSize: '$normalText16',
    lineHeight: '$mediumLineHeight',
    color: '$bgLogin',
    paddingLeft: 5,
  },
  wrapText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  loaderContainer: {
    flex: 1,
    backgroundColor: '$white',
  },
  loaderItem: {
    paddingHorizontal: 16,
    overflow: 'hidden',
  },
  buttonContainer: {
    height: 65,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '$white',
    justifyContent: 'center',
  },

  confirm: {
    width: '70%',
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
});
