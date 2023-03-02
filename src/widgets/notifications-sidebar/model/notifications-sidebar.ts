import { create } from 'zustand';
import { NotificationsSidebarTypes } from '@widgets/notifications-sidebar/model/notifications-sidebar.types';

export const useNotificationsSidebar = create<NotificationsSidebarTypes>(
  (set) => ({
    notificationsSidebar: false,
    openNotificationsSidebar: (notificationsSidebar) =>
      set(() => ({ notificationsSidebar: notificationsSidebar })),
  }),
);
