import styled from 'styled-components';
import { FlexTypes } from '@shared/ui/blocks/flex/flex.types';

export namespace FlexStyles {
  export const Element = styled.div<FlexTypes>`
    display: flex;
    flex-direction: ${(props) => props.direction} !important;
    justify-content: ${(props) =>
      props.justify == 'start'
        ? 'flex-start'
        : props.justify == 'center'
        ? 'center'
        : props.justify == 'space-between'
        ? 'space-between'
        : props.justify == 'end'
        ? 'flex-end'
        : 'none'} !important;
    align-items: ${(props) =>
      props.align == 'center'
        ? 'center'
        : props.align == 'start'
        ? 'flex-start'
        : props.align == 'end'
        ? 'flex-end'
        : 'flex-start'} !important;
    gap: ${(props) => props.gap} !important;
  `;
}
