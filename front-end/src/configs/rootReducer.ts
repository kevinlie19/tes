import { combineReducers } from 'redux';
import welcomeReducer from '../reducers/welcomeReducer';
import signinReducer from '../reducers/signinReducer';
import signupReducer from '../reducers/signupReducer';
import homeReducer from '../reducers/homeReducer';
import accountReducer from '../reducers/accountReducer';

export default combineReducers({
  signinGoogleState: welcomeReducer,
  signinState: signinReducer,
  signupState: signupReducer,
  homeState: homeReducer,
  accountState: accountReducer,
});
