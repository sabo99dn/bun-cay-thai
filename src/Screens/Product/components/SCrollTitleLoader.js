import React from 'react';
import ContentLoader, {Rect} from 'react-content-loader/native';
import {Dimensions, View} from 'react-native';
const {width} = Dimensions.get('window');

const ScrollTitleLoader = ({style}) => (
  <View style={style}>
    <ContentLoader
      height={35}
      speed={1}
      backgroundColor="#b8b8b8"
      foregroundColor="#c7c7c7">
      <Rect x="10" y="0" rx="20" ry="20" width="140" height="35" />
      <Rect x="160" y="0" rx="20" ry="20" width="140" height="35" />
      <Rect x="310" y="0" rx="20" ry="20" width="140" height="35" />
    </ContentLoader>
  </View>
);

export default ScrollTitleLoader;
