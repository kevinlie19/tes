import { NavigationContainerComponent } from 'react-navigation';
import { HomeObject } from './Commons';

export type HomeState = {
  homeData: HomeObject;
};

export type HomeAction =
  | {
      type: 'FETCH_HOME_REQUESTED';
      authToken: string;
      _navigator: NavigationContainerComponent;
    }
  | {
      type: 'FETCH_HOME_SUCCEED';
      homeData: HomeObject;
    }
  | {
      type: 'FETCH_HOME_FAILED';
      homeData: HomeObject;
    };
