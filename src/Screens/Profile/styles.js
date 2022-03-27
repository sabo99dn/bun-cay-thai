import {Dimensions} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
const width = Dimensions.get('window').width;
export default EStyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: 0,
  },
  inputWrap: {
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
  },
  title: {
    fontSize: '$largeText',
    color: '$bgLogin',
    paddingLeft: 10,
    paddingVertical: 10,
    fontWeight: 'bold',
  },
  labelStyle: {
    fontSize: '$normalText',
    fontWeight: 'normal',
    color: 'black',
  },
  inputStyle: {
    color: '$bgLogin',
  },
  listComponent: {width: width, alignItems: 'center'},
  imagePolicy: {width: 164, height: 57, marginTop: 20},
  imageLogo: {width: 60, height: 60, marginTop: 20},
  wrapperImage: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 30,
    marginTop: 10,
  },
  ListFooterComponentStyle: {flex: 1, justifyContent: 'flex-end'},
  contentContainerStyle: {flexGrow: 1},
});
