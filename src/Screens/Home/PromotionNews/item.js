import React from 'react';
import FastImage from 'react-native-fast-image';
import {Text, View} from 'react-native';
import styles from './styles';
import {Date} from '../../../svg/common';
import {formatDate,formatTypeDate} from '../../../Utils/datetime'
export default React.memo(({item, onPress}) => {
    const createdDate = formatTypeDate(item?.created_date)
    return (
        <View style={styles.container} onPress={onPress}>
            <FastImage
                resizeMode={FastImage.resizeMode.cover}
                source={{ uri: item.image }}
                style={styles.banner}
            />
            <Text numberOfLines={2} style={styles.name}>{item.title}</Text>
            <View style={styles.wrapDate}>
                <Date />
                <Text style={styles.date}>
                    {formatDate(createdDate)}
                </Text>
            </View>
        </View>
    );
});
