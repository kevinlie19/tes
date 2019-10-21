import { AllForumObject } from './Commons';

export type ForumState = {
  forumData: AllForumObject;
};

export type ForumAction =
  | {
      type: 'FORUM_REQUESTED';
      authToken: string;
      forumData: AllForumObject;
    }
  | { type: 'FORUM_FAILED'; forumData: AllForumObject; message: string }
  | { type: 'FORUM_SUCCEED'; forumData: AllForumObject };
