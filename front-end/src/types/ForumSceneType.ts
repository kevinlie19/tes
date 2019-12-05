import { AllForumObject } from './Commons';

export type ForumState = {
  forumData: AllForumObject;
  isLoading: boolean;
};

export type ForumAction =
  | {
      type: 'FORUM_REQUESTED';
      authToken: string;
      isLoading: true;
      forumData: AllForumObject;
    }
  | {
      type: 'FORUM_FAILED';
      forumData: AllForumObject;
      isLoading: false;
      message: string;
    }
  | { type: 'FORUM_SUCCEED'; forumData: AllForumObject; isLoading: false };
