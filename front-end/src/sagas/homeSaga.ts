import { call, put, takeLatest } from 'redux-saga/effects';

import { API_HOST } from '../constants/api';
import { HomeAction } from '../types/HomeSceneType';
import { createNavigationHelper } from '../helpers/NavigationHelper';

export default function* homeSagaWatcher(): any {
  yield takeLatest('FETCH_HOME_REQUESTED', fetchHome);
}

function* fetchHome(action: HomeAction) {
  if (action.type === 'FETCH_HOME_REQUESTED') {
    let { authToken, _navigator } = action;
    let url = `${API_HOST}/api/page/home`;
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
        type: 'FETCH_HOME_SUCCEED',
        homeData: data,
      });
    } else {
      let NavigationHelper = createNavigationHelper(_navigator);
      yield put({
        type: 'FETCH_HOME_FAILED',
        homeData: {},
      });
      NavigationHelper.navigate('Welcome');
    }
  }
}
