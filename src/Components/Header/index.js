import React from 'react';
import {useNavigation} from '@react-navigation/native';
import PropTypes from 'prop-types';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import {ChevronLeft} from '../../svg/common';
import styles from "./styles";

const Header = ({
  title,
  titleStyle,
  containerStyle,
  leftIcon,
  leftPress,
  rightIcon,
  rightPress,
  middleComponent,
  rightComponent,
  leftComponent,
  leftStyle,
  isDefault,
}) => {
  const navigation = useNavigation();

  const _goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={StyleSheet.flatten([styles.container, containerStyle])}>
      <View style={StyleSheet.flatten([styles.leftComponent])}>
        {leftIcon || isDefault ? (
          <TouchableOpacity
            style={isDefault ? [styles.backStyle, leftStyle] : {}}
            onPress={isDefault ? _goBack : leftPress}>
            {!leftIcon ? <ChevronLeft /> : leftIcon}
          </TouchableOpacity>
        ) : leftComponent ? (
          leftComponent
        ) : null}
        {title ? (
          <Text style={isDefault ? styles.titleStyle : titleStyle}>
            {title}
          </Text>
        ) : middleComponent ? (
          middleComponent
        ) : null}
      </View>
      <View style={StyleSheet.flatten([styles.rightComponent])}>
        {rightIcon ? (
          <TouchableOpacity onPress={rightPress}>{rightIcon}</TouchableOpacity>
        ) : rightComponent ? (
          rightComponent
        ) : isDefault ? (
          <Text style={styles.emptyRightStyle} />
        ) : null}
      </View>
    </View>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  leftPress: PropTypes.func,
  rightPress: PropTypes.func,
  leftIcon: PropTypes.object,
  rightIcon: PropTypes.object,
  titleStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  middleComponent: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  rightComponent: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  leftComponent: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

Header.defaultProps = {
  leftPress: () => {},
  rightPress: () => {},
  containerStyle: {},
  titleStyle: {},
  middleComponent: null,
  rightComponent: null,
  leftComponent: null,
  isDefault: false,
};

export default Header;
