import styled from 'styled-components';
import { HeadlineTypes } from '@shared/ui/typography/headline/headline.types';

export namespace HeadlineStyles {
  export const Headline = styled.h4<HeadlineTypes>`
    color: ${(props) => props.paint};
    font-size: ${(props) =>
      props.level == 3
        ? 'var(--fontSizes-3)'
        : props.level == 2
        ? 'var(--fontSizes-2)'
        : 'var(--fontSizes-1)'};
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
