import { Linking } from 'react-native';

export const openAppSetting = async (url) => {
  const canOpenSetting = await Linking.canOpenURL(url);
  if (canOpenSetting) {
    Linking.openURL(url);
  } else {
    Linking.openURL('app-settings:');
  }
};
