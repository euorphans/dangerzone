import { ButtonVariants } from '@shared/ui/blocks/button/button.variants';

export type CommonButtonTypes = {
  id?: string;
  appearance?: 'accent' | 'positive' | 'negative' | 'neutral';
  size?: 'S' | 'M' | 'L' | 'XL';
  align?: 'left' | 'center' | 'right';
  disabled?: boolean;
  stretched?: boolean;
  href?: { link: string };
};

export type ButtonTypes = CommonButtonTypes & {
  variant: keyof typeof ButtonVariants;
};
