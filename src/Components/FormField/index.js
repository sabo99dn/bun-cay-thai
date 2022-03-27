import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './styles';

export default function FormField({
  field,
  label,
  secureTextEntry,
  autoCapitalize,
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  propsTextInput = {},
  labelStyle = {},
}) {
  const [inputActive, setInputActive] = React.useState(false);
  return (
    <View style={styles.formGroup}>
      <Text
        style={[
          styles.label,
          inputActive || values[field] ? styles.labelFocusColor : null,
          labelStyle,
        ]}>
        {label}
      </Text>
      <TextInput
        style={[
          styles.input,
          inputActive || values[field] ? styles.inputFocusBordersColor : null,
        ]}
        value={values[field]}
        onFocus={() => setInputActive(true)}
        onBlur={handleBlur(field)}
        onEndEditing={() => setInputActive(false)}
        onChangeText={handleChange(field)}
        secureTextEntry={secureTextEntry}
        autoCapitalize={autoCapitalize || 'none'}
        {...propsTextInput}
      />
      {touched[field] && errors[field] ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{errors[field]}</Text>
        </View>
      ) : null}
    </View>
  );
}
