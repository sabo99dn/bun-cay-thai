import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  titleStyle: {
    fontWeight: '$fontWeight600',
    fontSize: '$largeText',
    fontFamily: '$fontBold',
  },
  headerTitleContainerStyle: {
    left: 45,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerLeftTitle: {
    fontWeight: '$fontWeight600',
    fontSize: '$largeText',
    fontFamily: '$fontBold',
  },
  rightStyle: {
    paddingRight: 20,
  },
  bottomTabContainer: {
    height: 70,
    paddingTop: 10,
  },
  tabStyle: {
    height: 50,
  },
});
