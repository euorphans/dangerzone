import styled from 'styled-components';
import { CommonButtonTypes } from '@shared/ui/blocks/button/button.types';

export namespace ButtonStyles {
  export const Main = styled.button<CommonButtonTypes>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: ${(props) => (props.align ? props.align : 'center')};
    background: ${(props) =>
      props.appearance == 'accent'
        ? 'var(--black100)'
        : props.appearance == 'positive'
        ? 'var(--green)'
        : props.appearance == 'negative'
        ? 'var(--red)'
        : props.appearance == 'neutral'
        ? 'var(--black04)'
        : 'var(--black0)'};
    color: ${(props) =>
      props.appearance == 'accent'
        ? 'var(--white100)'
        : props.appearance == 'positive'
        ? 'var(--white100)'
        : props.appearance == 'negative'
        ? 'var(--white100)'
        : props.appearance == 'neutral'
        ? 'var(--black100)'
        : 'var(--black100)'};
    gap: var(--space-2);
    border-radius: ${(props) =>
      props.size == 'S'
        ? 'var(--radii-2)'
        : props.size == 'M'
        ? 'var(--radii-4)'
        : props.size == 'L'
        ? 'var(--space-5)'
        : props.size == 'XL'
        ? 'var(--space-5)'
        : 'var(--radii-2)'};
    transition: var(--transition-15);
    border: 1px solid transparent;
    user-select: none;
    cursor: pointer;
    height: ${(props) =>
      props.size == 'S'
        ? '32px'
        : props.size == 'M'
        ? '40px'
        : props.size == 'L'
        ? '48px'
        : props.size == 'XL'
        ? '56px'
        : '32px'};
    line-height: 40px;
    padding: var(--space-2) 18px;
    font-size: ${(props) =>
      props.size == 'S'
        ? 'var(--fontSizes-0)'
        : props.size == 'M'
        ? 'var(--fontSizes-0)'
        : props.size == 'L'
        ? 'var(--fontSizes-1)'
        : props.size == 'XL'
        ? 'var(--fontSizes-5)'
        : '(--fontSizes-0)'};
    font-weight: var(--fontWeights-semibold);
    transform-origin: center center 0;
    min-width: ${(props) => (props.stretched ? '100%' : 'auto')};

    :disabled {
      cursor: not-allowed;
      border-color: transparent;
      opacity: 0.4;
    }

    :not(:disabled):hover {
      background: ${(props) =>
        props.appearance == 'accent'
          ? 'var(--black100)'
          : props.appearance == 'positive'
          ? 'var(--green)'
          : props.appearance == 'negative'
          ? 'var(--red)'
          : props.appearance == 'neutral'
          ? 'var(--black10)'
          : 'var(--black0)'};
    }

