import React from 'react';
import {Dimensions, View} from 'react-native';
import ContentLoader, {Rect} from 'react-content-loader/native';
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
import styles from './styles';

const widthImg = deviceWidth / 2 - 10;
const Loader = ({
  width,
  height,
  backgroundColor,
  foregroundColor,
  style,
  speed,
  rx = 10,
}) => {
  return (
    <View style={styles.loaderItem}>
      <ContentLoader
        viewBox={`0 0 ${deviceWidth - 32} ${300}`}
        width={deviceWidth - 32}
        height={300}>
        <Rect x="0" y="0" rx="5" ry="5" width="180" height="140" />
        <Rect x="192.84" y="0" rx="0" ry="0" width="180" height="12.12" />
        <Rect x="192.84" y="16" rx="0" ry="0" width="30" height="9" />
        <Rect x="192.84" y="30" rx="0" ry="0" width="148.72" height="12.12" />
        <Rect x="192.84" y="46" rx="0" ry="0" width="40" height="9" />

        <Rect x="0" y="160" rx="5" ry="5" width="180" height="140" />
        <Rect x="192.84" y="160" rx="0" ry="0" width="148.72" height="12.12" />
        <Rect x="192.84" y="179" rx="0" ry="0" width="89" height="9" />
        <Rect x="192.84" y="195" rx="0" ry="0" width="180.72" height="12.12" />
        <Rect x="192.84" y="215" rx="0" ry="0" width="89" height="9" />
      </ContentLoader>
    </View>
  );
};

export default ({item, onPress}) => {
  return (
    <View onPress={onPress} style={styles.loaderContainer}>
      <Loader
        width={widthImg}
        height={widthImg / 2}
        style={styles.banner}
        rx={10}
      />
      <Loader width={widthImg - 10} height={8} rx={2} style={[styles.name]} />
      <Loader width={widthImg - 10} height={8} rx={2} style={[styles.name]} />
      <Loader width={100} height={8} rx={2} style={[styles.name]} />
    </View>
  );
};

Loader.defaultProps = {
  height: deviceWidth / 2,
  width: deviceWidth,
  backgroundColor: '#b8b8b8',
  foregroundColor: '#c7c7c7',
  style: {
    height: deviceHeight,
  },
  speed: 1.2,
};
