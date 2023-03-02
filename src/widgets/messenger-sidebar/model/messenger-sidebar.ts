import { create } from 'zustand';
import { MessengerSidebarTypes } from '@widgets/messenger-sidebar/model/messenger-sidebar.types';

export const useMessengerSidebar = create<MessengerSidebarTypes>((set) => ({
  messengerSidebar: false,
  openMessengerSidebar: (messengerSidebar) =>
    set(() => ({ messengerSidebar: messengerSidebar })),
}));
