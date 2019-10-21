import { NavigationContainerComponent } from 'react-navigation';

export type SignUpState = {
  isProcessing: boolean;
  errorMessage: string;
};

export type SignUpAction =
  | {
      type: 'SIGNUP_REQUESTED';
      email: string;
      username: string;
      password: string;
      first_name: string;
      last_name: string;
      _navigator: NavigationContainerComponent;
    }
  | { type: 'SIGNUP_FAILED'; message: string }
  | { type: 'SIGNUP_SUCCEED' }
  | { type: 'RESET_ERROR' };
