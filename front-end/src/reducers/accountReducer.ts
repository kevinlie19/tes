import { MyAccountState, MyAccountAction } from '../types/MyAccountSceneType';

const initialMyAccountState: MyAccountState = {
  id: '',
  avatar: null,
  email: '',
  first_name: '',
  last_name: '',
  membership: 'Basic',
  gender: 'Other',
};

export default function accountReducer(
  accountState: MyAccountState = initialMyAccountState,
  action: MyAccountAction,
) {
  switch (action.type) {
    case 'ACCOUNT_SUCCEED': {
      return {
        ...action.accountData,
      };
    }
    case 'ACCOUNT_FAILED': {
      return {
        ...accountState,
      };
    }
    default: {
      return accountState;
    }
  }
}