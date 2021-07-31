import styled, { css, keyframes } from "styled-components";

const Order = styled.li<{ transitionDelay: number }>`
  display: flex;
  justify-content: space-between;
  margin: ${({ theme }) => theme.spacing.small} 0;
  padding: 5px ${({ theme }) => theme.spacing.small};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.background};
  align-items: center;
  text-align: center;

  ${({ transitionDelay }) =>
    transitionDelay &&
    css`
      animation-name: ${test};
      animation-duration: 1.5s;
      animation-iteration-count: 1;
      animation-delay: ${transitionDelay} ms;
    `}

  span {
    flex: 1;
    width: 25%;
    white-space: break-spaces;
    word-break: break-all;

    &:first-of-type,
    &:nth-of-type(3) {
      word-break: keep-all;
    }
  }
`;

const test = keyframes`
  0% {
    opacity: 0.2;
    top: 100px;
  }
  20% {
    opacity: 0.5;
    top: 0px;
  }
  70% {
    opacity: 1;
  }
  
`;

export default { Order };
