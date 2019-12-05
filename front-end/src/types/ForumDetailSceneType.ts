import { ForumObject, CommentObject } from './Commons';

export type ForumDetailState = {
  forumDetailData: ForumObject;
  commentData: Array<CommentObject>;
};

export type ForumDetailAction =
  | {
      type: 'FORUM_DETAIL_LIKE_REQUESTED';
      authToken: string;
      detailId: number;
    }
  | {
      type: 'COMMENT_LIKE_REQUESTED';
      authToken: string;
      detailId: number;
    }
  | {
      type: 'FORUM_DETAIL_REQUESTED';
      authToken: string;
      detailId: number;
      forumDetailData: ForumObject;
    }
  | {
      type: 'FORUM_DETAIL_FAILED';
      forumDetailData: ForumObject;
      message: string;
    }
  | { type: 'FORUM_DETAIL_SUCCEED'; forumDetailData: ForumObject }
  | {
      type: 'GET_COMMENT_REQUESTED';
      authToken: string;
      detailId: number;
      commentData: Array<CommentObject>;
    }
  | {
      type: 'GET_COMMENT_FAILED';
      commentData: Array<CommentObject>;
      message: string;
    }
  | { type: 'GET_COMMENT_SUCCEED'; commentData: Array<CommentObject> }
  | {
      type: 'POST_COMMENT_REQUESTED';
      authToken: string;
      detailId: number;
      comment: string;
      commentData: Array<CommentObject>;
    }
  | {
      type: 'POST_COMMENT_FAILED';
      commentData: Array<CommentObject>;
      message: string;
    }
  | { type: 'POST_COMMENT_SUCCEED'; commentData: Array<CommentObject> };
