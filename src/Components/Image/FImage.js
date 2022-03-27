import React from 'react';
import FastImage from 'react-native-fast-image';

const FImage = ({uri = '', style, ...rest}) => (
  <FastImage
    resizeMode={FastImage.resizeMode.cover}
    source={uri.includes('http') ? {uri} : uri}
    style={style}
    {...rest}
  />
);

export default FImage;
