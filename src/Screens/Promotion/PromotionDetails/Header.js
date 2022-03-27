import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {Close} from '../../../svg/detail';
import SlideInModal from '../../../Components/SlideInModal';
import {useTranslation} from 'react-i18next';
const PromotionHeader = () => {
  const {i18n} = useTranslation();
  return (
    <View style={styles.promotionHeaderContainter}>
      <Text style={styles.headerTitle}>
        {i18n.t('promotion:promoton_news')}
      </Text>
      <TouchableOpacity
        onPress={() => {
          SlideInModal.hide();
        }}>
        <Close backgroundColor="rgba(51, 51, 51, 0.5)" />
      </TouchableOpacity>
    </View>
  );
};
export default PromotionHeader;
