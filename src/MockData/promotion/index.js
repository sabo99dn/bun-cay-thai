import mock from '../mock';
import firestore from '@react-native-firebase/firestore';
import API from '../../Configs/api';
const dbRef = firestore().collection('promotion_posts');

mock.onGet(API.GET_PROMOTION_NEWS).reply(async request => {
  const id = request?.params?.id || null;
  if (!id) {
    const response = await dbRef.orderBy('created_date').limit(10).get();
    let data = [];
    for (const doc of response.docs) {
      let item = await doc.data();
      item['created_date'] = item.created_date.toDate();
      item['start_date'] = item.start_date.toDate();
      item['end_date'] = item.end_date.toDate();
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
  } else {
    const response = await dbRef.where('id', '==', id).get();
    let data = [];
    for (const doc of response.docs) {
      let item = await doc.data();
      item['created_date'] = item.created_date.toDate();
      item['start_date'] = item.start_date.toDate();
      item['end_date'] = item.end_date.toDate();
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
  }
});
