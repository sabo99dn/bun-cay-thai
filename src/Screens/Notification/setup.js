import React, {useMemo} from 'react';
import messaging from '@react-native-firebase/messaging';
import NotificationPopup from 'react-native-push-notification-popup';
import RootNavigator from '../../Navigation/RootNavigator';
import PushNotification from "react-native-push-notification";
import {saveNotificationToken} from '../../Store/notification/service';
import {
  getApplicationName,
  getDeviceId,
  getDeviceName,
  getSystemName,
  getSystemVersion,
  getVersion,
  isEmulator,
  getUniqueId
} from "react-native-device-info";
import {useSelector} from "react-redux";
import {loginSuccessSelector, userDataSelector} from "../../Store/auth/selectors";

const NotificationComponent = (props) => {
  const loginSuccess = useSelector(state => loginSuccessSelector(state));
  const userData = useSelector(state => userDataSelector(state));
  const NotificationPopupRef = React.useRef()
  React.useEffect(() => {
    checkChatNotification()
    addAndroidChannel()
  }, [])
  React.useEffect(() => {
    requestUserPermission()
  }, [loginSuccess])

  const addAndroidChannel = () => {
    PushNotification.createChannel(
      {
        channelId: "default_notification_channel_id",
        channelName: "Chat Channel",
        channelDescription: "A channel to categorise your chat notifications",
        playSound: true,
        soundName: "notification.wav",
        importance: 4,
        vibrate: true,
      },
      (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
    );
  }

  const checkChatNotification = () => {
    messaging().onMessage(async (remoteMessage) => {
      const data = remoteMessage && remoteMessage.data && remoteMessage.data.params ? JSON.parse(remoteMessage.data.params) : {}
      NotificationPopup.current.show({
        onPress: function () {
        },
        appIconSource: require('../../assets/images/logo.jpg'),
        appTitle: 'Bún Cay Thái',
        timeText: '',
        title: data.title_expo,
        body: data.description_expo,
        slideOutTime: 5000,
      })
    })
  }

  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission()
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL
    if (enabled) {
      const token = await messaging().getToken();
      const app_name = await getApplicationName();
      const device_name = await getDeviceName();
      const os_version = await getSystemVersion();
      const app_version = await getVersion();
      const device_id = await getDeviceId();
      const device_type = await getSystemName();
      const is_emulator = await isEmulator();
      saveNotificationToken({
        token: token,
        app_name: app_name,
        device_name: device_name,
        os_version: os_version,
        app_version: app_version,
        device_id: device_id,
        device_type: device_type,
        is_emulator: is_emulator,
        unique_id: getUniqueId(),
        user_id: userData.id !== undefined ? userData.id : null,
      });
    }
  };
  return <NotificationPopup ref={NotificationPopupRef} />
}

export default NotificationComponent
