import {Dimensions, StyleSheet} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default EStyleSheet.create({
  container: {
    flex: 1,
    width: windowWidth,
    minHeight: windowHeight,
  },
  category: {
    paddingVertical: 8,
    fontSize: '$largeText',
    fontWeight: 'bold',
    paddingLeft: 5,
  },
  containerStyle: {
    position: 'absolute',
    zIndex: 1,
    alignSelf: 'flex-end',
    right: 3,
    top: 1,
  },
  badgeStyle: {
    width: 20,
    height: 20,
    borderRadius: 20,
  },
  refreshing: {zIndex: 999},
  notifi: {
    flex: 1,
    position: 'absolute',
    backgroundColor: 'white',
    width: '100%',
    height: 50,
    justifyContent: 'center',
    marginTop: (windowHeight * 6) / 7,
    elevation: 5,
  },
  cotentNotifi: {
    flexDirection: 'row',
    backgroundColor: '$btnRed',
    marginHorizontal: 30,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    backgroundColor: 'red',
  },
});
