import { FC, Fragment, HTMLAttributes } from 'react';
import { PremiumBadgeTypes } from '../model/premium-badge.types';
import { Icons } from '@shared/ui';
import { PremiumBadgeStyles } from './premium-badge.styles';

export const PremiumBadge: FC<
  HTMLAttributes<SVGElement | HTMLSpanElement> & PremiumBadgeTypes
> = ({ type, large, ...other }) => {
  return (
    <Fragment>
      {type == 'default' ? (
        <Icons.Premium width={large} height={large} {...other} />
      ) : (
        <PremiumBadgeStyles.Plus large={large} {...other}>
          <Icons.Star width={large} height={large} {...other} />
        </PremiumBadgeStyles.Plus>
      )}
    </Fragment>
  );
};
