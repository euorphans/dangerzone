import styled from 'styled-components';
import { InputTypes } from '@shared/ui';

export namespace InputStyles {
  export const Wrapper = styled.div<InputTypes>`
    border: 1px solid transparent;
    min-height: ${(props) => props.height}px;
    padding: 0 12px 0 16px;
    transition: var(--transition-15);
    overflow: hidden;
    background: var(--black04);
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: var(--space-5);
    border-radius: var(--radii-4);
    position: relative;
    cursor: text;
    height: ${(props) => props.height}px;

    :hover {
      border-color: var(--black20);
    }

    :focus-within:not(:focus) {
      background: transparent;
      border-color: var(--black20);
    }
  `;
  export const Badge = styled.span<{ position: 'left' | 'right' | undefined }>`
    ${(props) => props.position}: 0;
    background: var(--black10);
    flex-shrink: 0;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    color: var(--black60);
    line-height: 17px;
    height: 24px;
    padding: 0 9.7px;
    cursor: default;
    border: none;
    position: relative;
    font-weight: 400;
    font-size: var(--fontSizes-0);
    display: flex;
    border-radius: var(--radii-2);
  `;
  export const Icon = styled.div<{ position: 'left' | 'right' | undefined }>`
    ${(props) => props.position}: 0;
    font-size: 1rem;
    display: flex;
    -moz-box-align: center;
    align-items: center;
    -moz-box-pack: center;
    justify-content: center;
    position: relative;
    z-index: 2;
    pointer-events: none;
  `;
  export const Input = styled.input`
    background: transparent;
    border-width: 0;
    height: 100%;
    color: var(--black80);
    outline: currentcolor none medium;
    font-size: var(--fontSizes-1);
    font-weight: var(--fontWeights-medium);
    line-height: 1.4;
    padding: 0;
    width: 100%;

    ::placeholder {
      transition: var(--transition-15);
      color: var(--black40);
    }
  `;
}
