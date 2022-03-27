import mock from '../mock';
import firestore from '@react-native-firebase/firestore';
import API from '../../Configs/api';
const dbRef = firestore().collection('page');
//GET: LIST PROMOTION POST
mock.onGet(API.GET_PAGE_DETAILS).reply(async request => {
  const keyPage = request.params?.keyPage || null;
  let snapshot = null;
  if(keyPage){
    snapshot = await dbRef
        .where("key", "==", keyPage)
        .limit(1)
        .get();
  }else{
    snapshot = await dbRef
        .orderBy('position')
        .get();
  }
  const data = snapshot.docs.map(doc => {
    let item = doc.data();
    return { id: doc.id, ...item};
  });
  const result = {
    status: 200,
    page: 0,
    hasMore: false,
    total: data?.length || 0,
    data: data,
  };

  return [200, result];
});
