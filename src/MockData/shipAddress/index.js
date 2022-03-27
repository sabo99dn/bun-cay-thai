import mock from '../mock';
import firestore from '@react-native-firebase/firestore';
import API from '../../Configs/api';
const dbRef = firestore().collection('ship_address');
const dbUserRef = firestore().collection('users');

mock.onGet(API.GET_ALL_ADDRESS).reply(async request => {
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
mock.onPatch(API.UPDATE_ADDRESS).reply(async request => {
  const data = JSON.parse(request?.data);

  const id = data?.id || 0;

  const user_id = data?.user_id || 0;

  const address_name = data?.address_name || '';

  const city = data?.city || '';

  const district = data?.district || '';

  const ward = data?.ward || '';

  const street_address = data?.street_address || '';

  const full_address = data?.full_address || '';

  const receiver_name = data?.receiver_name || 0;

  const res = await dbRef.doc(`${id}`).update({
    id,
    user_id,
    address_name,
    city,
    district,
    ward,
    street_address,
    receiver_name,
    full_address,
  });
  const result = {
    status: 200,
    data: {
      id,
      user_id,
      address_name,
      city,
      district,
      ward,
      street_address,
      receiver_name,
      full_address,
    },
  };
  return [200, result];
});

mock.onPut(API.UPDATE_DEFAULT_ADDRESS).reply(async request => {
  const {number_phone, default_address} = JSON.parse(request?.data);
  if (number_phone) {
    try {
      const res = await dbUserRef
        .doc(`${number_phone}`)
        .update({default_address: default_address});
      return [200, {status: 200, data: res}];
    } catch (err) {
      return [200, {status: 403, error: 'Unknown error'}];
    }
  }
  return [200, {status: 403, error: 'Do not exists this id'}];
});

mock.onPost(API.CREATE_ADDRESS).reply(async request => {
  const data = JSON.parse(request?.data);
  const id = data?.id || Date.now();
  const user_id = data?.user_id || 0;

  const address_name = data?.address_name || '';

  const city = data?.city || '';

  const district = data?.district || '';

  const ward = data?.ward || '';

  const street_address = data?.street_address || '';

  const full_address = data?.full_address || '';

  const receiver_name = data?.receiver_name || 0;

  const number_phone = data?.number_phone || 0;

  const res = await dbRef.doc(`${id}`).set({
    id,
    user_id,
    address_name,
    city,
    district,
    ward,
    street_address,
    receiver_name,
    full_address,
    number_phone,
  });

  const result = {
    status: 200,
    data: {
      id,
      user_id,
      address_name,
      city,
      district,
      ward,
      street_address,
      receiver_name,
      full_address,
      number_phone,
    },
  };
  return [200, result];
});

mock.onPut(API.DELETE_ADDRESS).reply(async request => {
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
