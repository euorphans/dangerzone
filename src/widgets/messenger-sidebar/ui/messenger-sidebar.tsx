import { useMessengerSidebar } from '@widgets/messenger-sidebar/model/messenger-sidebar';
import { SidebarComponents } from '@widgets/sidebar';
import { AnimatePresence } from 'framer-motion';
import { Button, Flex, Text, Title } from '@shared/ui';
import { shallow } from 'zustand/shallow';
import React from 'react';
import { MessengerSidebarStyles } from './messenger-sidebar.styles';
import { FaceHushedFace } from '@shared/static/images';
import { MessengerSidebarItems } from '@widgets/messenger-sidebar/ui/messenger-sidebar.items';
import { Avatar } from '@features/avatar-user';

export const MessengerSidebar = () => {
  const { messengerSidebar, openMessengerSidebar } = useMessengerSidebar(
    (state) => state,
    shallow,
  );

  return (
    <SidebarComponents.Wrapper
      open={messengerSidebar}
      onOpenChange={openMessengerSidebar}
    >
      <AnimatePresence>
        {messengerSidebar && (
          <SidebarComponents.Panel forceMount>
            <SidebarComponents.Backdrop asChild forceMount>
              <SidebarComponents.Content>
                <SidebarComponents.Header>
                  <Title level={3} weight={2}>
                    Мессенджер
                  </Title>
                  <SidebarComponents.Close />
                </SidebarComponents.Header>
                <SidebarComponents.Body
                  align={'center'}
                  justify={
                    MessengerSidebarItems.Dialogs.length ? 'start' : 'center'
                  }
                  style={{
                    height: 'calc(100% - 100px)',
                  }}
                >
                  {MessengerSidebarItems.Dialogs.length ? (
                    <Flex
                      direction={'column'}
                      gap={'var(--space-6)'}
                      style={{
                        width: '100%',
                      }}
                    >
                      {MessengerSidebarItems.Dialogs.map((dialog) => (
                        <Button
                          variant={'secondary'}
                          appearance={'neutral'}
                          align={'left'}
                          stretched
                          style={{ height: 'auto' }}
                          key={dialog.id}
                        >
                          <Avatar
                            large={43}
                            src={`https://skin.vimeworld.com/head/${dialog.sender_username}/43.png`}
                          />
                          <Flex direction={'row'}></Flex>
                        </Button>
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
                        src={FaceHushedFace}
                      />
                      <Text paint={'var(--black60)'} weight={2}>
                        У вас пока нет диалогов
                      </Text>
                    </Flex>
                  )}
                </SidebarComponents.Body>
                <Button
                  variant={'main'}
                  appearance={'accent'}
                  stretched
                  size={'L'}
                >
                  Начать диалог
                </Button>
              </SidebarComponents.Content>
            </SidebarComponents.Backdrop>
          </SidebarComponents.Panel>
        )}
      </AnimatePresence>
    </SidebarComponents.Wrapper>
  );
};
