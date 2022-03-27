/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {TouchableOpacity, Alert, View, Image} from 'react-native';

import styles from './styles';
import {ListItem} from 'react-native-elements';
import {useTranslation} from 'react-i18next';
import FastImage from 'react-native-fast-image';
import {useNavigation} from '@react-navigation/native';
const ListItems = ({item}) => {
  const {i18n} = useTranslation();
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => item.onPress(navigation)}>
      <ListItem containerStyle={styles.items}>
        {item?.icon}
        <ListItem.Content>
          <ListItem.Title>{i18n.t(item.it18n)}</ListItem.Title>
        </ListItem.Content>
      </ListItem>
    </TouchableOpacity>
  );
};

export default ListItems;
