import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  wrap: {
    position: 'absolute',
    backgroundColor: '$btnBorderColor',
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 3,
  },
  background: {
    backgroundColor: '$white',
    borderRadius: 5,
    paddingHorizontal: 32,
    paddingVertical: 24,
  },
});
