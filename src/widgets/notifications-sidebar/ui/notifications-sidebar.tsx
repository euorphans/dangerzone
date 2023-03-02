import { SidebarComponents } from '@widgets/sidebar';
import { AnimatePresence } from 'framer-motion';
import { Button, Flex, Text, Title } from '@shared/ui';
import { shallow } from 'zustand/shallow';
import { useNotificationsSidebar } from '@widgets/notifications-sidebar/model/notifications-sidebar';
import { NotificationCard } from '@features/notification-card';
import { NotificationsSidebarItems } from '@widgets/notifications-sidebar/ui/notifications-sidebar.items';
import { MessengerSidebarStyles } from '@widgets/messenger-sidebar/ui/messenger-sidebar.styles';
import { MagicWand } from '@shared/static/images';

export const NotificationsSidebar = () => {
  const { notificationsSidebar, openNotificationsSidebar } =
    useNotificationsSidebar((state) => state, shallow);

  return (
    <SidebarComponents.Wrapper
      open={notificationsSidebar}
      onOpenChange={openNotificationsSidebar}
    >
      <AnimatePresence>
        {notificationsSidebar && (
          <SidebarComponents.Panel forceMount>
            <SidebarComponents.Backdrop asChild forceMount>
              <SidebarComponents.Content>
                <SidebarComponents.Header>
                  <Title level={3} weight={2}>
                    Уведомления
                  </Title>
                  <SidebarComponents.Close />
                </SidebarComponents.Header>
                <SidebarComponents.Body
                  justify={
                    NotificationsSidebarItems.Items.length ? 'start' : 'center'
                  }
                  style={{
                    height: 'calc(100% - 100px)',
                  }}
                >
                  {NotificationsSidebarItems.Items.length ? (
                    <Flex
                      direction={'column'}
                      gap={'var(--space-6)'}
                      style={{
                        width: '100%',
                      }}
                    >
                      {NotificationsSidebarItems.Items &&
                        NotificationsSidebarItems.Items.map((item) => (
                          <NotificationCard
                            key={item.id}
                            id={item.id}
                            username={item.username}
                            action={item.action}
                            message={item.message}
                            date={item.date}
                          />
                        ))}
                    </Flex>
                  ) : (
                    <Flex
                      direction={'column'}
                      align={'center'}
                      justify={'center'}
                      gap={'var(--space-3)'}
                      style={{ width: '100%' }}
                    >
                      <MessengerSidebarStyles.Emoji
                        loading={'lazy'}
                        src={MagicWand}
                      />
                      <Text paint={'var(--black60)'} weight={2}>
                        У вас пока нет уведомлений
                      </Text>
                    </Flex>
                  )}
                </SidebarComponents.Body>
                <Button
                  variant={'secondary'}
                  appearance={'accent'}
                  stretched
                  size={'L'}
                >
                  Посмотреть все
                </Button>
              </SidebarComponents.Content>
            </SidebarComponents.Backdrop>
          </SidebarComponents.Panel>
        )}
      </AnimatePresence>
    </SidebarComponents.Wrapper>
  );
};
