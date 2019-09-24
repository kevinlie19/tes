export type UserObject = {
  id: string;
  email: string;
  user_role: string;
  first_name: string;
  last_name: string;
  avatar: string | null;
  membership: string;
  gender: string;
};

export type EventObject = {
  id: string;
  event_name: string;
  category: string;
  event_date: string;
  place: string;
  price: number;
  description: string;
  available_seat: number;
  image: string | null;
};

export type HomeObject = {
  user: UserObject;
  events: Array<EventObject>;
};
