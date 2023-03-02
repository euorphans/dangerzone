export type MenuSidebarTypes = {
  menuSidebar: boolean;
  openMenuSidebar: (open: boolean) => void;
};

export type MenuSidebarItemsTypes = {
  name: string;
  items: {
    name: string;
    href: string;
  }[];
};
