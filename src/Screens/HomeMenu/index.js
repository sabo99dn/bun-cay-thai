import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  Animated,
  RefreshControl,
  SafeAreaView,
  Modal,
} from 'react-native';
import styles from './styles';
import {Header} from '../../Components';
import {Bag} from '../../svg/common';
import ListCategories from './ListCategories';
import ListFoods from './ListFoods';
import {Badge} from 'react-native-elements';

const data = [
  {
    title: 'BÚN CAY THÁI',
  },
  {
    title: 'MÌ TRỘN',
  },
  {
    title: 'BÚN CAY HẢI SẢN',
  },
];
const Menu = () => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const [refresh, setrefresh] = useState(false);
  const _onRefresh = () => {
    setTimeout(() => {
      setrefresh(true);
    }, 1000);
  };
  const _renderItem = (item, index) => (
    <SafeAreaView>
      <Text key={index} style={styles.category}>
        {item.title}
      </Text>
      <ListFoods />
    </SafeAreaView>
  );
  return (
    <View style={styles.container}>
      <Header
        isDefault
        containerStyle={{
          paddingTop: 10,
        }}
        leftStyle={{
          fontWeight: 'bold',
        }}
        middleComponent={
          <Text
            style={{
              textAlign: 'center',
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            MENU
          </Text>
        }
        rightComponent={
          <View>
            <Badge
              status="error"
              value="1"
              containerStyle={styles.containerStyle}
              textProps={{allowFontScaling: false}}
              badgeStyle={styles.badgeStyle}
              textStyle={{fontSize: 14, textAlign: 'center'}}
            />
            <Bag />
          </View>
        }
      />
      <View>
        <ListCategories />
      </View>

      <Animated.ScrollView
        removeClippedSubviews
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
        refreshControl={
          <RefreshControl
            style={styles.refreshing}
            onRefresh={() => _onRefresh}
            refreshing={refresh}
          />
        }>
        <View>
          <View>{data.map(_renderItem)}</View>
        </View>
      </Animated.ScrollView>

      <View style={styles.notifi}>
        <View style={styles.cotentNotifi}>
          <Text style={{color: 'white'}}>
            Có <Text>01</Text> sản phẩm trong giỏ hàng |{' '}
          </Text>
          <Text style={{fontWeight: 'bold'}}>50.000đ</Text>
        </View>
      </View>
    </View>
  );
};

export default Menu;
