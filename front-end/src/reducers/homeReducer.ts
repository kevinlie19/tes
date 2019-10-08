import { HomeState, HomeAction } from '../types/HomeSceneType';

const initialState: HomeState = {
  homeData: {
    user: {
      id: '',
      email: '',
      user_role: 'User',
      first_name: '',
      last_name: '',
      avatar: null,
      membership: 'Basic',
      gender: 'Other',
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
      };
    }
    default: {
      return homeSceneState;
    }
  }
}
