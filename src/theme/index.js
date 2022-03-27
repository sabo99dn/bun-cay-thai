import {Platform} from 'react-native';

export const theme = {
  colors: {
    white: '#ffffff',
    green: '#80CD28',
    orange: '#FF5728',
    black: '#000000',
    gray: '#BDBDBD',
    darkred: '#D61212',
  },

  fonts: {
    fontWeight: {
      heavy: '700',
      bold: 'bold',
      semibold: Platform.OS === 'android' ? 'bold' : '600',
      regular: 'normal',
      light: '300',
    },
    fontFamily: {
      default: Platform.OS === 'ios' ? 'System' : 'Roboto',
    },
  },
};
