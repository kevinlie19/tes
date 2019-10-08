import { UserObject, EditProfileObject } from './Commons';

export type MyAccountState = {
  accountData: UserObject;
  isProcessing: boolean;
};

export type MyAccountAction =
  | { type: 'ACCOUNT_REQUESTED'; authToken: string; accountData: UserObject }
  | { type: 'ACCOUNT_SUCCEED'; accountData: UserObject }
  | { type: 'ACCOUNT_FAILED'; accountData: UserObject }
  | {
      type: 'FETCH_EDIT_PROFILE_REQUESTED';
      updateObject: EditProfileObject;
      authToken: string;
    }
  | {
      type: 'FETCH_EDIT_PROFILE_SUCCEED';
      updateObject: UserObject;
    }
  | {
      type: 'FETCH_EDIT_PROFILE_FAILED';
      updateObject: UserObject;
    };
