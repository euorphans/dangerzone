import styled from 'styled-components';

export namespace PremiumBadgeStyles {
  export const Plus = styled.span<{ large: number }>`
    width: ${(props) => props.large}px;
    height: ${(props) => props.large}px;
    background: var(--gradient);
    animation: 4s linear 0s infinite normal none running gradient;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 100%;

    @keyframes gradient {
      100% {
        background-position: 200% center;
      }
    }
  `;
}
