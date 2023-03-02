import styled from 'styled-components';
import { Badge, Button, Flex } from '@shared/ui';

export namespace HeaderStyles {
  export const Wrapper = styled(Flex)`
    z-index: 100;
    inset: 0 0 auto;
    position: sticky;
    background: var(--white100);
    -moz-box-pack: center;
    align-items: center;
    height: 82px;
    display: flex;
    justify-content: space-between;
    flex-flow: row nowrap;
    width: 100%;

    @supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
      backdrop-filter: blur(20px);
      background: var(--white80);
    }
  `;
  export const Branding = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    z-index: 1;
    position: relative;
  `;
  export const Center = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    position: absolute;
    justify-content: center;
    width: 100%;
    right: 0;
    z-index: 0;
  `;
  export const Menu = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: var(--space-4);
    z-index: 1;
  `;
  export const MessengerButton = styled(Button)`
    width: 40px;
    height: 40px;
    padding: 0;
  `;
  export const NotificationsButton = styled(Button)`
    width: 40px;
    height: 40px;
    padding: 0;
    position: relative;
  `;
  export const NotificationsBadge = styled(Badge)`
    position: absolute;
    top: -6px;
    right: -8px;
    z-index: 2;
    padding: 0 6px;
    max-width: 20px;
  `;
  export const MenuButton = styled(Button)`
    line-height: 40px;
    font-size: var(--fontSizes-6);
    letter-spacing: 2px;
    transition: var(--transition-15);
    gap: 0;
    width: 56px;

    :hover {
      background: var(--black04) none repeat scroll 0 0;
      border-color: var(--black10);
      letter-spacing: 0;
    }

    ::after {
      content: '·';
      transition: var(--transition-15);
    }

    ::before {
      content: '·';
      transition: var(--transition-15);
    }
  `;
}
