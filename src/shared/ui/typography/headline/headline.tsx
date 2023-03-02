import { FC, HTMLAttributes } from 'react';
import { HeadlineTypes } from '@shared/ui/typography/headline/headline.types';
import { HeadlineStyles } from '@shared/ui/typography/headline/headline.styles';

export const Headline: FC<
  HTMLAttributes<HTMLHeadingElement> & HeadlineTypes
> = ({
  children,
  paint = 'var(--black100)',
  level = 1,
  weight = 1,
  ...other
}) => {
  return (
    <HeadlineStyles.Headline
      paint={paint}
      level={level}
      weight={weight}
      {...other}
    >
      {children}
    </HeadlineStyles.Headline>
  );
};
