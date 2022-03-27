import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import NetInfo from "@react-native-community/netinfo";
import Modal from 'react-native-modal';
import {Button} from "react-native-elements";
import NetworkUtils from "../../Utils/networkUtils";
import styles from './styles';
import {useTranslation} from "react-i18next";

const ModalNetworkWarning = (props) => {
  const [isOffline, setOfflineStatus] = useState(false);
  const [isRetrying, setIsRetrying] = useState(false);
  const {i18n} = useTranslation();
  useEffect(() => {
    const removeNetInfoSubscription = NetInfo.addEventListener(async (state) => {
      const isConnected = state.isConnected;
      setOfflineStatus(!isConnected);
      setTimeout(async () => {
        const isConnected = await NetworkUtils.isNetworkAvailable();
        setOfflineStatus(!isConnected);
      },1000)
    });
    return () => removeNetInfoSubscription();
  }, []);

  const onRetry = async () => {
    setIsRetrying(true)
    const isConnected = await NetworkUtils.isNetworkAvailable();
    setOfflineStatus(!isConnected);
    setIsRetrying(false)
  }
  return (
    <Modal
      animationIn="fadeIn"
      animationOut="fadeOut"
      transparent={true}
      isVisible={isOffline}
      animationOutTiming={20}
      backdropOpacity={0.3}>
      <View style={styles.containerAlert}>
        <View style={styles.modalAlert}>
          <Text style={styles.textTitle}>
            {i18n.t("nextWorkError")}
          </Text>
          <Text style={styles.message}>
            {i18n.t("descriptionNextWorkError")}
          </Text>
          <Button
              disabled={isRetrying}
              title={i18n.t("buttonTryAgain")}
              style={styles.customBtn}
              titleStyle={styles.titleStyle}
              onPress={onRetry}
              buttonStyle={{backgroundColor: "#FE5627"}}
          />
        </View>
      </View>
    </Modal>
  );
};

export default ModalNetworkWarning;
