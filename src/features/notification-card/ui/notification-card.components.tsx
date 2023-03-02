import { NotificationCardStyles } from '@features/notification-card/ui/notification-card.styles';
import { FC, HTMLAttributes } from 'react';

export namespace NotificationCardComponents {
  export const Wrapper: FC<HTMLAttributes<HTMLDivElement>> = ({ children }) => {
    return (
      <NotificationCardStyles.Wrapper
        variant={'secondary'}
        appearance={'neutral'}
        stretched
      >
        {children}
      </NotificationCardStyles.Wrapper>
    );
  };
  export const Out: FC<HTMLAttributes<HTMLDivElement>> = ({ children }) => {
    return <NotificationCardStyles.Out>{children}</NotificationCardStyles.Out>;
  };
}
