/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState} from 'react';
import {
  Image,
  FlatList,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import styles from './styles';
import {PlusCircle} from '../../../svg/common';

const data = [
  {
    id: 1,
    name: 'Bún cay hải sản',
    description: 'TP: Tôm, mực, nấm bào ngư, nghêu, sò lụa...',
    price: '52.000',
    priceSale: '55.000',
    img: require('../../../assets/images/buncay.jpg'),
  },
  {
    id: 2,
    name: 'Bún cay hải sản',
    description: 'TP: Tôm, mực, nấm bào ngư, nghêu, sò lụa...',
    price: '52.000',
    priceSale: '55.000',
    img: require('../../../assets/images/buncay.jpg'),
  },
  {
    id: 3,
    name: 'Bún cay hải sản',
    description: 'TP: Tôm, mực, nấm bào ngư, nghêu, sò lụa...',
    price: '52.000',
    priceSale: '55.000',
    img: require('../../../assets/images/buncay.jpg'),
  },
  {
    id: 4,
    name: 'Bún cay hải sản',
    description: 'TP: Tôm, mực, nấm bào ngư, nghêu, sò lụa...',
    price: '52.000',
    priceSale: '55.000',
    img: require('../../../assets/images/buncay.jpg'),
  },
];

const Item = ({item, onPress}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image style={styles.img} source={item.img} />
      <View style={styles.content}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.descrip}>{item.description}</Text>
        <View style={styles.footerList}>
          <View style={styles.priceWrap}>
            <Text style={styles.price}>{item.price}</Text>
            <Text style={styles.priceOr}>|</Text>
            <Text style={styles.pricesale}>{item.priceSale}</Text>
          </View>
          <TouchableOpacity>
            <PlusCircle />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const ListItem = () => {
  const [selectedId, setSelectedId] = useState(null);
  const renderItem = ({item}) => {
    return <Item item={item} onPress={() => setSelectedId(item.id)} />;
  };
  return (
    <SafeAreaView style={styles.wrapper}>
      <FlatList
        data={data}
        showsHorizontalScrollIndicator={false}
        removeClippedSubviews={Platform.OS === 'ios' ? true : false}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

export default ListItem;
