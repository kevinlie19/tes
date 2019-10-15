import { WelcomeState } from './WelcomeSceneType';
import { SignInState } from './SignInSceneType';
import { SignUpState } from './SignUpSceneType';
import { HomeState } from './HomeSceneType';
// import { ForumState } from './ForumSceneType';
import { EventDetailState } from './EventDetailSceneType';
import { MyAccountState } from './MyAccountSceneType';
import { InboxState } from './InboxSceneType';

export type RootState = {
  signinGoogleState: WelcomeState;
  signinState: SignInState;
  signupState: SignUpState;
  homeState: HomeState;
  // forumState: ForumState;
  eventDetailState: EventDetailState;
  accountState: MyAccountState;
  inboxState: InboxState;
};
