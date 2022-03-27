import React from 'react';
import {Dimensions, View, StyleSheet} from 'react-native';
import ContentLoader, {Rect} from 'react-content-loader/native';
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export const ImageLoader = ({
  width,
  height,
  backgroundColor,
  foregroundColor,
  style,
  speed,
}) => {
  return (
    <View
      style={[
        style,
        {
          height: height,
        },
      ]}>
      <ContentLoader
        height={height}
        width={width}
        speed={speed}
        viewBox={'0 0 ' + width + ' ' + height}
        backgroundColor={backgroundColor}
        foregroundColor={foregroundColor}>
        <Rect rx="10" ry="10" width={width} height={height} />
      </ContentLoader>
    </View>
  );
};

ImageLoader.defaultProps = {
  height: deviceWidth / 2,
  width: deviceWidth,
  backgroundColor: '#b8b8b8',
  foregroundColor: '#c7c7c7',
  style: {
    height: deviceHeight,
  },
  speed: 1.2,
};
