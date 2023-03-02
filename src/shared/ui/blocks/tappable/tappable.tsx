import { FC, HTMLAttributes } from 'react';
import { TappableStyles } from '@shared/ui/blocks/tappable/tappable.styles';
import { TappableTypes } from '@shared/ui/blocks/tappable/tappable.types';
import { Ripple } from '@shared/ui/blocks/tappable/ui/ripple';
import { RippleTypes } from '@shared/ui/blocks/tappable/ui/ripple/ripple.types';

export const Tappable: FC<
  HTMLAttributes<HTMLDivElement> & TappableTypes & RippleTypes
> = ({ children, effect, cursor, ...other }) => {
  return (
    <TappableStyles.Tappable cursor={cursor} {...other}>
      {children}
      {effect && (
        <Ripple effect={{ duration: effect.duration, paint: effect.paint }} />
      )}
    </TappableStyles.Tappable>
  );
};
