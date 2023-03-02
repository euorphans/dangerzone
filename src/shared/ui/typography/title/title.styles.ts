import styled from 'styled-components';
import { TitleTypes } from '@shared/ui/typography/title/title.types';

export namespace TitleStyles {
  export const TitleH1 = styled.h1<TitleTypes>`
    color: ${(props) => `var(--${props.paint})`};
    font-size: var(--fontSizes-8);
    font-weight: ${(props) =>
      props.weight == 3
        ? 'var(--fontWeights-bold)'
        : props.weight == 2
        ? 'var(--fontWeights-semibold)'
        : 'var(--fontWeights-medium)'};
    margin: 0;
  `;
  export const TitleH2 = styled.h2<TitleTypes>`
    color: ${(props) => `var(--${props.paint})`};
    font-size: var(--fontSizes-7);
    font-weight: ${(props) =>
      props.weight == 3
        ? 'var(--fontWeights-bold)'
        : props.weight == 2
        ? 'var(--fontWeights-semibold)'
        : 'var(--fontWeights-medium)'};
    margin: 0;
  `;
  export const TitleH3 = styled.h3<TitleTypes>`
    color: ${(props) => `var(--${props.paint})`};
    font-size: var(--fontSizes-6);
    font-weight: ${(props) =>
      props.weight == 3
        ? 'var(--fontWeights-bold)'
        : props.weight == 2
        ? 'var(--fontWeights-semibold)'
        : 'var(--fontWeights-medium)'};
    margin: 0;
  `;
  export const TitleH4 = styled.h4<TitleTypes>`
    color: ${(props) => `var(--${props.paint})`};
    font-size: 22px;
    font-weight: ${(props) =>
      props.weight == 3
        ? 'var(--fontWeights-bold)'
        : props.weight == 2
        ? 'var(--fontWeights-semibold)'
        : 'var(--fontWeights-medium)'};
    margin: 0;
  `;
}
