import { call, put, takeLatest } from 'redux-saga/effects';

import { API_HOST } from '../constants/api';
import { ForumAction } from '../types/ForumSceneType';

export default function* forumSagaWatcher(): any {
  yield takeLatest('FORUM_REQUESTED', fetchForum);
}

function* fetchForum(action: ForumAction) {
  if (action.type === 'FORUM_REQUESTED') {
    let { authToken } = action;
    let url = `${API_HOST}/api/feature/get-forums`;
    let response = yield call(fetch, url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: authToken.slice(1, -1),
      },
    });
    let result = yield response.json();
    if (result.success) {
      let data = result.data;
      yield put({
        type: 'FORUM_SUCCEED',
        forumData: data,
      });
    } else {
      yield put({
        type: 'FORUM_FAILED',
        forumData: {},
      });
    }
  }
}
