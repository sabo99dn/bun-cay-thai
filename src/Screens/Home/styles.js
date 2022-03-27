import EStyleSheet from 'react-native-extended-stylesheet';
import {Dimensions} from 'react-native';

export default EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '$white',
  },
  carousel: {
    alignItems: 'center',
  },
  body: {
    flex: 1,
    backgroundColor: '$bgGrey',
  },
  wrapper: {
    backgroundColor: '$white',
    paddingVertical: 10,
    marginBottom: 10,
  },
  wrapperCarousel: {
    paddingVertical: 10,
  },
  headerBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  title: {
    color: '$black',
    fontSize: '$mediumText',
    fontWeight: '$fontWeightBold',
    fontFamily: '$fontBold',
  },
  seemore: {
    color: '$txtFocusInput',
    fontSize: '$normalText16',
    paddingRight: 10,
    fontFamily: '$font',
  },
});
