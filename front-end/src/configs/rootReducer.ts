import { combineReducers } from 'redux';
import welcomeReducer from '../reducers/welcomeReducer';
import signinReducer from '../reducers/signinReducer';
import signupReducer from '../reducers/signupReducer';
import homeReducer from '../reducers/homeReducer';
import eventDetailReducer from '../reducers/eventDetailReducer';
import accountReducer from '../reducers/accountReducer';
import inboxReducer from '../reducers/inboxReducer';

export default combineReducers({
  signinGoogleState: welcomeReducer,
  signinState: signinReducer,
  signupState: signupReducer,
  homeState: homeReducer,
  // forumState: forumReducer,
  eventDetailState: eventDetailReducer,
  accountState: accountReducer,
  inboxState: inboxReducer,
});
