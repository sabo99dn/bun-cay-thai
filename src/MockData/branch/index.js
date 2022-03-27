import mock from '../mock';
import firestore from '@react-native-firebase/firestore';
import API from '../../Configs/api';
const dbRef = firestore().collection('branchs');

mock.onGet(API.GET_BRANCH_LIST).reply(async request => {
  const params = request?.params;
  const page = params?.page || 1;
  const limit = params?.limit || 12;

  const from = (page - 1) * limit;
  const to = page * limit;

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
