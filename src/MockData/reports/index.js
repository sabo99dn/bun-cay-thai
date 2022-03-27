import mock from '../mock';
import firestore from '@react-native-firebase/firestore';
import API from '../../Configs/api';
const dbRef = firestore().collection('reports');

mock.onGet(API.GET_ALL_REPORT).reply(async request => {
  const params = request?.params;
  const page = params?.page || 1;
  const limit = params?.limit || 12;
  const user_id = params?.user_id || 0;
  const from = (page - 1) * limit;
  const to = page * limit;
  // console.log('GET REPORT USER ID', user_id, from, limit);
  const snapshot = await dbRef
    .orderBy('id')
    // .where('user_id', '==', user_id)
    .startAt(page)
    .limit(limit)
    .get();
  const data = snapshot.docs.map(doc => {
    let item = doc.data();
    item['created_date'] = item.created_date.toDate();
    return item;
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
mock.onPatch(API.UPDATE_REPORT).reply(async request => {
  const data = JSON.parse(request?.data);
  const id = data?.id || '';
  const user_id = data?.user_id || 0;
  const message = data?.message || '';
  const image = data?.image || '';

  const res = await dbRef.doc(`${id}`).set({
    image: image,
    message: message,
    created_date: firestore.FieldValue.serverTimestamp(),
    reply: '',
    id: id,
    user_id: user_id,
  });
  const result = {
    status: 200,
    data: {},
  };
  return [200, result];
});

mock.onPut(API.DELETE_REPORT).reply(async request => {
  const {id} = JSON.parse(request?.data);
  if (id) {
    try {
      const res = await dbRef.doc(`${id}`).delete();
      return [200, {status: 200, data: res}];
    } catch (err) {
      return [200, {status: 403, error: 'Unknown error'}];
    }
  }
  return [200, {status: 403, error: 'Do not exists this id'}];
});

mock.onPost(API.CREATE_REPORT).reply(async request => {
  const data = JSON.parse(request?.data);

  const id = Date.now();
  const image = data?.image || '';
  const message = data?.message || '';
  const user_id = data?.user_id || 0;

  const res = await dbRef.doc(`${id}`).set({
    image: image,
    message: message,
    created_date: firestore.FieldValue.serverTimestamp(),
    reply: '',
    id: id,
    user_id: user_id,
  });
  console.log('RESSS CRATE', res, id);
  const result = {
    status: 200,
    data: {},
  };
  return [200, result];
});
