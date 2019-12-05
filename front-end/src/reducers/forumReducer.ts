import { ForumState, ForumAction } from '../types/ForumSceneType';

const initialState: ForumState = {
  forumData: {
    umum: [],
    jual: [],
    beli: [],
  },
  isLoading: false,
};

export default function forumReducer(
  forumSceneState: ForumState = initialState,
  action: ForumAction,
) {
  switch (action.type) {
    case 'FORUM_REQUESTED': {
      return {
        ...forumSceneState,
        isLoading: true,
      };
    }
    case 'FORUM_SUCCEED': {
      return {
        ...forumSceneState,
        forumData: action.forumData,
        isLoading: false,
      };
    }
    case 'FORUM_FAILED': {
      return {
        ...forumSceneState,
        isLoading: false,
      };
    }
    default: {
      return forumSceneState;
    }
  }
}
