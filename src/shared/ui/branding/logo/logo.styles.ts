import styled from 'styled-components';
import { Link } from 'react-router-dom';

export namespace LogoStyles {
  export const Element = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: var(--transition-15);
  `;
}
