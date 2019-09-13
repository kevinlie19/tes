import { WelcomeState } from './WelcomeSceneType';
import { SignInState } from './SignInSceneType';
import { SignUpState } from './SignUpSceneType';
import { MyAccountState } from './MyAccountSceneType';

export type RootState = {
  signinGoogleState: WelcomeState;
  signinState: SignInState;
  signupState: SignUpState;
  accountState: MyAccountState;
};
