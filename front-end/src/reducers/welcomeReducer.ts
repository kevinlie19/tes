import { WelcomeState, WelcomeAction } from '../types/WelcomeSceneType';

const initialSignInState: WelcomeState = {
  isProcessing: false,
  errorMessage: '',
};
export default function signinReducer(
  signinGoogleState: WelcomeState = initialSignInState,
  action: WelcomeAction,
) {
  switch (action.type) {
    case 'SIGNINGOOGLE_REQUESTED': {
      return { ...signinGoogleState, isProcessing: true };
    }
    case 'SIGNINGOOGLE_SUCCEED': {
      return {
        ...signinGoogleState,
        isProcessing: false,
        errorMessage: '',
      };
    }
    case 'SIGNINGOOGLE_FAILED': {
      return {
        ...signinGoogleState,
        isProcessing: false,
        errorMessage: action.message,
      };
    }

    default: {
      return signinGoogleState;
    }
  }
}
