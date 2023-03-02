import { LogoTypes } from '@shared/ui/branding/logo/logo.types';
import { FC, Fragment } from 'react';
import { LogoComponents } from '@shared/ui/branding/logo/logo.components';
import { LogoStyles } from './logo.styles';
import { RouterPaths } from '@shared/lib/helpers/paths';

export const Logo: FC<LogoTypes> = ({ href, type, width, height }) => {
  return (
    <Fragment>
      {href ? (
        <LogoStyles.Element to={RouterPaths.HOME_PAGE}>
          {type == 'mark' ? (
            <LogoComponents.Mark width={width} height={height} />
          ) : (
            <LogoComponents.Full width={width} height={height} />
          )}
        </LogoStyles.Element>
      ) : (
        <Fragment>
          {type == 'mark' ? (
            <LogoComponents.Mark width={width} height={height} />
          ) : (
            <LogoComponents.Full width={width} height={height} />
          )}
        </Fragment>
      )}
    </Fragment>
  );
};
