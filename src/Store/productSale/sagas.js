import { takeLatest } from 'redux-saga/effects';
import {
  generateListSagas,
} from '../../Utils/storeMethod';
import {actions, types} from './reducer';
import * as service from './service';
const sagaListFunction = generateListSagas( actions, service );

export default function* () {
  yield takeLatest(
      types.GET_LIST,
      sagaListFunction.getList,
  );
  yield takeLatest(
      types.GET_LIST_LOAD_MORE,
      sagaListFunction.getLoadMoreList,
  );
};
