import { Saga } from 'redux-saga';
import { fork } from 'redux-saga/effects';

import signinGoogleSagaWatcher from '../sagas/welcomeSaga';
import signinSagaWatcher from '../sagas/signinSaga';
import signupSagaWatcher from '../sagas/signupSaga';
import accountSagaWatcher from '../sagas/accountSaga';

const rootSaga: Saga = function*() {
  yield fork(signinGoogleSagaWatcher);
  yield fork(signinSagaWatcher);
  yield fork(signupSagaWatcher);
  yield fork(accountSagaWatcher);
};

export default rootSaga;
