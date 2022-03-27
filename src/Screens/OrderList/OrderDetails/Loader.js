import React from 'react';
import ContentLoader, {Rect} from 'react-content-loader/native';
import {Dimensions} from 'react-native';
const WIDTH = Dimensions.get('window').width;
export default ({props}) => {
  return (
    <>
      <ContentLoader
        viewBox={`0 0 ${WIDTH - 40} ${WIDTH / 2}`}
        height={WIDTH / 2}
        width={WIDTH - 40}
        {...props}>
        <Rect x="0" y="13" rx="4" ry="4" width="400" height="9" />
        <Rect x="0" y="29" rx="4" ry="4" width="100" height="8" />
        <Rect x="0" y="50" rx="4" ry="4" width="400" height="10" />
        <Rect x="0" y="65" rx="4" ry="4" width="400" height="10" />
        <Rect x="0" y="79" rx="4" ry="4" width="100" height="10" />
        <Rect x="0" y="99" rx="5" ry="5" width="400" height="200" />
      </ContentLoader>
      <ContentLoader
        viewBox={`0 0 ${WIDTH - 40} ${WIDTH / 2}`}
        height={WIDTH / 2}
        width={WIDTH - 40}
        {...props}>
        <Rect x="0" y="13" rx="4" ry="4" width="400" height="9" />
        <Rect x="0" y="29" rx="4" ry="4" width="100" height="8" />
        <Rect x="0" y="50" rx="4" ry="4" width="400" height="10" />
        <Rect x="0" y="65" rx="4" ry="4" width="400" height="10" />
        <Rect x="0" y="79" rx="4" ry="4" width="100" height="10" />
        <Rect x="0" y="99" rx="5" ry="5" width="400" height="200" />
      </ContentLoader>
      <ContentLoader
        viewBox={`0 0 ${WIDTH - 40} ${WIDTH / 2}`}
        height={WIDTH / 2}
        width={WIDTH - 40}
        {...props}>
        <Rect x="0" y="13" rx="4" ry="4" width="400" height="9" />
        <Rect x="0" y="29" rx="4" ry="4" width="100" height="8" />
        <Rect x="0" y="50" rx="4" ry="4" width="400" height="10" />
        <Rect x="0" y="65" rx="4" ry="4" width="400" height="10" />
        <Rect x="0" y="79" rx="4" ry="4" width="100" height="10" />
        <Rect x="0" y="99" rx="5" ry="5" width="400" height="200" />
      </ContentLoader>
      <ContentLoader
        viewBox={`0 0 ${WIDTH - 40} ${WIDTH / 2}`}
        height={WIDTH / 2}
        width={WIDTH - 40}
        {...props}>
        <Rect x="0" y="13" rx="4" ry="4" width="400" height="9" />
        <Rect x="0" y="29" rx="4" ry="4" width="100" height="8" />
        <Rect x="0" y="50" rx="4" ry="4" width="400" height="10" />
        <Rect x="0" y="65" rx="4" ry="4" width="400" height="10" />
        <Rect x="0" y="79" rx="4" ry="4" width="100" height="10" />
        <Rect x="0" y="99" rx="5" ry="5" width="400" height="200" />
      </ContentLoader>
    </>
  );
};
