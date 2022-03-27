import React from 'react';
import {TouchableOpacity, Dimensions, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
const dim = Dimensions.get('screen');

export default React.memo(
  ({item, style = {}, onPress, index, imageKey, local, height}) => {
    return (
      <TouchableOpacity
        style={[styles.container, style]}
        onPress={() => onPress(index)}>
        <FastImage
          resizeMode={FastImage.resizeMode.cover}
          source={{uri: item[imageKey]}}
          style={[styles.image, {height: height}]}
        />
      </TouchableOpacity>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    width: dim.width,
  },
  image: {
    borderRadius: 10,
    height: 230,
    width: dim.width - 20,
  },
});
