import { HeaderComponents } from '@widgets/header/ui/header.components';
import { MessengerSidebar } from '@widgets/messenger-sidebar';
import { MenuSidebar } from '@widgets/menu-sidebar';
import { NotificationsSidebar } from '@widgets/notifications-sidebar';

export const Header = () => {
  return (
    <HeaderComponents.Wrapper>
      <HeaderComponents.Branding />
      <HeaderComponents.Search />
      <HeaderComponents.Menu>
        <MessengerSidebar />
        <MenuSidebar />
        <NotificationsSidebar />
      </HeaderComponents.Menu>
    </HeaderComponents.Wrapper>
  );
};