    :not(:disabled):active {
      scale: 0.95;
    }
  `;
  export const Secondary = styled.button<CommonButtonTypes>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: ${(props) => (props.align ? props.align : 'center')};
    background: ${(props) =>
      props.appearance == 'accent'
        ? 'var(--black04)'
        : props.appearance == 'positive'
        ? 'var(--black04)'
        : props.appearance == 'negative'
        ? 'var(--black04)'
        : props.appearance == 'neutral'
        ? 'var(--black04)'
        : 'var(--black0)'};
    color: ${(props) =>
      props.appearance == 'accent'
        ? 'var(--black100)'
        : props.appearance == 'positive'
        ? 'var(--green)'
        : props.appearance == 'negative'
        ? 'var(--red)'
        : props.appearance == 'neutral'
        ? 'var(--black100)'
        : 'var(--black100)'};
    gap: var(--space-2);
    border-radius: ${(props) =>
      props.size == 'S'
        ? 'var(--radii-2)'
        : props.size == 'M'
        ? 'var(--radii-4)'
        : props.size == 'L'
        ? 'var(--space-5)'
        : props.size == 'XL'
        ? 'var(--space-5)'
        : 'var(--radii-2)'};
    transition: var(--transition-15);
    border: 1px solid transparent;
    user-select: none;
    cursor: pointer;
    height: ${(props) =>
      props.size == 'S'
        ? '32px'
        : props.size == 'M'
        ? '40px'
        : props.size == 'L'
        ? '48px'
        : props.size == 'XL'
        ? '56px'
        : '32px'};
    line-height: 40px;
    padding: var(--space-2) 18px;
    font-size: ${(props) =>
      props.size == 'S'
        ? 'var(--fontSizes-0)'
        : props.size == 'M'
        ? 'var(--fontSizes-0)'
        : props.size == 'L'
        ? 'var(--fontSizes-1)'
        : props.size == 'XL'
        ? 'var(--fontSizes-5)'
        : '(--fontSizes-0)'};
    font-weight: var(--fontWeights-semibold);
    transform-origin: center center 0;
    min-width: ${(props) => (props.stretched ? '100%' : 'auto')};

    :disabled {
      cursor: not-allowed;
      border-color: transparent;
      opacity: 0.4;
    }

    :not(:disabled):hover {
      background: ${(props) =>
        props.appearance == 'accent'
          ? 'var(--black10)'
          : props.appearance == 'positive'
          ? 'var(--black10)'
          : props.appearance == 'negative'
          ? 'var(--black10)'
          : props.appearance == 'neutral'
          ? 'var(--black10)'
          : 'var(--black0)'};
    }

    :not(:disabled):active {
      scale: 0.95;
    }
  `;
  export const Transparent = styled.button<CommonButtonTypes>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: ${(props) => (props.align ? props.align : 'center')};
    background: transparent;
    color: ${(props) =>
      props.appearance == 'accent'
        ? 'var(--black100)'
        : props.appearance == 'positive'
        ? 'var(--green)'
        : props.appearance == 'negative'
        ? 'var(--red)'
        : props.appearance == 'neutral'
        ? 'var(--black100)'
        : 'var(--black100)'};
    gap: var(--space-2);
    border-radius: ${(props) =>
      props.size == 'S'
        ? 'var(--radii-2)'
        : props.size == 'M'
        ? 'var(--radii-4)'
        : props.size == 'L'
        ? 'var(--space-5)'
        : props.size == 'XL'
        ? 'var(--space-5)'
        : 'var(--radii-2)'};
    transition: var(--transition-15);
    border: 1px solid transparent;
    user-select: none;
    cursor: pointer;
    height: ${(props) =>
      props.size == 'S'
        ? '32px'
        : props.size == 'M'
        ? '40px'
        : props.size == 'L'
        ? '48px'
        : props.size == 'XL'
        ? '56px'
        : '32px'};
    line-height: 40px;
    padding: var(--space-2) 18px;
    font-size: ${(props) =>
      props.size == 'S'
        ? 'var(--fontSizes-0)'
        : props.size == 'M'
        ? 'var(--fontSizes-0)'
        : props.size == 'L'
        ? 'var(--fontSizes-1)'
        : props.size == 'XL'
        ? 'var(--fontSizes-5)'
        : '(--fontSizes-0)'};
    font-weight: var(--fontWeights-semibold);
    transform-origin: center center 0;
    min-width: ${(props) => (props.stretched ? '100%' : 'auto')};

    :disabled {
      cursor: not-allowed;
      border-color: transparent;
      opacity: 0.4;
    }

    :not(:disabled):hover {
      background: ${(props) =>
        props.appearance == 'accent'
          ? 'var(--black10)'
          : props.appearance == 'positive'
          ? 'var(--black10)'
          : props.appearance == 'negative'
          ? 'var(--black10)'
          : props.appearance == 'neutral'
          ? 'var(--black08)'
          : 'var(--black04)'};
    }

