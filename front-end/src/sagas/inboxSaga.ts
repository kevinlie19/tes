import { call, put, takeLatest } from 'redux-saga/effects';

import { API_HOST } from '../constants/api';
import { InboxAction } from '../types/InboxSceneType';

export default function* inboxSagaWatcher(): any {
  yield takeLatest('INBOX_REQUESTED', fetchInbox);
}

function* fetchInbox(action: InboxAction) {
  if (action.type === 'INBOX_REQUESTED') {
    let { authToken } = action;
    let url = `${API_HOST}/api/feature/inbox`;
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
        type: 'INBOX_SUCCEED',
        inboxData: data,
      });
    } else {
      yield put({
        type: 'INBOX_FAILED',
        inboxData: {},
      });
    }
  }
}
