import mock from '../mock'
import firestore from '@react-native-firebase/firestore';
const  dbRef = firestore().collection('sliders');
import API from '../../Configs/api';

mock.onGet(API.GET_SLIDERS).reply(async (request) => {
    const response = await dbRef.get();
    let data = [];
    for( const doc of response.docs ) {
        const item = await doc.data()
        data.push({
            id: doc.id,
            ...item
        })
    }
    const result = {
        status: 200,
        page: 1,
        hasMore: false,
        total: data.length,
        data: data
    }
    return [200, result]
})
