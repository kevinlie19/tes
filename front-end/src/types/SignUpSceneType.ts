import { NavigationContainerComponent } from 'react-navigation';

export type SignUpState = {
  isProcessing: boolean;
  errorMessage: string;
};

export type SignUpAction =
  | {
      type: 'SIGNUP_REQUESTED';
      email: string;
      full_name: string;
      password: string;
      _navigator: NavigationContainerComponent;
    }
  | { type: 'SIGNUP_FAILED'; message: string }
  | { type: 'SIGNUP_SUCCEED' }
  | { type: 'RESET_ERROR' };
