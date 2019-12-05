import { call, put, takeLatest } from 'redux-saga/effects';

import { API_HOST } from '../constants/api';
import { EventDetailAction } from '../types/EventDetailSceneType';
import { createNavigationHelper } from '../helpers/NavigationHelper';
import { eventID } from '../helpers';

export default function* eventDetailSagaWatcher(): any {
  yield takeLatest('FETCH_EVENT_DETAIL_REQUESTED', fetchEventDetail);
  yield takeLatest('FETCH_TICKET_REQUESTED', fetchTicket);
  yield takeLatest('FETCH_GET_TICKET_REQUESTED', fetchGetTicket);
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

function* fetchTicket(action: EventDetailAction) {
  if (action.type === 'FETCH_TICKET_REQUESTED') {
    let { authToken, ticket_type, ticket_qty, _navigator } = action;
    let eventId = yield eventID.getEventID();
    let id_event = Number(eventId);
    let url = `${API_HOST}/api/feature/new-ticket`;
    let data = {
      id_event,
      type: ticket_type,
      qty: ticket_qty,
    };
    let response = yield call(fetch, url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: authToken.slice(1, -1),
      },
      body: JSON.stringify(data),
    });
    let result = yield response.json();
    if (result.success) {
      let data = result.data;
      yield put({
        type: 'FETCH_TICKET_SUCCEED',
        ticketData: data,
      });
    } else {
      let NavigationHelper = createNavigationHelper(_navigator);
      yield put({
        type: 'FETCH_TICKET_FAILED',
        ticketData: {},
      });
      NavigationHelper.navigate('Home');
    }
  }
}

function* fetchGetTicket(action: EventDetailAction) {
  if (action.type === 'FETCH_GET_TICKET_REQUESTED') {
    let { authToken, _navigator } = action;
    let url = `${API_HOST}/api/feature/get-ticket`;
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
        type: 'FETCH_GET_TICKET_SUCCEED',
        ticketData: data,
      });
    } else {
      let NavigationHelper = createNavigationHelper(_navigator);
      yield put({
        type: 'FETCH_GET_TICKET_FAILED',
        ticketData: [],
      });
      NavigationHelper.navigate('Home');
    }
  }
}
