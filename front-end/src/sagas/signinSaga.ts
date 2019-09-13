import { call, put, takeLatest } from 'redux-saga/effects';
import { API_HOST } from '../constants/api';
import { token } from '../helpers';
import { SignInAction } from '../types/SignInSceneType';
import { createNavigationHelper } from '../helpers/NavigationHelper';

export default function* signinSagaWatcher(): any {
  yield takeLatest('SIGNIN_REQUESTED', signinRequest);
}

function* signinRequest(action: SignInAction) {
  if (action.type === 'SIGNIN_REQUESTED') {
    let { email, password, _navigator } = action;
    let url = `${API_HOST}/api/auth/sign-in`;
    let data = {
      email,
      password,
    };
    let response = yield call(fetch, url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    let result = yield response.json();
    console.log('login:', result);

    if (result.success) {
      yield call(token.saveToken, JSON.stringify(result.token));
      let NavigationHelper = createNavigationHelper(_navigator);
      yield put({ type: 'SIGNIN_SUCCEED' });
      NavigationHelper.navigate('Home');
    } else {
      yield put({ type: 'SIGNIN_FAILED', message: result.message });
    }
  }
}
