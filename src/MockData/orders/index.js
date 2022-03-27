import mock from '../mock';
import firestore from '@react-native-firebase/firestore';
import API from '../../Configs/api';
const dbListRef = firestore().collection('orders');
const dbDetailsRef = firestore().collection('orders_details');

mock.onGet(API.GET_ORDER_LIST).reply(async request => {
  const params = request?.params;
  const page = params?.page || 1;
  const limit = params?.limit || 12;
  const user_id = params?.user_id || 0;
  const from = (page - 1) * limit;
  const to = page * limit;
  // console.log('GET REPORT USER ID', user_id, from, limit);
  const snapshot = await dbListRef
    .orderBy('userId')
    // .where('user_id', '==', user_id)
    .startAt(page)
    .limit(limit)
    .get();
  const data = snapshot.docs.map(doc => {
    return doc.data();
  });

  const lastID = data[data?.length - 1]?.id || 0;
  const result = {
    status: 200,
    page: lastID,
    hasMore: data?.length !== 0,
    total: data?.length || 0,
    data: data,
  };
  return [200, result];
});
mock.onGet(API.GET_ORDER_DETAILS).reply(async request => {
  const params = request?.params;
  const id = params?.id || 0;

  const order = await firestore()
    .collection(`order_details`)
    .doc(`${id}`)
    .get();
  const parentData = {...order?._data};

  const orderDetails = await firestore()
    .collection(`order_details`)
    .doc(`${id}`)
    .collection('details')
    .get();

  let listProduct = orderDetails.docs?.map(item => item.data());

  const result = {
    status: 200,
    data: {
      ...parentData,
      order_details: listProduct,
    },
  };
  return [200, result];
});

mock.onPost(API.CREATE_ORDER).reply(async request => {
  const {order_code} = JSON.parse(request.data);
  console.log({order_code});
  const res = await dbListRef.doc(`${order_code}`).set({
    ...JSON.parse(request.data),
  });
  const result = {
    status: 200,
    data: {},
  };
  return [200, result];
});
