import { NavigationContainerComponent } from 'react-navigation';

export type SignInState = {
  isProcessing: boolean;
  errorMessage: string;
};

export type SignInAction =
  | {
      type: 'SIGNIN_REQUESTED';
      email: string;
      password: string;
      _navigator: NavigationContainerComponent;
    }
  | { type: 'SIGNIN_FAILED'; message: string }
  | { type: 'SIGNIN_SUCCEED' }
  | { type: 'RESET_ERROR' };
