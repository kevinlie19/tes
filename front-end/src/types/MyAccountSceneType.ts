import { UserObject } from './Commons';

export type MyAccountState = UserObject;

export type MyAccountAction =
  | { type: 'ACCOUNT_REQUESTED'; authToken: string }
  | { type: 'ACCOUNT_SUCCEED'; accountData: UserObject }
  | { type: 'ACCOUNT_FAILED'; message: string };
