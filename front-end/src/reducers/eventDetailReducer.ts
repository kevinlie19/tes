import {
  EventDetailState,
  EventDetailAction,
} from '../types/EventDetailSceneType';

const initialState: EventDetailState = {
  eventDetailData: {
    id: '',
    event_name: '',
    category: '',
    event_date: '',
    place: '',
    price: 0,
    description: '',
    available_seat: 0,
    image: null,
  },
  ticketData: {
    id_event: '',
    id_user: '',
    type: '',
    qty: 0,
    total: 0,
  },
};

export default function eventDetailReducer(
  eventDetailState: EventDetailState = initialState,
  action: EventDetailAction,
) {
  switch (action.type) {
    case 'FETCH_EVENT_DETAIL_SUCCEED': {
      return {
        ...eventDetailState,
        eventDetailData: action.eventDetailData,
      };
    }
    case 'FETCH_EVENT_DETAIL_FAILED': {
      return {
        ...eventDetailState,
      };
    }
    case 'FETCH_TICKET_SUCCEED': {
      return {
        ...eventDetailState,
        ticketData: action.ticketData,
      };
    }
    case 'FETCH_TICKET_FAILED': {
      return {
        ...eventDetailState,
      };
    }
    default: {
      return eventDetailState;
    }
  }
}
