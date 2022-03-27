import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {useTranslation} from 'react-i18next';
import styles from './styles';
import SlideInModal from '../../Components/SlideInModal';
import {Linking} from 'react-native';
import {ContactPhone} from '../../Configs/setting';

const PromotionFooter = () => {
  const {i18n} = useTranslation();
  const onCall = () => {
    Linking.openURL(`tel:${ContactPhone}`);
  };
  return (
    <View style={styles.promotionFooterContainter}>
      <TouchableOpacity onPress={onCall}>
        <Text
          style={[
            styles.bottomTitle,
            {
              fontSize: 18,
            },
          ]}>
          {i18n.t('promotion:hot_line')}
          {ContactPhone.substring(0, 4) +
            '.' +
            ContactPhone.substring(4, ContactPhone.length)}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => {
          SlideInModal.hide();
        }}>
        <Text style={styles.closeText}>Thoát</Text>
      </TouchableOpacity>
    </View>
  );
};
export default PromotionFooter;
