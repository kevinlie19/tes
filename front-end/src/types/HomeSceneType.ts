import { NavigationContainerComponent } from 'react-navigation';
import { HomeObject } from './Commons';

export type HomeState = {
  homeData: HomeObject;
  isLoading: boolean;
};

export type HomeAction =
  | {
      type: 'FETCH_HOME_REQUESTED';
      authToken: string;
      isLoading: true;
      _navigator: NavigationContainerComponent;
    }
  | {
      type: 'FETCH_HOME_SUCCEED';
      isLoading: false;
      homeData: HomeObject;
    }
  | {
      type: 'FETCH_HOME_FAILED';
      isLoading: false;
      homeData: HomeObject;
    };
