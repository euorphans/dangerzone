import { FC, HTMLAttributes } from 'react';
import { InputComponents } from './input.components';
import { InputTypes } from '@shared/ui';

export const Input: FC<HTMLAttributes<HTMLInputElement> & InputTypes> = ({
  icon,
  badge,
  value,
  height,
  onChange,
  type,
  name,
  ...other
}) => {
  return (
    <InputComponents.Wrapper height={height}>
      {icon && (
        <InputComponents.Icon
          height={height}
          icon={{ position: icon?.position, self: icon?.self }}
        />
      )}
      <InputComponents.Input
        value={value}
        height={height}
        type={type}
        name={name}
        onChange={onChange}
        {...other}
      />
      {badge && (
        <InputComponents.Badge
          height={height}
          badge={{ position: badge?.position, self: badge?.self }}
        />
      )}
    </InputComponents.Wrapper>
  );
};
