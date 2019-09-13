import { UserObject } from './Commons';

export type MyAccountState = {
  accountData: UserObject;
  isProcessing: boolean;
  errorMessage: string;
};

export type MyAccountAction =
  | { type: 'ACCOUNT_REQUESTED' }
  | { type: 'ACCOUNT_FAILED'; message: string }
  | { type: 'ACCOUNT_SUCCEED'; accountData: UserObject }
  | { type: 'ACCOUNT_TEST' }
  | { type: 'RESET_ERROR' };
