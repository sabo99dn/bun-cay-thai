import {StyleSheet, Dimensions} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {getBottomSpace} from 'react-native-iphone-x-helper';
const WIDTH = Dimensions.get('window').width;
const AVATAR_WIDTH = WIDTH / 2.5;
export default EStyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 30,

    backgroundColor: '$white',
    position: 'relative',
  },
  scrollViewInner: {
    flex: 1,
    paddingHorizontal: 15,
  },
  chooseImageContainer: {
    marginTop: 2,
    shadowColor: '#000',
    width: '99%',
    alignSelf: 'center',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    borderRadius: 8,
    flexDirection: 'row',
    height: 50,
    marginBottom: 18,
    paddingVertical: 11,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  chooseImage: {
    flexDirection: 'row',
    height: 50,
    marginBottom: 18,
    paddingVertical: 11,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  imageContainer: {
    width: '99%',
    height: WIDTH / 1.8,
    borderRadius: 8,
    marginBottom: 18,
  },
  messageContainer: {
    width: '99%',
    minHeight: WIDTH / 2.8,
    shadowColor: '#000',
    alignSelf: 'center',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    borderRadius: 8,
    zIndex: 99,
    paddingHorizontal: 16,
    paddingVertical: 13,
    backgroundColor: '#fff',
  },
  chooseImageText: {
    marginLeft: 14,
    fontSize: '$normalText',
    fontWeight: '$fontWeightMedium',
    color: '$btnColorBlack',
  },
  textArea: {
    width: '100%',
    minHeight: WIDTH / 2.8,
    textAlignVertical: 'top',
    color: '$btnColorBlack',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  footer: {
    bottom: 0,
    position: 'absolute',
    alignSelf: 'center',
    alignItems: 'center',
    width: '100%',
    paddingTop: 10,
    paddingHorizontal: 32,
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
});
