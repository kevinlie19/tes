import { InboxObject } from './Commons';

export type InboxState = {
  inboxData: InboxObject;
};

export type InboxAction =
  | {
      type: 'INBOX_REQUESTED';
      authToken: string;
      inboxData: InboxObject;
    }
  | { type: 'INBOX_FAILED'; inboxData: InboxObject; message: string }
  | { type: 'INBOX_SUCCEED'; inboxData: InboxObject }
  | {
      type: 'DELETE_INBOX_REQUESTED';
      authToken: string;
      inboxId: string;
    }
  | { type: 'DELETE_INBOX_SUCCEED' }
  | { type: 'DELETE_INBOX_FAILED' };
