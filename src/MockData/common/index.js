import mock from '../mock'
import city from './location/city.json'
import districtList from './location/district'
import wardList from './location/ward'
import API from '../../Configs/api';

mock.onGet(API.GET_COMMON_GET_CITY).reply(async (request) => {
    let dataResult = Object.values(city);
    const page = request.params.page === 0 ? 1:request.params.page;
    const limit = request.params.limit;
    const from = (page - 1) * limit;
    const to = page * limit;
    const data = dataResult.slice(from,to > dataResult.length ? dataResult.length : to);
    const result = {
        status: 200,
        page: page,
        hasMore: to < dataResult.length ? true : false,
        total: dataResult.length,
        data: dataResult
    }

    return [200, result]
})

mock.onGet(API.GET_COMMON_GET_DISTRICT).reply(async (request) => {
    const district = districtList[request.params.city] !== undefined ? Object.values(districtList[request.params.city]):[];
    const result = {
        status: 200,
        data: district
    }
    return [200, result]
})

mock.onGet(API.GET_COMMON_GET_WARD).reply(async (request) => {
    const ward = wardList[request.params.ward] !== undefined ? Object.values(wardList[request.params.ward]):[];
    const result = {
        status: 200,
        data: ward
    }
    return [200, result]
})
