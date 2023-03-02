import styled from 'styled-components';
import { TappableTypes } from '@shared/ui/blocks/tappable/tappable.types';

export namespace TappableStyles {
  export const Tappable = styled.div<TappableTypes>`
    overflow: hidden;
    outline: none;
    position: relative;
    isolation: isolate;
    cursor: ${(props) => props.cursor};
    transition: var(--transition-15);

    :active {
      background: var(--color-10) !important;
    }

    :hover {
      background: var(--color-04);
    }
  `;
}
