import EStyleSheet from 'react-native-extended-stylesheet';
import {Dimensions, StyleSheet} from 'react-native';
const deviceWidth = Dimensions.get('window').width;
const widthImg = deviceWidth / 2 - 10;

export default EStyleSheet.create({
  container: {
    width: widthImg,
    margin: 5,
    paddingBottom: 7,
    borderRadius: 10,
    backgroundColor: '$white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 1,
  },
  banner: {
    width: widthImg,
    height: widthImg / 2,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  name: {
    color: 'black',
    fontSize: '$normalText',
    paddingHorizontal: 5,
    paddingTop: 5,
  },
  wrapDate: {
    padding: 5,
    flexDirection: 'row',
  },
  date: {
    color: '$btnBorderColor',
    fontFamily: '$fontItalic',
    marginLeft: 5,
    fontSize: '$smallText',
    lineHeight: '$normalLineHeight',
  },
});
