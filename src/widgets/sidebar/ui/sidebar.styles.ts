import styled from 'styled-components';
import {
  Dialog,
  DialogOverlay,
  DialogTrigger,
  DialogPortal,
  DialogContent,
  DialogClose,
} from '@radix-ui/react-dialog';
import { motion } from 'framer-motion';
import { Flex } from '@shared/ui';

export namespace SidebarStyles {
  export const Wrapper = styled(Dialog)``;
  export const Reason = styled(DialogTrigger)``;
  export const Backdrop = styled(DialogOverlay)`
    position: fixed;
    inset: 0;
    z-index: 1000;
    backdrop-filter: blur(20px);
    background: var(--white70);
  `;
  export const Panel = styled(DialogPortal)``;
  export const In = styled.div`
    -moz-box-flex: 1;
    flex-grow: 1;
    margin: var(--space-7);
    border-radius: var(--radii-6);
    box-shadow: rgba(27, 32, 50, 0.1) 0 10px 60px;
    color: var(--black100);
    height: calc(100% - 48px);
    backdrop-filter: blur(20px);
    background: var(--white70);
  `;
  export const Out = styled(motion.div)`
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 1001;
    max-width: 408px;
    min-height: 100vh;
  `;
  export const Content = styled(DialogContent)`
    display: flex;
    padding: 28px;
    flex-direction: column;
    gap: var(--space-7);
    height: calc(100% - 54px);
  `;
  export const Close = styled(DialogClose)``;
  export const Header = styled(Flex)``;
  export const Body = styled(Flex)`
    flex-direction: column;
    justify-content: space-between;
    overflow-x: hidden;
    overflow-y: scroll;
    scrollbar-width: none;

    ::-webkit-scrollbar {
      display: none;
    }

    ::-webkit-scrollbar-track {
      display: none;
    }

    ::-webkit-scrollbar-thumb {
      display: none;
    }
  `;
}
