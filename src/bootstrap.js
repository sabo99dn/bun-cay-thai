import React, {useState} from 'react';

/* Theme */
import Navigation from './Navigation';
import {useTranslation} from 'react-i18next';

/* check Internet */
import NetInfo from '@react-native-community/netinfo';
import {
  configureFonts,
  Provider as PaperProvider,
  DefaultTheme,
} from 'react-native-paper';
import EStyleSheet from 'react-native-extended-stylesheet';

/* FlashMessage */
import FlashMessage, {showMessage} from 'react-native-flash-message';
import {I18nextProvider} from 'react-i18next';
import i18next from './Localization';
import Colors from './Configs/theme/colors';
import Font from './Configs/theme/font';
import Dimensions from './Configs/theme/dimensions';
import DropDownPicker from 'react-native-dropdown-picker';
import {StyleSheet, View} from 'react-native';
import codePush from 'react-native-code-push';
import SlideInModal from './Components/SlideInModal';
import ModalNetworkWarning from './Components/ModalNetworkWarning';
import ModalRequireUpdate from './Components/ModalRequireUpdate';
import NotificationComponent from './Screens/Notification/setup';
import {
  getApplicationName,
  getDeviceId,
  getDeviceName,
  getSystemName,
  getSystemVersion,
  getVersion,
  isEmulator,
  getUniqueId,
} from 'react-native-device-info';

import {StatusBar} from 'react-native';
import {Platform} from 'react-native';

import SplashScreen from 'react-native-splash-screen';
import useLocation from './Hooks/useLocation';

const fontConfig = {
  web: {
    regular: {
      fontFamily: 'Roboto-Regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Roboto-Medium',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'Roboto-Light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'Roboto-Thin',
      fontWeight: 'normal',
    },
  },
  ios: {
    regular: {
      fontFamily: 'Roboto-Regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Roboto-Medium',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'Roboto-Light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'Roboto-Thin',
      fontWeight: 'normal',
    },
  },
  android: {
    regular: {
      fontFamily: 'Roboto-Regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Roboto-Medium',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'Roboto-Light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'Roboto-Thin',
      fontWeight: 'normal',
    },
  },
};

const theme = {
  ...DefaultTheme,
  fonts: configureFonts(fontConfig),
};

EStyleSheet.build({
  ...Colors,
  ...Font,
  ...Dimensions,
});

const Bootstrap = () => {
  const [loading, setLoading] = useState(true);
  const [isConnected, setConnected] = useState(true);
  const [isRequireUpdate, setIsRequireUpdate] = useState(false);
  const [progressUpdate, setProgressUpdate] = useState(null);
  const [contentUpdate, setContentUpdate] = useState(null);
  const [deviceInfo, setDeviceInfo] = useState({});
  // useEffect functions
  React.useEffect(() => {
    SplashScreen.hide();
    getDeviceInfo();
    onCodePushCheckForUpdateApp();
    setLoading(false);
  }, []);
  const location = useLocation();
  /*Code Push*/
  const onCodePushCheckForUpdateApp = async () => {
    try {
      let isUpdate = await codePush.checkForUpdate();
      setIsRequireUpdate(isUpdate !== null ? true : false);
      setContentUpdate(isUpdate);
    } catch (err) {
      showMessage({
        message: i18n.t('unknownMessage'),
        type: 'danger',
        position: 'top',
      });
    }
  };

  const getDeviceInfo = async () => {
    const app_name = await getApplicationName();
    const device_name = await getDeviceName();
    const os_version = await getSystemVersion();
    const app_version = await getVersion();
    const device_id = await getDeviceId();
    const device_type = await getSystemName();
    const is_emulator = await isEmulator();
    setDeviceInfo({
      app_name,
      device_name,
      os_version,
      app_version,
      device_id,
      device_type,
      is_emulator,
      unique_id: getUniqueId(),
    });
  };
  const onHandleUpdate = async () => {
    codePush.sync(
      {
        installMode: codePush.InstallMode.ON_NEXT_RESTART,
      },
      codePushStatusDidChange,
      onDownloadProgress,
      onError,
    );
  };

  const onError = error => {
    showMessage({
      message: i18n.t('unknownMessage'),
      type: 'danger',
      position: 'top',
    });
  };

  const codePushStatusDidChange = async status => {
    switch (status) {
      case codePush.SyncStatus.CHECKING_FOR_UPDATE:
        setProgressUpdate(25);
        break;
      case codePush.SyncStatus.DOWNLOADING_PACKAGE:
        setProgressUpdate(0.5);
        break;
      case codePush.SyncStatus.INSTALLING_UPDATE:
        setProgressUpdate(0.75);
        break;
      case codePush.SyncStatus.UPDATE_INSTALLED:
        setProgressUpdate(1);
        break;
      default:
        break;
    }
  };

  const onDownloadProgress = downloadProgress => {
    if (downloadProgress) {
    }
  };

  /* Localization */
  const {i18n} = useTranslation();
  const language = 'vi';

  // Set as default
  DropDownPicker.setLanguage(language);
  if (language !== i18n.language) {
    i18n.changeLanguage(language);
  }

  /*Check internet*/
  NetInfo.fetch().then(state => {
    if (isConnected !== state.isConnected) {
      setConnected(state.isConnected);
    }
  });

  return (
    <I18nextProvider i18n={i18next}>
      <PaperProvider theme={theme}>
        <View style={styles.container}>
          {Platform.OS === 'android' && (
            <StatusBar
              barStyle="dark-content"
              translucent
              backgroundColor="#fff"
            />
          )}
          <Navigation />
          <FlashMessage
            position={
              Platform.OS === 'ios'
                ? 'top'
                : {top: StatusBar.currentHeight, left: 0, right: 0}
            }
            floating={Platform.OS !== 'ios'}
          />

          <SlideInModal />
          <NotificationComponent />
          <ModalNetworkWarning />
          <ModalRequireUpdate
            visible={
              !loading && isRequireUpdate && deviceInfo?.is_emulator === false
            }
            contentUpdate={contentUpdate}
            progressUpdate={progressUpdate}
            onConfirm={() => onHandleUpdate()}
          />
        </View>
      </PaperProvider>
    </I18nextProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default codePush({
  checkFrequency: codePush.CheckFrequency.MANUAL,
})(Bootstrap);
