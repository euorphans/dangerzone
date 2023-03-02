import { create } from 'zustand';
import { MenuSidebarTypes } from '@widgets/menu-sidebar/model/menu-sidebar.types';

export const useMenuSidebar = create<MenuSidebarTypes>((set) => ({
  menuSidebar: false,
  openMenuSidebar: (menuSidebar) => set(() => ({ menuSidebar: menuSidebar })),
}));
