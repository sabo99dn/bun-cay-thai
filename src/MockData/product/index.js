import mock from '../mock';
import firestore from '@react-native-firebase/firestore';
import API from '../../Configs/api';
const dbRef = firestore().collection('products');

mock.onGet(API.GET_PRODUCT).reply(async () => {
  const response = await dbRef.get();
  const data = response.docs.map(i => i.data());
  return [200, data];
});

mock.onGet(API.GET_PRODUCT_SALE).reply(async () => {
  const response = await dbRef.where('is_sale', '==', true).get();
  let data = [];
  for (const doc of response.docs) {
    const item = await doc.data();
    data.push({
      id: doc.id,
      ...item,
    });
  }
  const result = {
    status: 200,
    page: 1,
    hasMore: false,
    total: data.length,
    data: data,
  };
  return [200, result];
});

mock.onGet(API.GET_PRODUCT_DETAIL).reply(async request => {
  const {id} = request;
  const response = await dbRef.where('id', '==', id).get();
  const data = response.docs.map(i => i.data());
  return [200, data];
});
