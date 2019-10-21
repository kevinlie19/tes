import { Saga } from 'redux-saga';
import { fork } from 'redux-saga/effects';

import signinGoogleSagaWatcher from '../sagas/welcomeSaga';
import signinSagaWatcher from '../sagas/signinSaga';
import signupSagaWatcher from '../sagas/signupSaga';
import homeSagaWatcher from '../sagas/homeSaga';
import eventDetailSagaWatcher from '../sagas/eventDetailSaga';
import accountSagaWatcher from '../sagas/accountSaga';
import inboxSagaWatcher from '../sagas/inboxSaga';

const rootSaga: Saga = function*() {
  yield fork(signinGoogleSagaWatcher);
  yield fork(signinSagaWatcher);
  yield fork(signupSagaWatcher);
  yield fork(homeSagaWatcher);
  yield fork(eventDetailSagaWatcher);
  yield fork(accountSagaWatcher);
  yield fork(inboxSagaWatcher);
};

export default rootSaga;
