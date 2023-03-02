import { BadgeStyles } from './badge.styles';
import { BadgeTypes } from '@shared/ui/blocks/badge/badge.types';
import { FC, HTMLAttributes } from 'react';

export const Badge: FC<HTMLAttributes<HTMLDivElement> & BadgeTypes> = ({
  children,
  size = 8,
  ...other
}) => {
  return (
    <BadgeStyles.Badge size={size} {...other}>
      {children}
    </BadgeStyles.Badge>
  );
};
