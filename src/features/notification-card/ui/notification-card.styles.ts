import styled from 'styled-components';
import { Button, Text } from '@shared/ui';

export namespace NotificationCardStyles {
  export const Wrapper = styled(Button)`
    height: auto;
    justify-content: flex-start;
    align-items: flex-start;
    gap: var(--space-4);
    flex-direction: row;
    border-radius: var(--radii-5);

    :active {
      scale: none !important;
    }
  `;
  export const Out = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    gap: var(--space-1);
  `;
  export const Description = styled(Text)`
    text-align: left;
    white-space: pre-wrap;
    line-height: 17px;
    font-size: var(--fontSizes-0);
  `;
}
