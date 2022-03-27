import mock from '../mock';
import firestore from '@react-native-firebase/firestore';
import API from '../../Configs/api';
const dbRef = firestore().collection('categories');

mock.onGet(API.GET_CATEGORY).reply(async () => {
  const response = await dbRef.get();
  const data = response.docs.map((i) => i.data());
  return [200, data];
});
