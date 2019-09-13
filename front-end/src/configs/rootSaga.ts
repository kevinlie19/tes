import { Saga } from 'redux-saga';
import { fork } from 'redux-saga/effects';

import signinSagaWatcher from '../sagas/signinSaga';
import signupSagaWatcher from '../sagas/signupSaga';

const rootSaga: Saga = function*() {
  yield fork(signinSagaWatcher);
  yield fork(signupSagaWatcher);
};

export default rootSaga;
