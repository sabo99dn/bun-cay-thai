import React from 'react';
import {Dimensions, View} from 'react-native';
import ContentLoader, {Rect} from 'react-content-loader/native';
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
import styles from './styles';

const Loader = ({
                            width,
                            height,
                            backgroundColor,
                            foregroundColor,
                            style,
                            speed,
                            rx = 10
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
                <Rect rx={rx} ry={rx} width={width} height={height} />
            </ContentLoader>
        </View>
    );
};

export default React.memo(({ item, onPress }) => {
    return (
        <View style={[styles.container, {
            borderColor: "transparent"
        }]} onPress={onPress}>
            <Loader
                width={148}
                height={148}
                style={styles.banner}
            />
            <Loader
                width={130}
                height={14}
                rx={2}
                style={[styles.name]}
            />
            <View style={styles.wrapPrice}>
                <Loader
                    width={70}
                    height={14}
                    rx={2}
                    style={[styles.textDiscount, {marginRight: 10}]}
                />
                <Loader
                    width={50}
                    height={14}
                    rx={2}
                    style={[styles.textDiscount]}
                />
            </View>
            <Loader
                width={140}
                height={30}
                rx={2}
                style={{
                    marginHorizontal: 5,
                    alignItems: 'center',
                    paddingTop: 6,
                    paddingBottom: 8
                }}
            />
        </View>
    );
});

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
