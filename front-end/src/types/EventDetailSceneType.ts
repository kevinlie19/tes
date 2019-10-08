import { NavigationContainerComponent } from 'react-navigation';
import { EventObject, TicketObject } from './Commons';

export type EventDetailState = {
  eventDetailData: EventObject;
  ticketData: TicketObject;
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
    }
  | {
      type: 'FETCH_TICKET_REQUESTED';
      authToken: string;
      ticket_type: string;
      ticket_qty: number;
      _navigator: NavigationContainerComponent;
    }
  | {
      type: 'FETCH_TICKET_SUCCEED';
      ticketData: TicketObject;
    }
  | {
      type: 'FETCH_TICKET_FAILED';
      ticketData: TicketObject;
    };
