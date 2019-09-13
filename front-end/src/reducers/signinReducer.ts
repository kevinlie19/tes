import { SignInState, SignInAction } from '../types/SignInSceneType';

const initialSignInState: SignInState = {
  isProcessing: false,
  errorMessage: '',
};
export default function signinReducer(
  signinState: SignInState = initialSignInState,
  action: SignInAction,
) {
  switch (action.type) {
    case 'SIGNIN_REQUESTED': {
      return { ...signinState, isProcessing: true };
    }
    case 'SIGNIN_SUCCEED': {
      console.log('masuk sign in reducer');
      return {
        ...signinState,
        isProcessing: false,
        errorMessage: '',
      };
    }
    case 'SIGNIN_FAILED': {
      return {
        ...signinState,
        isProcessing: false,
        errorMessage: action.message,
      };
    }
    case 'RESET_ERROR': {
      return { ...signinState, errorMessage: '' };
    }
    default: {
      return signinState;
    }
  }
}
