import { call, put, takeLatest } from 'redux-saga/effects';
import { API_HOST } from '../constants/api';
import { token } from '../helpers';
import { WelcomeAction } from '../types/WelcomeSceneType';
import { createNavigationHelper } from '../helpers/NavigationHelper';

export default function* signinGoogleSagaWatcher(): any {
  yield takeLatest('SIGNINGOOGLE_REQUESTED', signinGoogleRequest);
}

function* signinGoogleRequest(action: WelcomeAction) {
  if (action.type === 'SIGNINGOOGLE_REQUESTED') {
    let {
      id,
      email,
      password,
      first_name,
      last_name,
      avatar,
      _navigator,
    } = action;
    let full_name = '';
    let url = `${API_HOST}/api/auth/sign-up`;
    if (last_name === 'undefined' || last_name === undefined) {
      full_name = first_name + '';
    } else {
      full_name = first_name + ' ' + last_name;
    }
    let data = {
      id,
      email,
      password,
      full_name,
      avatar,
    };
    let response = yield call(fetch, url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    let result = yield response.json();

    if (result.success) {
      yield call(token.saveToken, JSON.stringify(result.token));
      let NavigationHelper = createNavigationHelper(_navigator);
      yield put({ type: 'SIGNINGOOGLE_SUCCEED' });
      NavigationHelper.navigate('Home');
    } else {
      yield put({ type: 'SIGNINGOOGLE_FAILED', message: result.message });
    }

    if (result.message === 'Email already exist') {
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

      yield call(token.saveToken, JSON.stringify(result.token));
      let NavigationHelper = createNavigationHelper(_navigator);
      yield put({ type: 'SIGNINGOOGLE_SUCCEED' });
      NavigationHelper.navigate('Home');
    } else {
      yield put({ type: 'SIGNINGOOGLE_FAILED', message: result.message });
    }
  }
}
