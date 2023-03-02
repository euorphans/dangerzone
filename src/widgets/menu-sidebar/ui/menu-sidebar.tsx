import { SidebarComponents } from '@widgets/sidebar';
import { AnimatePresence } from 'framer-motion';
import { Title } from '@shared/ui';
import { shallow } from 'zustand/shallow';
import { MessengerStyles } from './menu-sidebar.styles';
import { useMenuSidebar } from '@widgets/menu-sidebar/model/menu-sidebar';
import { MenuSidebarItems } from '@widgets/menu-sidebar/ui/menu-sidebar.items';

export const MenuSidebar = () => {
  const { menuSidebar, openMenuSidebar } = useMenuSidebar(
    (state) => state,
    shallow,
  );

  return (
    <SidebarComponents.Wrapper
      open={menuSidebar}
      onOpenChange={openMenuSidebar}
    >
      <AnimatePresence>
        {menuSidebar && (
          <SidebarComponents.Panel forceMount>
            <SidebarComponents.Backdrop asChild forceMount>
              <SidebarComponents.Content>
                <SidebarComponents.Header>
                  <Title level={3} weight={2}>
                    Меню
                  </Title>
                  <SidebarComponents.Close />
                </SidebarComponents.Header>
                <SidebarComponents.Body
                  direction={'column'}
                  gap={'var(--space-7)'}
                >
                  {MenuSidebarItems.Items.map((item) => (
                    <MessengerStyles.Side name={item.name} key={item.name}>
                      {item.items.map((link) => (
                        <MessengerStyles.Link
                          variant={'cleared'}
                          align={'left'}
                          name={item.name}
                          key={link.name}
                        >
                          {link.name}
                        </MessengerStyles.Link>
                      ))}
                    </MessengerStyles.Side>
                  ))}
                </SidebarComponents.Body>
              </SidebarComponents.Content>
            </SidebarComponents.Backdrop>
          </SidebarComponents.Panel>
        )}
      </AnimatePresence>
    </SidebarComponents.Wrapper>
  );
};
