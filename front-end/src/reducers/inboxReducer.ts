import { InboxState, InboxAction } from '../types/InboxSceneType';

const initialState: InboxState = {
  inboxData: [
    {
      id: '',
      inbox_date: '',
      message: '',
    },
  ],
};

export default function inboxReducer(
  inboxSceneState: InboxState = initialState,
  action: InboxAction,
) {
  switch (action.type) {
    case 'INBOX_SUCCEED': {
      return {
        ...inboxSceneState,
        inboxData: action.inboxData,
      };
    }
    case 'INBOX_FAILED': {
      return {
        ...inboxSceneState,
      };
    }
    default: {
      return inboxSceneState;
    }
  }
}
