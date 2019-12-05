import {
  ForumDetailState,
  ForumDetailAction,
} from '../types/ForumDetailSceneType';

const initialState: ForumDetailState = {
  forumDetailData: {
    id: '',
    id_user: '',
    forum_name: '',
    description: '',
    category: 'Umum',
    cdate: '',
    udate: '',
    image: '',
    likes: 0,
    is_liked_by_you: false,
  },
  commentData: [
    {
      id: 0,
      id_user: '',
      email: '',
      avatar: null,
      user_role: 'User',
      full_name: '',
      membership: 'Basic',
      gender: 'Other',
      comment: '',
      likes: 0,
      is_liked_by: [],
      is_liked_by_you: false,
      date: '',
    },
  ],
};

export default function forumDetailReducer(
  forumDetailState: ForumDetailState = initialState,
  action: ForumDetailAction,
) {
  switch (action.type) {
    case 'FORUM_DETAIL_SUCCEED': {
      return {
        ...forumDetailState,
        forumDetailData: action.forumDetailData,
      };
    }
    case 'FORUM_DETAIL_FAILED': {
      return {
        ...forumDetailState,
      };
    }
    case 'GET_COMMENT_SUCCEED': {
      return {
        ...forumDetailState,
        commentData: action.commentData,
      };
    }
    case 'GET_COMMENT_FAILED': {
      return {
        ...forumDetailState,
      };
    }
    default: {
      return forumDetailState;
    }
  }
}
