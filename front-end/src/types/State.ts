import { WelcomeState } from './WelcomeSceneType';
import { SignInState } from './SignInSceneType';
import { SignUpState } from './SignUpSceneType';
import { MyAccountState } from './MyAccountSceneType';
import { HomeState } from './HomeSceneType';

export type RootState = {
  signinGoogleState: WelcomeState;
  signinState: SignInState;
  signupState: SignUpState;
  homeState: HomeState;
  accountState: MyAccountState;
};
