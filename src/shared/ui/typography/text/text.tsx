import { FC, HTMLAttributes } from 'react';
import { TextTypes } from '@shared/ui/typography/text/text.types';
import { TextStyles } from '@shared/ui/typography/text/text.styles';

export const Text: FC<HTMLAttributes<HTMLSpanElement> & TextTypes> = ({
  children,
  weight = 1,
  paint = 'var(--black100)',
  ...other
}) => {
  return (
    <TextStyles.Text paint={paint} weight={weight} {...other}>
      {children}
    </TextStyles.Text>
  );
};
