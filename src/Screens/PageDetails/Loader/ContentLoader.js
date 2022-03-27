import React from 'react';
import {Dimensions, View, StyleSheet} from 'react-native';
import ContentLoader, {Rect} from 'react-content-loader/native';
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export const BodyLoader = ({
                                 width,
                                 height,
                                 backgroundColor,
                                 foregroundColor,
                                 style,
                                 speed,
                             }) => {
    return (
        <View style={style}>
            <ContentLoader
                height={height}
                width={width}
                speed={speed}
                viewBox={"0 0 " + width + " " + height}
                backgroundColor={backgroundColor}
                foregroundColor={foregroundColor}>
                <Rect y="0" rx="2" ry="2" width={width} height={8} />
                <Rect y="10" rx="2" ry="2" width={width} height={5} />
                <Rect y="20" rx="2" ry="2" width={width} height={5} />
                <Rect y="30" rx="2" ry="2" width={width} height={5} />
                <Rect y="40" rx="2" ry="2" width={width} height={5} />
                <Rect y="50" rx="2" ry="2" width={width} height={5} />
                <Rect y="60" rx="2" ry="2" width={width} height={5} />
                <Rect y="70" rx="2" ry="2" width={width} height={5} />
                <Rect y="80" rx="2" ry="2" width={width} height={5} />
                <Rect y="90" rx="2" ry="2" width={width} height={5} />
                <Rect y="100" rx="2" ry="2" width={width/2} height={5} />
                <Rect y="110" rx="2" ry="2" width={width} height={5} />
                <Rect y="120" rx="2" ry="2" width={width} height={5} />
                <Rect y="130" rx="2" ry="2" width={width} height={5} />
                <Rect y="140" rx="2" ry="2" width={width} height={5} />
                <Rect y="150" rx="2" ry="2" width={width} height={5} />
                <Rect y="160" rx="2" ry="2" width={width} height={5} />
                <Rect y="170" rx="2" ry="2" width={width} height={5} />
                <Rect y="180" rx="2" ry="2" width={width} height={5} />
                <Rect y="190" rx="2" ry="2" width={width} height={5} />
            </ContentLoader>
        </View>
    );
};

BodyLoader.defaultProps = {
    height: deviceWidth / 2,
    width: deviceWidth,
    backgroundColor: '#b8b8b8',
    foregroundColor: '#c7c7c7',
    style: {
        height: deviceHeight,
    },
    speed: 1.2,
};
