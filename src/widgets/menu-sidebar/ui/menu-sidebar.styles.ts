import styled from 'styled-components';
import { Button } from '@shared/ui';

export namespace MessengerStyles {
  export const Side = styled.div<{ name: string }>`
    display: flex;
    flex-direction: column;
    transition: var(--transition-15);
    gap: ${(props) =>
      props.name == 'main' ? 'var(--space-3)' : 'var(--space-1)'};

    :hover > button {
      color: var(--black40);
    }

    :hover > button:hover {
      color: var(--black100);
    }
  `;
  export const Link = styled(Button)<{ name: string }>`
    transition: var(--transition-15);
    font-size: ${(props) =>
      props.name == 'main' ? 'var(--fontSizes-7)' : 'var(--fontSizes-5)'};
    color: ${(props) =>
      props.name == 'main' ? 'var(--black100)' : 'var(--black60)'};
  `;
}
