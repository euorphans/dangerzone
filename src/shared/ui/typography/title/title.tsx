import { FC, HTMLAttributes } from 'react';
import { TitleTypes } from '@shared/ui/typography/title/title.types';
import { TitleStyles } from '@shared/ui/typography/title/title.styles';

export const Title: FC<HTMLAttributes<HTMLHeadingElement> & TitleTypes> = ({
  children,
  paint = 'var(--black100)',
  weight = 1,
  level = 1,
  ...other
}) => {
  return level == 1 ? (
    <TitleStyles.TitleH1 paint={paint} weight={weight} {...other}>
      {children}
    </TitleStyles.TitleH1>
  ) : level == 2 ? (
    <TitleStyles.TitleH2 paint={paint} weight={weight} {...other}>
      {children}
    </TitleStyles.TitleH2>
  ) : level == 3 ? (
    <TitleStyles.TitleH3 paint={paint} weight={weight} {...other}>
      {children}
    </TitleStyles.TitleH3>
  ) : (
    <TitleStyles.TitleH4 paint={paint} weight={weight} {...other}>
      {children}
    </TitleStyles.TitleH4>
  );
};
