import { call, put, takeLatest } from 'redux-saga/effects';
import { Platform } from 'react-native';

import { API_HOST } from '../constants/api';
import { MyAccountAction } from '../types/MyAccountSceneType';

export default function* myAccountSagaWatcher(): any {
  yield takeLatest('ACCOUNT_REQUESTED', fetchMyAccount);
  yield takeLatest('FETCH_EDIT_PROFILE_REQUESTED', fetchEditProfile);
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

function* fetchEditProfile(action: MyAccountAction) {
  if (action.type === 'FETCH_EDIT_PROFILE_REQUESTED') {
    let { authToken, updateObject } = action;

    let {
      full_name,
      avatar,
      membership,
      gender,
      isAvatarChanged,
    } = updateObject;
    let url = `${API_HOST}/api/feature/edit-profile`;
    let newData = new FormData();
    if (avatar) {
      let uri = Platform.OS === 'ios' ? avatar.replace('file://', '') : avatar;
      newData.append('image', {
        // @ts-ignore
        uri,
        name: 'Photo',
        type: 'image/jpg',
      });
    }
    newData.append('isAvatarChange', String(isAvatarChanged));
    newData.append('full_name', full_name);
    newData.append('membership', membership);
    newData.append('gender', gender);

    let response = yield call(fetch, url, {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
        authorization: authToken.slice(1, -1),
      },
      body: newData,
    });
    let result = yield response.json();

    if (result.success) {
      let data = result.data;
      yield put({
        type: 'FETCH_EDIT_PROFILE_SUCCEED',
        updateObject: data,
      });
    } else {
      yield put({
        type: 'FETCH_EDIT_PROFILE_FAILED',
        updateObject: {},
      });
    }
  }
}
