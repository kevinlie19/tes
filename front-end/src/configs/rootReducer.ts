import { combineReducers } from 'redux';
import signinReducer from '../reducers/signinReducer';
import signupReducer from '../reducers/signupReducer';

export default combineReducers({
  signinState: signinReducer,
  signupState: signupReducer,
});
