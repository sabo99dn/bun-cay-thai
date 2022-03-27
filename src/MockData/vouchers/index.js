import mock from '../mock';
import firestore from '@react-native-firebase/firestore';
import API from '../../Configs/api';

const dbRefVouchers = firestore().collection('vouchers');
const dbRefPromotionPosts = firestore().collection('promotion_posts');

// GET : LIST VOUCHERS
mock.onGet(API.GET_VOUCHERS_LIST).reply(async request => {
  const params = request?.params;

  const page = params?.page || 1;
  const limit = params?.limit || 12;
  const from = (page - 1) * limit;
  const to = page * limit;
  const snapshot = await dbRefVouchers
    .orderBy('id')
    .startAfter(from)
    .limit(limit)
    .get();

  const data = snapshot.docs.map(doc => {
    let item = doc.data();
    item['start_date'] = item.start_date.toDate();
    item['end_date'] = item.end_date.toDate();
    return item;
  });
  const result = {
    status: 200,
    page: page,
    hasMore: to < data?.length,
    total: data?.length || 0,
    data: data,
  };
  return [200, result];
});
