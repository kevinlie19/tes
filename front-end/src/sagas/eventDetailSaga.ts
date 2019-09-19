import { call, put, takeLatest } from 'redux-saga/effects';

import { API_HOST } from '../constants/api';
import { EventDetailAction } from '../types/EventDetailSceneType';
import { createNavigationHelper } from '../helpers/NavigationHelper';
import { eventID } from '../helpers';

export default function* eventDetailSagaWatcher(): any {
  yield takeLatest('FETCH_EVENT_DETAIL_REQUESTED', fetchEventDetail);
}

function* fetchEventDetail(action: EventDetailAction) {
  if (action.type === 'FETCH_EVENT_DETAIL_REQUESTED') {
    let { authToken, _navigator } = action;
    let eventId = yield eventID.getEventID();
    let url = `${API_HOST}/api/feature/get-event/${eventId}`;
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
        type: 'FETCH_EVENT_DETAIL_SUCCEED',
        eventDetailData: data,
      });
    } else {
      let NavigationHelper = createNavigationHelper(_navigator);
      yield put({
        type: 'FETCH_EVENT_DETAIL_FAILED',
        eventDetailData: {},
      });
      NavigationHelper.navigate('Home');
    }
  }
}
