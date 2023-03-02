import styled from 'styled-components';
import { BadgeTypes } from '@shared/ui/blocks/badge/badge.types';

export namespace BadgeStyles {
  export const Badge = styled.div<BadgeTypes>`
    height: ${(props) => props.size}px;
    font-size: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background: var(--red);
    color: var(--white100);
    border-radius: var(--radii-2);
  `;
}
