import { MyAccountState, MyAccountAction } from '../types/MyAccountSceneType';

const initialMyAccountState: MyAccountState = {
  accountData: {
    id: '',
    avatar: null,
    email: '',
    user_role: 'User',
    full_name: '',
    membership: 'Basic',
    gender: 'Other',
  },
  isProcessing: false,
};

export default function accountReducer(
  accountState: MyAccountState = initialMyAccountState,
  action: MyAccountAction,
) {
  switch (action.type) {
    case 'ACCOUNT_REQUESTED': {
      return { ...accountState, isProcessing: true };
    }
    case 'ACCOUNT_SUCCEED': {
      return {
        ...accountState,
        accountData: action.accountData,
        isProcessing: false,
      };
    }
    case 'ACCOUNT_FAILED': {
      return {
        ...accountState,
        isProcessing: false,
      };
    }
    case 'FETCH_EDIT_PROFILE_SUCCEED': {
      return {
        ...action.updateObject,
        accountData: action.updateObject,
        isProcessing: false,
      };
    }
    case 'FETCH_EDIT_PROFILE_FAILED': {
      return {
        ...accountState,
        isProcessing: false,
      };
    }
    default: {
      return accountState;
    }
  }
}
