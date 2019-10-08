export type UserObject = {
  id: string;
  email: string;
  user_role: 'User' | 'Admin';
  first_name: string;
  last_name: string;
  avatar: string | null;
  membership: 'Basic' | 'Premium';
  gender: 'Male' | 'Female' | 'Other';
};

export type EditProfileObject = {
  first_name: string;
  last_name: string;
  avatar: string | null;
  membership: 'Basic' | 'Premium';
  gender: 'Male' | 'Female' | 'Other';
  isAvatarChanged: boolean;
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

export type TicketObject = {
  id_event: string;
  id_user: string;
  type: string;
  qty: number;
  total: number;
};

export type HomeObject = {
  user: UserObject;
  events: Array<EventObject>;
};
