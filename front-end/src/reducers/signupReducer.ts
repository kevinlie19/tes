import { SignUpState, SignUpAction } from '../types/SignUpSceneType';

const initialSignUpState: SignUpState = {
  isProcessing: false,
  errorMessage: '',
};
export default function signupReducer(
  signupState: SignUpState = initialSignUpState,
  action: SignUpAction,
) {
  switch (action.type) {
    case 'SIGNUP_REQUESTED': {
      return { ...signupState, isProcessing: true, errorMessage: '' };
    }
    case 'SIGNUP_SUCCEED': {
      return {
        ...signupState,
        isProcessing: false,
        errorMessage: '',
      };
    }
    case 'SIGNUP_FAILED': {
      return {
        ...signupState,
        isProcessing: false,
        errorMessage: action.message,
      };
    }
    case 'RESET_ERROR': {
      return {
        ...signupState,
        isProcessing: false,
        errorMessage: '',
      };
    }
    default: {
      return signupState;
    }
  }
}
