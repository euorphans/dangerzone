import { FC, HTMLAttributes } from 'react';
import { AvatarStyles } from '../ui/avatar.styles';
import { AvatarTypes } from '../model/avatar.types';

export const Avatar: FC<HTMLAttributes<HTMLDivElement> & AvatarTypes> = ({
  large,
  src,
  premium,
}) => {
  return (
    <AvatarStyles.Wrapper
      variant={'cleared'}
      large={large}
      src={src}
      premium={premium}
    >
      <AvatarStyles.Element large={large} src={src} premium={premium} />
      {premium && (
        <AvatarStyles.Badge large={premium.size} type={premium.type} />
      )}
    </AvatarStyles.Wrapper>
  );
};
