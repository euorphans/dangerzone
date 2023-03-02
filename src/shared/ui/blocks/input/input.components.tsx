import { FC, HTMLAttributes } from 'react';
import { InputStyles } from './input.styles';
import { InputTypes } from '@shared/ui';

export namespace InputComponents {
  export const Wrapper: FC<
    HTMLAttributes<HTMLButtonElement> & { height: number }
  > = ({ children, height }) => (
    <InputStyles.Wrapper height={height}>{children}</InputStyles.Wrapper>
  );

  export const Icon: FC<InputTypes> = ({ icon }) => (
    <InputStyles.Icon position={icon?.position}>{icon?.self}</InputStyles.Icon>
  );

  export const Badge: FC<InputTypes> = ({ badge }) => (
    <InputStyles.Badge position={badge?.position}>
      {badge?.self}
    </InputStyles.Badge>
  );

  export const Input: FC<InputTypes> = ({
    type,
    value,
    onChange,
    ...other
  }) => (
    <InputStyles.Input
      value={value}
      type={type}
      onChange={onChange}
      {...other}
    />
  );
}
