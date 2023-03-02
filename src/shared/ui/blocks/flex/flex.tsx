import { FC, HTMLAttributes } from 'react';
import { FlexStyles } from './flex.styles';
import { FlexTypes } from '@shared/ui/blocks/flex/flex.types';

export const Flex: FC<HTMLAttributes<HTMLDivElement> & FlexTypes> = ({
  children,
  ...other
}) => <FlexStyles.Element {...other}>{children}</FlexStyles.Element>;
