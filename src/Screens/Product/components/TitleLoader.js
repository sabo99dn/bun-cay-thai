import React from 'react';
import ContentLoader, {Rect} from 'react-content-loader/native';
import {Dimensions, View} from 'react-native';
const {width} = Dimensions.get('window');

const TitleLoader = ({style}) => (
  <View style={style}>
    <ContentLoader
      height={35}
      speed={1}
      backgroundColor="#b8b8b8"
      foregroundColor="#c7c7c7">
      <Rect x="10" y="0" rx="0" ry="0" width="140" height="20" />
    </ContentLoader>
  </View>
);

export default TitleLoader;
