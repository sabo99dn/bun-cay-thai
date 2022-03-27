import mock from '../mock';
import firestore from '@react-native-firebase/firestore';
import city from '../common/location/city.json';
import districtList from '../common/location/district';
import wardList from '../common/location/ward';
import {PUT_CHANGE_AVATAR} from '../../Configs/api';
import API from '../../Configs/api';

const dbRef = firestore().collection('users');

mock.onPost(API.POST_AUTH_SIGN_IN).reply(async request => {
  const {number_phone, password} = JSON.parse(request.data);
  const query = await dbRef
    .where('number_phone', '==', number_phone)
    .where('password', '==', password)
    .get();
  let user = null;
  let id = null;
  for (const doc of query.docs) {
    user = await doc.data();
    id = doc.id;
  }
  let error = 'Something went wrong';
  if (user) {
    try {
      const userData = Object.assign({}, user, {providerId: 'jwt'});
      const city_address = city[userData.city]['name_with_type'];
      const district = districtList[userData.city];
      const district_address = district[userData.district]['name_with_type'];
      const ward = wardList[userData.district];
      const ward_address = ward[userData.ward]['name_with_type'];
      const response = {
        status: 200,
        userData: {...userData, city_address, district_address, ward_address},
        accessToken: id,
      };
      return [200, response];
    } catch (e) {
      error = e;
    }
  } else {
    error = 'Email Or Password Invalid';
  }
  return [200, {status: 401, error}];
});

mock.onPost(API.POST_AUTH_SIGN_UP).reply(async request => {
  const {
    full_name,
    number_phone,
    email,
    password,
    city,
    district,
    ward,
    street_address,
    default_address,
  } = JSON.parse(request.data);

  const query = await dbRef.where('number_phone', '==', number_phone).get();
  const newId = Date.now();
  let user = null;
  let codeError = '';
  if (query.docs !== undefined) {
    for (const doc of query.docs) {
      user = await doc.data();
      codeError = 'PhoneExist';
    }
  }

  if (user === null) {
    const queryEmail = await dbRef.where('email', '==', email).get();
    if (queryEmail.docs !== undefined) {
      for (const doc of queryEmail.docs) {
        user = await doc.data();
        codeError = 'EmailExist';
      }
    }
  }

  if (user) {
    return [200, {status: 402, codeError: codeError}];
  } else {
    const result = await dbRef.doc(number_phone).set({
      full_name: full_name,
      number_phone: number_phone,
      email: email,
      password: password,
      city: city,
      district: district,
      ward: ward,
      street_address: street_address,
      default_address: default_address,
      id: newId,
    });
    return [200, {status: 200, data: {...result, id: newId}}];
  }
  return [500, {status: 500, error}];
});

mock.onPost(API.POST_AUTH_RESET_PASSWORD).reply(async request => {
  const {email} = JSON.parse(request.data);
  const query = await dbRef.where('email', '==', email).get();
  let user = null;
  if (query.docs !== undefined) {
    for (const doc of query.docs) {
      user = await doc.data();
    }
  }

  if (user) {
    return [200, {status: 200, error: 'Email exist'}];
  } else {
    return [200, {status: 402, error: "Email dont't exist"}];
  }

  return [200, {status: 200}];
});

mock.onPost(API.POST_AUTH_UPDATE_PASSWORD).reply(async request => {
  const {email, password_temp, password_new} = JSON.parse(request.data);
  console.log(request.data);
  const query = await dbRef
    .where('email', '==', email)
    .where('password', '==', password_temp)
    .get();

  let user = null;
  let id = null;
  if (query.docs !== undefined) {
    for (const doc of query.docs) {
      user = await doc.data();
      id = doc.id;
    }
  }

  if (user) {
    const queryUpdate = await dbRef.doc(id).update({
      password: password_new,
    });
    return [200, {status: 200, info: 'UpdateSuccess'}];
  } else {
    return [200, {status: 402, error: 'PasswordWrong'}];
  }

  return [200, {status: 200}];
});

mock.onPost(API.GET_USER_INFO).reply(async request => {
  const {id} = JSON.parse(request.data);

  const query = await dbRef.doc(id).get();
  let user = null;
  let codeError = '';
  if (query.docs !== undefined) {
    for (const doc of query.docs) {
      user = await doc.data();
      codeError = 'PhoneExist';
    }
  }

  if (user === null) {
    const queryEmail = await dbRef.where('email', '==', email).get();
    if (queryEmail.docs !== undefined) {
      for (const doc of queryEmail.docs) {
        user = await doc.data();
        codeError = 'EmailExist';
      }
    }
  }

  if (user) {
    return [200, {status: 402, codeError: codeError}];
  } else {
    const result = await dbRef.doc(number_phone).set({
      full_name: full_name,
      number_phone: number_phone,
      email: email,
      password: password,
      city: city,
      district: district,
      ward: ward,
      street_address: street_address,
    });
    return [200, {status: 200, data: result}];
  }
  return [500, {status: 500, error}];
});

mock.onPut(API.PUT_CHANGE_AVATAR).reply(async request => {
  const {email, new_avatar, number_phone} = JSON.parse(request.data);
  const query = await dbRef
    .where('email', '==', email)
    .where('number_phone', '==', number_phone)
    .get();

  let user = null;
  let id = null;
  if (query.docs !== undefined) {
    for (const doc of query.docs) {
      user = await doc.data();
      id = doc.id;
    }
  }

  if (user) {
    const queryUpdate = await dbRef.doc(id).update({
      avatar: new_avatar,
    });
    return [200, {status: 200, info: 'UpdateSuccess'}];
  } else {
    return [200, {status: 402, error: 'Cannot update avatar'}];
  }
});
