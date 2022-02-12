import {DefaultTheme} from '@react-navigation/native';
import {Colors} from './colors';
import {Fonts} from './fonts';

export const useTheme = () => {
  return {
    Colors,
    Fonts,
    NavigationTheme: {
      ...DefaultTheme.colors,
      ...Colors,
    },
  };
};

export default {
  Colors,
  Fonts,
  NavigationTheme: {
    ...DefaultTheme.colors,
    ...Colors,
  },
};
