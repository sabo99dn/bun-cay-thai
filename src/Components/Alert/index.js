import { Alert } from 'react-native';

let isAlert = false;

function pressAction(onPress) {
  isAlert = false;
  typeof onPress === 'function' && onPress();
}

export function setAlertOk(title = '', message = '', onPress) {
  if (!isAlert) {
    isAlert = true;
    Alert.alert(
      title,
      message,
      [{ text: 'OK', onPress: () => pressAction(onPress) }],
      { cancelable: false }
    );
  }
}

export function setAlertOkCancel(
  title = '',
  message = '',
  onPressOk,
  onPressCancel
) {
  if (!isAlert) {
    isAlert = true;
    Alert.alert(
      title,
      message,
      [
        { text: 'OK', onPress: () => pressAction(onPressOk) },
        { text: 'Cancel', onPress: () => pressAction(onPressCancel) },
      ],
      { cancelable: false }
    );
  }
}
