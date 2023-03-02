import { HTMLAttributes } from 'react';
import { ButtonStyles } from '@shared/ui/blocks/button/button.styles';

export const ButtonVariants = {
  main: ({ children, ...other }: HTMLAttributes<HTMLButtonElement>) => (
    <ButtonStyles.Main {...other}>{children}</ButtonStyles.Main>
  ),
  secondary: ({ children, ...other }: HTMLAttributes<HTMLButtonElement>) => (
    <ButtonStyles.Secondary {...other}>{children}</ButtonStyles.Secondary>
  ),
  transparent: ({ children, ...other }: HTMLAttributes<HTMLButtonElement>) => (
    <ButtonStyles.Transparent {...other}>{children}</ButtonStyles.Transparent>
  ),
  bordered: ({ children, ...other }: HTMLAttributes<HTMLButtonElement>) => (
    <ButtonStyles.Bordered {...other}>{children}</ButtonStyles.Bordered>
  ),
  cleared: ({ children, ...other }: HTMLAttributes<HTMLButtonElement>) => (
    <ButtonStyles.Cleared {...other}>{children}</ButtonStyles.Cleared>
  ),
};
