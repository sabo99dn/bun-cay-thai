import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {TextInput} from 'react-native';
import {View} from 'react-native';
import SlideInModal from '../../../Components/SlideInModal';
import {Close, CloseButton, Cross} from '../../../svg/common';
import styles from './styles';

const AddressPicker = ({
  field,
  label,
  itemsDefault = [],
  errors = null,
  setModalVisible = () => {},
  setModalLabel = () => {},
  setModalData = () => {},
  setModalField = () => {},
  values,
  touched = null,
  placeholder = '',
  handleChangeCallback = () => {},
}) => {
  const _handlePress = () => {
    setModalLabel(label);
    setModalData(itemsDefault);
    setModalField(field);
    setModalVisible(true);
  };

  const getValueName = itemsDefault.filter(
    item => item.code == values[field],
  )?.[0]?.name;
  return (
    <TouchableOpacity onPress={_handlePress} style={[styles.formFieldPicker]}>
      <Text
        style={[styles.labelPicker, getValueName ? styles.activeLabel : null]}>
        {label}
      </Text>
      <View
        style={[
          styles.textInputWrapper,
          getValueName ? styles.fieldActive : null,
        ]}>
        <Text
          style={[
            styles.textInput,
            getValueName ? styles.textInputActive : null,
          ]}>
          {getValueName || placeholder}
        </Text>
      </View>
      {touched[field] && errors[field] ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{errors[field]}</Text>
        </View>
      ) : null}
    </TouchableOpacity>
  );
};
export default AddressPicker;
