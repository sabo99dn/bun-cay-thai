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
        width={deviceWidth}
        height={300}
        viewBox={`0 0 ${deviceWidth} ${300}`}
        backgroundColor="#f0f0f0"
        foregroundColor="#dedede">
        <Rect x="0" y="254" rx="4" ry="4" width="271" height="9" />
        <Rect x="0" y="273" rx="3" ry="3" width="119" height="6" />
        <Rect
          x="0"
          y="20"
          rx="10"
          ry="10"
          width={deviceWidth - 32}
          height="217"
        />
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
