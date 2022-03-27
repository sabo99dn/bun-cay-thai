import React, {useState, useEffect} from 'react';
import {Platform, PermissionsAndroid} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import {showMessage} from 'react-native-flash-message';
import {useTranslation} from 'react-i18next';

const useLocation = () => {
  const {i18n} = useTranslation();
  const [location, setLocation] = useState({
    lat: 0,
    lon: 0,
  });

  useEffect(() => {
    (async () => {
      if (Platform.OS === 'ios') {
        Geolocation.requestAuthorization();
        getOneTimeLocation();
      } else {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          getOneTimeLocation();
          return;
        }
        showMessage({
          message: i18n.t('common:cannot_get_location'),
          type: 'danger',
          position: 'top',
        });
      }
    })();
  }, []);
  const getOneTimeLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const currentLongitude = JSON.stringify(position.coords.longitude);
        const currentLatitude = JSON.stringify(position.coords.latitude);
        setLocation({lon: currentLongitude, lat: currentLatitude});
      },
      error => {
        // showMessage({
        //   message: i18n.t('common:cannot_get_location'),
        //   type: 'danger',
        //   position: 'top',
        // });
      },
      {
        // enableHighAccuracy: false,
        timeout: 10000,
        maximumAge: 1000,
      },
    );
  };

  return location;
};

export default useLocation;
