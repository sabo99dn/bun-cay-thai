import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {Button, LinearProgress} from "react-native-elements";
import Modal from 'react-native-modal';
import {useTranslation} from "react-i18next";
import codePush from 'react-native-code-push';

const ModalRequireUpdate = ({visible = false, onConfirm, progressUpdate, contentUpdate}) => {
  const {i18n} = useTranslation();
  return (
    <Modal
      animationIn="fadeIn"
      animationOut="fadeOut"
      transparent={true}
      isVisible={visible}
      animationOutTiming={20}
      backdropOpacity={0.3}>
      <View style={styles.containerAlert}>
        <View style={styles.modalAlert}>
          <Text style={styles.textTitle}>
            {i18n.t("alertUpdate")} ({contentUpdate?.appVersion}.{contentUpdate?.label})
          </Text>
          <Text style={styles.message}>
            {progressUpdate === null ? i18n.t("descriptionUpdate") : i18n.t("descriptionProgressUpdate")}
          </Text>

          {
            progressUpdate !== null ?
                <LinearProgress color="#80CD28" variant="determinate" value={progressUpdate}/> : null
          }
          {
            progressUpdate === 1 ?
                <View style={styles.wrapperBtn}>
                  <Button
                      title={i18n.t("resetApp")}
                      style={styles.customBtn}
                      titleStyle={styles.titleStyle}
                      onPress={codePush.restartApp}
                      buttonStyle={{backgroundColor: "#FE5627"}}
                  />
                </View>
                :
                null
          }

          {
            progressUpdate === null ?
                <View style={styles.wrapperBtn}>
                  <Button
                      title={i18n.t("buttonUpdateNewVersion")}
                      style={styles.customBtn}
                      titleStyle={styles.titleStyle}
                      onPress={onConfirm}
                      buttonStyle={{backgroundColor: "#FE5627"}}
                  />
                </View>
                :
                null
          }
        </View>
      </View>
    </Modal>
  );
};

export default ModalRequireUpdate;
