import styled from 'styled-components';
import { AvatarTypes } from '../model/avatar.types';
import { Button } from '@shared/ui';
import { PremiumBadge } from '../../premium-badge';

export namespace AvatarStyles {
  export const Element = styled.div<AvatarTypes>`
    width: ${(props) => props.large}px;
    height: ${(props) => props.large}px;
    border-radius: 100%;
    background: url(${(props) => props.src}), var(--black10);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  `;
  export const Wrapper = styled(Button)<AvatarTypes>`
    position: relative;
    min-width: ${(props) => props.large}px;
    min-height: ${(props) => props.large}px;
  `;
  export const Badge = styled(PremiumBadge)`
    position: absolute;
    bottom: 0;
    right: 0;
  `;
}
