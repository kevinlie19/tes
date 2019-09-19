import { HomeState, HomeAction } from '../types/HomeSceneType';

const initialState: HomeState = {
  homeData: {
    user: {
      id: '',
      email: '',
      user_role: '',
      first_name: '',
      last_name: '',
      avatar: null,
      membership: '',
      gender: '',
    },
    events: [],
  },
};

export default function homeReducer(
  homeSceneState: HomeState = initialState,
  action: HomeAction,
) {
  switch (action.type) {
    case 'FETCH_HOME_SUCCEED': {
      return {
        ...homeSceneState,
        homeData: action.homeData,
      };
    }
    case 'FETCH_HOME_FAILED': {
      return {
        ...homeSceneState,
        postData: [],
      };
    }
    default: {
      return homeSceneState;
    }
  }
}
