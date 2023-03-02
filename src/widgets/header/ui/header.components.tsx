import React, { FC, Fragment, HTMLAttributes } from 'react';
import { HeaderStyles } from '@widgets/header/ui/header.styles';
import { Button, Container, Input, Icons } from '@shared/ui';
import { Logo } from '@shared/ui/branding/logo';
import { Avatar } from '@features/avatar-user';
import { useMessengerSidebar } from '@widgets/messenger-sidebar/model/messenger-sidebar';
import { shallow } from 'zustand/shallow';
import { useMenuSidebar } from '@widgets/menu-sidebar/model/menu-sidebar';
import { useNotificationsSidebar } from '@widgets/notifications-sidebar/model/notifications-sidebar';
import { NotificationsSidebarItems } from '@widgets/notifications-sidebar/ui/notifications-sidebar.items';

export namespace HeaderComponents {
  export const Wrapper: FC<HTMLAttributes<HTMLDivElement>> = ({ children }) => {
    return (
      <Container>
        <HeaderStyles.Wrapper align={'center'}>{children}</HeaderStyles.Wrapper>
      </Container>
    );
  };
  export const Branding: FC<HTMLAttributes<HTMLDivElement>> = () => {
    return (
      <HeaderStyles.Branding>
        <Logo height={42} type={'mark'} color={'black'} href />
      </HeaderStyles.Branding>
    );
  };
  export const Search: FC<HTMLAttributes<HTMLDivElement>> = () => {
    return (
      <HeaderStyles.Center>
        <Input
          height={40}
          style={{ width: '340px' }}
          placeholder={'Искать по сайту..'}
          badge={{ self: '/', position: 'right' }}
          icon={{
            self: (
              <Icons.MagnifierSearch
                width={18}
                height={18}
                fill={'var(--black60)'}
              />
            ),
            position: 'left',
          }}
        />
      </HeaderStyles.Center>
    );
  };
  export const Menu: FC<HTMLAttributes<HTMLDivElement>> = ({ children }) => {
    const { messengerSidebar, openMessengerSidebar } = useMessengerSidebar(
      (state) => state,
      shallow,
    );
    const { menuSidebar, openMenuSidebar } = useMenuSidebar(
      (state) => state,
      shallow,
    );
    const { notificationsSidebar, openNotificationsSidebar } =
      useNotificationsSidebar((state) => state, shallow);
    const login = true;

    return (
      <Fragment>
        {children}

        <HeaderStyles.Menu>
          {login ? (
            <Fragment>
              <HeaderStyles.MessengerButton
                variant={'cleared'}
                size={'M'}
                onClick={() => openMessengerSidebar(!messengerSidebar)}
              >
                <Icons.ChatConversation width={26} height={26} />
              </HeaderStyles.MessengerButton>

              <HeaderStyles.NotificationsButton
                variant={'cleared'}
                size={'M'}
                onClick={() => openNotificationsSidebar(!notificationsSidebar)}
              >
                {NotificationsSidebarItems.Items.length != 0 && (
                  <HeaderStyles.NotificationsBadge size={20}>
                    {NotificationsSidebarItems.Items.length <= 9
                      ? NotificationsSidebarItems.Items.length
                      : '9+'}
                  </HeaderStyles.NotificationsBadge>
                )}
                <Icons.Flash
                  width={26}
                  height={26}
                  style={{ position: 'relative', zIndex: 1 }}
                />
              </HeaderStyles.NotificationsButton>

              <Avatar
                large={40}
                premium={{ size: 16, type: 'plus' }}
                src={'https://skin.vimeworld.com/head/Orphans/40.png'}
              />
            </Fragment>
          ) : (
            <Button variant={'main'} appearance={'accent'} size={'M'}>
              Войти в свой аккаунт
            </Button>
          )}

          <HeaderStyles.MenuButton
            variant={'bordered'}
            appearance={'neutral'}
            size={'M'}
            onClick={() => openMenuSidebar(!menuSidebar)}
          >
            ·
          </HeaderStyles.MenuButton>
        </HeaderStyles.Menu>
      </Fragment>
    );
  };
}
