import { SignInState } from './SignInSceneType';
import { SignUpState } from './SignUpSceneType';
import { MyAccountState } from './MyAccountSceneType';

export type RootState = {
  signinState: SignInState;
  signupState: SignUpState;
  accountState: MyAccountState;
};
