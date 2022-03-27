import React, {useEffect, useState} from 'react';
import {View, Text, Platform} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import styles from './styles';
import {Tick} from '../../svg/common';

function FormFieldDropDown(
  {
    field,
    label,
    touched,
    errors,
    handleChange,
    schema = {
      label: 'label', // required
      value: 'value', // required
    },
    itemsDefault = [],
    valueDefault = null,
    setOpenDefault = null,
    setCloseDefault = null,
    setData = null,
    itemKey = 'id',
    dropDownDirection = 'TOP',
    zIndex = 5000,
    zIndexInverse = 5001,
  },
  ref,
) {
  const [dropDownActive, setDropDownActive] = React.useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(valueDefault);
  const [items, setItems] = useState(itemsDefault);
  useEffect(() => {
    if (setData) {
      setData(value);
    }
  }, [value]);

  React.useImperativeHandle(ref, () => ({
    setOpen: setOpen,
  }));

  const MIN_DROPDOWN_HEIGHT = 250;
  return (
    <View>
      <Text
        style={[
          styles.label,
          dropDownActive || value ? styles.labelFocusColor : null,
        ]}>
        {label}
      </Text>
      <View
        style={
          Platform.OS === 'android'
            ? {
                minHeight: dropDownActive ? MIN_DROPDOWN_HEIGHT : 0,
              }
            : null
        }>
        <DropDownPicker
          dropDownDirection={
            Platform.OS === 'android' ? 'BOTTOM' : dropDownDirection
          }
          zIndex={zIndex}
          zIndexInverse={zIndexInverse}
          open={open}
          setOpen={setOpen}
          schema={schema}
          searchTextInputStyle={styles.searchTextInputStyle}
          dropDownContainerStyle={styles.dropDownContainerStyle}
          style={styles.dropDownPickerStyle}
          itemSeparatorStyle={{border: 0}}
          itemKey={itemKey}
          placeholderStyle={styles.placeholderStyle}
          searchContainerStyle={styles.searchContainerStyle}
          containerStyle={[
            value
              ? styles.dropDownWrapperContainerStyleActive
              : styles.dropDownWrapperContainerStyle,
            Platform.OS === 'android'
              ? {
                  minHeight: dropDownActive ? MIN_DROPDOWN_HEIGHT : 0,
                }
              : null,
          ]}
          listItemLabelStyle={styles.listItemLabelStyle}
          tickIconStyle={styles.tickIconStyle}
          selectedItemLabelStyle={styles.selectedItemLabelStyle}
          TickIconComponent={() => <Tick />}
          ArrowDownIconComponent={() => (value ? <Tick /> : null)}
          ArrowUpIconComponent={() => (value ? <Tick /> : null)}
          textStyle={[
            styles.textStyle,
            dropDownActive || value ? styles.dropDownActive : null,
          ]}
          listMode={'SCROLLVIEW'}
          value={value}
          items={items}
          setValue={setValue}
          setItems={setItems}
          searchable={true}
          scrollViewProps={{nestedScrollEnabled: true}}
          onChangeValue={handleChange(field)}
          onOpen={() => {
            if (setOpenDefault) {
              setOpenDefault();
            }
            setDropDownActive(true);
          }}
          onClose={() => {
            if (setCloseDefault) {
              setCloseDefault();
            }
            setDropDownActive(false);
          }}
        />
      </View>
      {touched[field] && errors[field] ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{errors[field]}</Text>
        </View>
      ) : null}
      <View style={{marginBottom: 20}}></View>
    </View>
  );
}
export default React.forwardRef(FormFieldDropDown);
