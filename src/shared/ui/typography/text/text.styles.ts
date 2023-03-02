import styled from 'styled-components';
import { TextTypes } from '@shared/ui/typography/text/text.types';

export namespace TextStyles {
  export const Text = styled.span<TextTypes>`
    color: ${(props) => props.paint};
    font-size: var(--fontSizes-3);
    font-weight: ${(props) =>
      props.weight == 3
        ? 'var(--fontWeights-bold)'
        : props.weight == 2
        ? 'var(--fontWeights-semibold)'
        : 'var(--fontWeights-medium)'};
    margin: 0;
    line-height: 22px;
  `;
}
