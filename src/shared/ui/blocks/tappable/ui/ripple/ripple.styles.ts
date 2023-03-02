import styled from 'styled-components';
import { RippleTypes } from '@shared/ui/blocks/tappable/ui/ripple/ripple.types';

export namespace RippleStyles {
  export const Ripple = styled.div<RippleTypes>`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    span {
      transform: scale(0);
      border-radius: 100%;
      color: var(--color-100);
      position: absolute;
      opacity: 0.75;
      background-color: var(--${(props) => props.effect?.paint});
      animation-name: ripple;
      animation-duration: ${(props) => props.effect?.duration}ms;
    }

    @keyframes ripple {
      to {
        opacity: 0;
        transform: scale(2);
      }
    }
  `;
}
