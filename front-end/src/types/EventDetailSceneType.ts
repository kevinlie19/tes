import { NavigationContainerComponent } from 'react-navigation';
import { EventObject } from './Commons';

export type EventDetailState = {
  eventDetailData: EventObject;
};

export type EventDetailAction =
  | {
      type: 'FETCH_EVENT_DETAIL_REQUESTED';
      authToken: string;
      _navigator: NavigationContainerComponent;
    }
  | {
      type: 'FETCH_EVENT_DETAIL_SUCCEED';
      eventDetailData: EventObject;
    }
  | {
      type: 'FETCH_EVENT_DETAIL_FAILED';
      eventDetailData: EventObject;
    };
