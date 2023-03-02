import { ButtonTypes } from '@shared/ui/blocks/button/button.types';
import { FC, Fragment, HTMLAttributes } from 'react';
import { ButtonVariants } from '@shared/ui/blocks/button/button.variants';
import { UI_PREFIX } from '@shared/config';
import { useNavigate } from 'react-router-dom';

export const Button: FC<HTMLAttributes<HTMLButtonElement> & ButtonTypes> = ({
  children,
  variant,
  href,
  ...other
}) => {
  const Element = ButtonVariants[variant];
  const navigate = useNavigate();

  return (
    <Fragment>
      {href ? (
        <Element
          onClick={() => navigate(href?.link)}
          id={`${UI_PREFIX}_button`}
          {...other}
        >
          {children}
        </Element>
      ) : (
        <Element id={`${UI_PREFIX}_button`} {...other}>
          {children}
        </Element>
      )}
    </Fragment>
  );
};
