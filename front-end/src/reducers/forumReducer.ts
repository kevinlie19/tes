import { ForumState, ForumAction } from '../types/ForumSceneType';

const initialState: ForumState = {
  forumData: {
    umum: [],
    jual: [],
    beli: [],
  },
};

export default function forumReducer(
  forumSceneState: ForumState = initialState,
  action: ForumAction,
) {
  switch (action.type) {
    case 'FORUM_SUCCEED': {
      return {
        ...forumSceneState,
        forumData: action.forumData,
      };
    }
    case 'FORUM_FAILED': {
      return {
        ...forumSceneState,
      };
    }
    default: {
      return forumSceneState;
    }
  }
}
