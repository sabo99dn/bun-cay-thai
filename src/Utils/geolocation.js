import { Platform } from 'react-native';
import Geolocation from 'react-native-geolocation-service';

let watchId = null;

export function getCurrentPosition(callback) {
  if (Platform.OS === 'ios') {
    Geolocation.setRNConfiguration({
      skipPermissionRequests: true,
      authorizationLevel: 'whenInUse',
    });
  }

  Geolocation.getCurrentPosition(
    (position) => {
      callback(position, null);
    },
    (error) => {
      callback(null, error);
    },

    // NOTE enableHighAccuracy = true : Request feed slow(about 5-10s or more)
    { enableHighAccuracy: false, timeout: 10000 }
  );
}

export function watchPosition(callback) {
  if (!watchId) {
    watchId = Geolocation.watchPosition(
      (geoPosition) => {
        callback(geoPosition, null);
      },
      (error) => {
        callback(null, error);
      },
      { maximumAge: 0, distanceFilter: 300 }
    );
  }
}

export function clearWatchPosition() {
  if (watchId) {
    Geolocation.clearWatch(watchId);
  }
}

export function stopObserving() {
  if (watchId) {
    Geolocation.stopObserving();
  }
}
