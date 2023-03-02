import { FC, HTMLAttributes } from 'react';
import { SidebarStyles } from './sidebar.styles';
import {
  DialogCloseProps,
  DialogContentProps,
  DialogOverlayProps,
  DialogPortalProps,
  DialogProps,
  DialogTriggerProps,
} from '@radix-ui/react-dialog';
import { motion } from 'framer-motion';
import { Button, Icons } from '@shared/ui';
import { FlexTypes } from '@shared/ui/blocks/flex/flex.types';

export namespace SidebarComponents {
  export const Wrapper: FC<HTMLAttributes<HTMLDivElement> & DialogProps> = ({
    children,
    ...other
  }) => {
    return <SidebarStyles.Wrapper {...other}>{children}</SidebarStyles.Wrapper>;
  };
  export const Reason: FC<
    HTMLAttributes<HTMLDivElement> & DialogTriggerProps
  > = ({ children, ...other }) => {
    return <SidebarStyles.Reason {...other}>{children}</SidebarStyles.Reason>;
  };
  export const Panel: FC<
    HTMLAttributes<HTMLDivElement> & DialogPortalProps
  > = ({ children, ...other }) => {
    return <SidebarStyles.Panel {...other}>{children}</SidebarStyles.Panel>;
  };
  export const Backdrop: FC<
    HTMLAttributes<HTMLDivElement> & DialogOverlayProps
  > = ({ children, ...other }) => {
    return (
      <SidebarStyles.Backdrop {...other}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.2 },
          }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.2,
            },
          }}
        >
          {children}
        </motion.div>
      </SidebarStyles.Backdrop>
    );
  };
  export const Close: FC<
    HTMLAttributes<HTMLDivElement> & DialogCloseProps
  > = () => {
    return (
      <SidebarStyles.Close asChild>
        <Button
          variant={'transparent'}
          size={'M'}
          style={{ width: '40px', padding: 0 }}
        >
          <Icons.Close width={24} height={24} fill={'var(--black60)'} />
        </Button>
      </SidebarStyles.Close>
    );
  };
  export const Header: FC<HTMLAttributes<HTMLDivElement>> = ({ children }) => {
    return (
      <SidebarStyles.Header
        direction={'row'}
        align={'center'}
        justify={'space-between'}
      >
        {children}
      </SidebarStyles.Header>
    );
  };
  export const Body: FC<HTMLAttributes<HTMLDivElement> & FlexTypes> = ({
    children,
    direction,
    justify,
    align,
    gap,
    ...other
  }) => {
    return (
      <SidebarStyles.Body
        direction={direction}
        align={align}
        justify={justify}
        gap={gap}
        {...other}
      >
        {children}
      </SidebarStyles.Body>
    );
  };
  export const Content: FC<
    HTMLAttributes<HTMLDivElement> & DialogContentProps
  > = ({ children, ...other }) => {
    return (
      <SidebarStyles.Out
        initial={{ x: 60 }}
        animate={{
          x: 0,
          transition: { duration: 0.2 },
        }}
        exit={{
          x: 60,
          transition: {
            duration: 0.2,
          },
        }}
      >
        <SidebarStyles.In>
          <SidebarStyles.Content {...other}>{children}</SidebarStyles.Content>
        </SidebarStyles.In>
      </SidebarStyles.Out>
    );
  };
}
