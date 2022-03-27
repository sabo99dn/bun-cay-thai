import React from 'react';
import ContentLoader, {Rect} from 'react-content-loader/native';
import {Dimensions, View} from 'react-native';
const {width} = Dimensions.get('window');

const ProductItemLoader = ({style}) => (
  <View style={style}>
    <ContentLoader
      height={125}
      speed={1}
      backgroundColor="#b8b8b8"
      foregroundColor="#c7c7c7">
      <Rect x="10" y="0" rx="5" ry="5" width="125" height="125" />
      <Rect x="140" y="10" rx="4" ry="4" width={width - 145} height="18" />
      <Rect x="140" y="40" rx="3" ry="3" width={width - 145} height="10" />
      <Rect x="140" y="60" rx="3" ry="3" width={150} height="10" />
      <Rect x="140" y="90" rx="4" ry="4" width={width - 145} height="20" />
    </ContentLoader>
  </View>
);

export default ProductItemLoader;
