import { NavigationContainerComponent } from 'react-navigation';

export type WelcomeState = {
  isProcessing: boolean;
  errorMessage: string;
};

export type WelcomeAction =
  | {
      type: 'SIGNINGOOGLE_REQUESTED';
      id: string;
      email: string;
      password: string;
      first_name: string;
      last_name: string;
      avatar: string;
      _navigator: NavigationContainerComponent;
    }
  | { type: 'SIGNINGOOGLE_FAILED'; message: string }
  | { type: 'SIGNINGOOGLE_SUCCEED' };
