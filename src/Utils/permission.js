import { Platform } from 'react-native';
import {
  PERMISSIONS,
  RESULTS,
  check,
  request,
  openSettings,
} from 'react-native-permissions';
import { openAppSetting } from './whatsapp';

const checkPermission = (keyPermission, callback, uri) => {
  if (keyPermission) {
    check(keyPermission)
      .then((result) => {
        if (result === RESULTS.BLOCKED) {
          openSettingsApp();
        }
        if (result === RESULTS.UNAVAILABLE) {
          //   openAppSetting('App-Prefs:LOCATION_SERVICES')
          uri ? openAppSetting(uri) : openSettingsApp();
        }
        if (result === RESULTS.DENIED) {
          request(keyPermission).then((response) => {
            if (response === RESULTS.GRANTED) {
              callback(response);
            }
          });
        }
        if (result === RESULTS.GRANTED) {
          callback(RESULTS.GRANTED);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
};
export const openSettingsApp = () => {
  openSettings().catch(() => console.warn('cannot open settings'));
};

export const checkPermissionLocation = (callback) => {
  let keyPermission = null;
  if (Platform.OS === 'ios') {
    keyPermission = PERMISSIONS.IOS.LOCATION_WHEN_IN_USE;
  } else {
    keyPermission = PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;
  }
  checkPermission(keyPermission, callback, 'App-Prefs:LOCATION_SERVICES');
};
