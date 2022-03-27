import { useEffect, useRef } from 'react';
import { Platform } from 'react-native';
import { StatusBar } from 'react-native';

export const useStatusBarHidden = (hidden) =>
  StatusBar.setHidden(hidden, 'fade');

export const useStatusBarPreview = (color = 'transparent') =>
  Platform.OS === 'android' && StatusBar.setBackgroundColor(color);

export const usePrevious = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
};