    :not(:disabled):active {
      scale: 0.95;
    }
  `;
  export const Bordered = styled.button<CommonButtonTypes>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: ${(props) => (props.align ? props.align : 'center')};
    background: transparent;
    color: ${(props) =>
      props.appearance == 'accent'
        ? 'var(--black100)'
        : props.appearance == 'positive'
        ? 'var(--green)'
        : props.appearance == 'negative'
        ? 'var(--red)'
        : props.appearance == 'neutral'
        ? 'var(--black100)'
        : 'var(--black100)'};
    gap: var(--space-2);
    border-radius: ${(props) =>
      props.size == 'S'
        ? 'var(--radii-2)'
        : props.size == 'M'
        ? 'var(--radii-4)'
        : props.size == 'L'
        ? 'var(--space-5)'
        : props.size == 'XL'
        ? 'var(--space-5)'
        : 'var(--radii-2)'};
    transition: var(--transition-15);
    border: 1px solid
      ${(props) =>
        props.appearance == 'accent'
          ? 'var(--black10)'
          : props.appearance == 'positive'
          ? 'var(--green)'
          : props.appearance == 'negative'
          ? 'var(--red)'
          : props.appearance == 'neutral'
          ? 'var(--black10)'
          : 'var(--black0)'};
    user-select: none;
    cursor: pointer;
    height: ${(props) =>
      props.size == 'S'
        ? '32px'
        : props.size == 'M'
        ? '40px'
        : props.size == 'L'
        ? '48px'
        : props.size == 'XL'
        ? '56px'
        : '32px'};
    line-height: 40px;
    padding: var(--space-2) 18px;
    font-size: ${(props) =>
      props.size == 'S'
        ? 'var(--fontSizes-0)'
        : props.size == 'M'
        ? 'var(--fontSizes-0)'
        : props.size == 'L'
        ? 'var(--fontSizes-1)'
        : props.size == 'XL'
        ? 'var(--fontSizes-5)'
        : '(--fontSizes-0)'};
    font-weight: var(--fontWeights-semibold);
    transform-origin: center center 0;
    min-width: ${(props) => (props.stretched ? '100%' : 'auto')};

    :disabled {
      cursor: not-allowed;
      border-color: transparent;
      opacity: 0.4;
    }

    :not(:disabled):hover {
      background: ${(props) =>
        props.appearance == 'accent'
          ? 'var(--black04)'
          : props.appearance == 'positive'
          ? 'var(--black04)'
          : props.appearance == 'negative'
          ? 'var(--black04)'
          : props.appearance == 'neutral'
          ? 'var(--black04)'
          : 'var(--black0)'};
    }

    :not(:disabled):active {
      scale: 0.95;
    }
  `;
  export const Cleared = styled.button<CommonButtonTypes>`
    display: flex;
    align-items: center;
    border: none;
    margin: 0;
    padding: 0;
    overflow: visible;
    justify-content: ${(props) => (props.align ? props.align : 'center')};
    background: transparent;
    color: ${(props) =>
      props.appearance == 'accent'
        ? 'var(--black100)'
        : props.appearance == 'positive'
        ? 'var(--green)'
        : props.appearance == 'negative'
        ? 'var(--red)'
        : props.appearance == 'neutral'
        ? 'var(--black100)'
        : 'var(--black100)'};
    line-height: normal;
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;
    -webkit-appearance: none;
    cursor: pointer;
    font-weight: var(--fontWeights-semibold);
    transform-origin: center center 0;
    min-width: ${(props) => (props.stretched ? '100%' : 'auto')};
    height: ${(props) =>
      props.size == 'S'
        ? '32px'
        : props.size == 'M'
        ? '40px'
        : props.size == 'L'
        ? '48px'
        : props.size == 'XL'
        ? '56px'
        : '32px'};
    font-size: ${(props) =>
      props.size == 'S'
        ? 'var(--fontSizes-0)'
        : props.size == 'M'
        ? 'var(--fontSizes-0)'
        : props.size == 'L'
        ? 'var(--fontSizes-1)'
        : props.size == 'XL'
        ? 'var(--fontSizes-5)'
        : '(--fontSizes-0)'};
    transition: var(--transition-15);

    :disabled {
      cursor: not-allowed;
      border-color: transparent;
      opacity: 0.4;
    }

    :not(:disabled):hover {
      background: transparent;
    }
  `;
}
