import { HomeState, HomeAction } from '../types/HomeSceneType';

const initialState: HomeState = {
  homeData: {
    user: {
      id: '',
      email: '',
      user_role: 'User',
      full_name: '',
      avatar: null,
      membership: 'Basic',
      gender: 'Other',
    },
    events: [],
    forums: [],
  },
  isLoading: false,
};

export default function homeReducer(
  homeSceneState: HomeState = initialState,
  action: HomeAction,
) {
  switch (action.type) {
    case 'FETCH_HOME_REQUESTED': {
      return {
        ...homeSceneState,
        isLoading: true,
      };
    }
    case 'FETCH_HOME_SUCCEED': {
      return {
        ...homeSceneState,
        homeData: action.homeData,
        isLoading: false,
      };
    }
    case 'FETCH_HOME_FAILED': {
      return {
        ...homeSceneState,
        isLoading: false,
      };
    }
    default: {
      return homeSceneState;
    }
  }
}
