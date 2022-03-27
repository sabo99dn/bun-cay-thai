import React from 'react';
import {useTranslation} from 'react-i18next';
import {ScrollView} from 'react-native';
import {FlatList} from 'react-native';
import {Dimensions, View, TouchableOpacity, Text} from 'react-native';
import {Divider} from 'react-native-elements';
import Modal from 'react-native-modal';
import {Close} from '../../../svg/common';
import styles from './styles';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const ModalSelect = ({
  item = {},
  visible = false,
  setModalVisible = () => {},
  label = '',
  modalData = [],
  handleChange = () => {},
  modalField,
  handleChangeCallback = () => {},
  values = [],
}) => {
  const {i18n} = useTranslation();

  const renderItem = ({item, index}) => {
    const active = values[modalField] == item.code;
    return (
      <TouchableOpacity
        style={[styles.listItem, active ? styles.listItemActive : null]}
        onPress={() => onItemPress(item)}>
        <Text style={[styles.itemName, active ? styles.itemNameActive : null]}>
          {item?.name}
        </Text>
      </TouchableOpacity>
    );
  };

  const onItemPress = item => {
    handleChange(modalField, item?.code);
    if (modalField === 'city') {
      handleChange('district', null);
      handleChange('ward', null);
    } else if (modalField === 'district') {
      handleChange('ward', null);
    }

    handleChangeCallback(item?.code);
    setModalVisible(false);
  };

  return (
    <Modal
      transparent={true}
      animationOut="slideOutDown"
      isVisible={visible}
      backdropOpacity={0.3}
      style={{justifyContent: 'flex-end', margin: 0}}
      testID={'modal'}
      deviceHeight={HEIGHT}
      deviceWidth={WIDTH}
      onBackdropPress={() => setModalVisible(false)}
      animationOutTiming={400}>
      <View style={styles.contentColors}>
        <View style={styles.headerModal}>
          <Text style={styles.titleModal}>{label}</Text>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setModalVisible(false)}>
            <Close width={40} height={40} />
          </TouchableOpacity>
        </View>
        {modalData && modalData.length ? (
          <FlatList
            contentContainerStyle={styles.listInner}
            style={styles.modalDataContainer}
            data={modalData}
            renderItem={renderItem}
            keyExtractor={(item, index) => index}
          />
        ) : (
          <Text style={styles.notFoundText}>{i18n.t('auth:not_found')}</Text>
        )}
      </View>
    </Modal>
  );
};
export default ModalSelect;
