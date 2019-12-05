import { call, put, takeLatest } from 'redux-saga/effects';

import { API_HOST } from '../constants/api';
import { SignUpAction } from '../types/SignUpSceneType';
import { createNavigationHelper } from '../helpers/NavigationHelper';

export default function* signupSagaWatcher(): any {
  yield takeLatest('SIGNUP_REQUESTED', signupRequest);
}

function* signupRequest(action: SignUpAction) {
  if (action.type === 'SIGNUP_REQUESTED') {
    let { email, password, full_name, _navigator } = action;
    let url = `${API_HOST}/api/auth/sign-up`;
    let data = {
      email,
      full_name,
      password,
    };
    let response = yield call(fetch, url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    let result = yield response.json();

    if (result.success) {
      let NavigationHelper = createNavigationHelper(_navigator);
      yield put({ type: 'SIGNUP_SUCCEED' });
      NavigationHelper.navigate('SignIn');
    } else {
      yield put({ type: 'SIGNUP_FAILED', message: result.message });
    }
  }
}
