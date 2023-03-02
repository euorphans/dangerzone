import { RouterPaths } from '@shared/lib/helpers/paths';
import { MenuSidebarItemsTypes } from '@widgets/menu-sidebar/model/menu-sidebar.types';

export namespace MenuSidebarItems {
  export const Items: MenuSidebarItemsTypes[] = [
    {
      name: 'main',
      items: [
        {
          name: 'Главная',
          href: RouterPaths.HOME_PAGE,
        },
        {
          name: 'Рейтинги',
          href: RouterPaths.HOME_PAGE,
        },
        {
          name: 'Игроки',
          href: RouterPaths.HOME_PAGE,
        },
      ],
    },
    {
      name: 'secondary',
      items: [
        {
          name: 'Правила организации',
          href: RouterPaths.HOME_PAGE,
        },
        {
          name: 'Центр поддержки',
          href: RouterPaths.HOME_PAGE,
        },
        {
          name: 'Платные подписки',
          href: RouterPaths.HOME_PAGE,
        },
      ],
    },
  ];
}
