import { call, put, takeLatest } from 'redux-saga/effects';

import { API_HOST } from '../constants/api';
import { MyAccountAction } from '../types/MyAccountSceneType';

export default function* myAccountSagaWatcher(): any {
  yield takeLatest('ACCOUNT_REQUESTED', fetchMyAccount);
}

function* fetchMyAccount(action: MyAccountAction) {
  if (action.type === 'ACCOUNT_REQUESTED') {
    let { authToken } = action;
    let url = `${API_HOST}/api/page/profile`;
    let response = yield call(fetch, url, {
      method: 'GET',
      headers: {
        authorization: authToken.slice(1, -1),
      },
    });
    let result = yield response.json();
    if (result.success) {
      let data = result.data;
      yield put({
        type: 'ACCOUNT_SUCCEED',
        accountData: data,
      });
    } else {
      yield put({
        type: 'ACCOUNT_FAILED',
        accountData: {},
      });
    }
  }
}
