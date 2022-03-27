/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState} from 'react';
import {Text, FlatList, View} from 'react-native';
import styles from './styles';

const data = [
  {
    id: 1,
    title: 'Bún Cay Thái',
  },
  {
    id: 2,
    title: 'Mì Trộn',
  },
  {
    id: 3,
    title: 'Mì Ốc Thái',
  },
  {
    id: 4,
    title: 'Bún Cay Thái',
  },
  {
    id: 5,
    title: 'Bún Cay Thái',
  },
];
const Item = ({item, onPress}) => {
  return (
    <View style={styles.container} onPress={onPress}>
      <Text style={styles.category}>{item.title}</Text>
    </View>
  );
};
const ListCategories = () => {
  const [selectedId, setSelectedId] = useState(null);
  const renderItem = ({item}) => {
    return <Item item={item} onPress={() => setSelectedId(item.id)} />;
  };
  return (
    <FlatList
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      extraData={selectedId}
    />
  );
};

export default ListCategories;
