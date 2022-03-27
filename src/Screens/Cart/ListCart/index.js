/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState} from 'react';
import {
  Image,
  FlatList,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Platform,
} from 'react-native';
import styles from './styles';
import {Delete, PlusStep, MinusStep} from '../../../svg/common';
const data = [
  {
    id: 1,
    amount: '02',
    name: 'Bún Cay Hải Sản',
    unit: 'tô',
    price: '110.000',
    request: 'Ít cay, đổi tôm thành mực.',
    extras: 'Thêm tôm (5.000đ)',
  },
  {
    id: 2,
    amount: '01',
    name: 'Bún Cay Thập Cẩm',
    unit: 'tô',
    price: '120.000',
    request: 'Lấy loại không gừng, không tỏi, đóng túi chân không.',
    extras: '',
  },
  {
    id: 3,
    amount: '03',
    name: 'Trà tắc đào',
    unit: 'ly',
    price: '12.000',
    request: 'Lấy loại không gừng, không tỏi, đóng túi chân không.',
    extras: '',
  },
];

const Item = ({item, onPress}) => {
  return (
    <View style={styles.container} onPress={onPress}>
      <View style={styles.wrapTop}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.amount}>
            <Text style={styles.txtAmount}>{item.amount}</Text>
          </View>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.name}>({item.unit})</Text>
        </View>
        <View style={styles.topRight}>
          <Text style={styles.price}>{item.price}đ</Text>
          <Delete />
        </View>
      </View>
      <View style={styles.wrapMiddle}>
        <View style={{width: '60%'}}>
          <Text style={styles.request}>{item.request}</Text>
        </View>

        <View style={styles.quantumGroup}>
          <TouchableOpacity>
            <MinusStep />
          </TouchableOpacity>
          <View style={styles.stepAmount}>
            <Text style={styles.txtStepAmount}>{item.amount}</Text>
          </View>
          <TouchableOpacity>
            <PlusStep />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.extras}>{item.extras}</Text>
    </View>
  );
};
const ListCart = () => {
  const [selectedId, setSelectedId] = useState(null);
  const renderItem = ({item}) => {
    return <Item item={item} onPress={() => setSelectedId(item.id)} />;
  };
  return (
    <SafeAreaView style={styles.wrapper}>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        removeClippedSubviews={Platform.OS === 'ios' ? true : false}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

export default ListCart;
