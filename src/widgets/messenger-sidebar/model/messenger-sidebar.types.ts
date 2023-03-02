export type MessengerSidebarTypes = {
  messengerSidebar: boolean;
  openMessengerSidebar: (open: boolean) => void;
};

export type Dialog = {
  id: string;
  messages: Message[];
  sender_username: string;
  recipient_username: string;
  send_date: string;
};

export type Message = {
  id: string;
  message: string;
  sender_username: string;
  recipient_username: string;
  send_date: string;
  change_date: string;
};
