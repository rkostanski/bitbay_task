import styled from "styled-components";

const Orderbook = styled.div`
  border: 1px solid ${({ theme }) => theme.color.border};
  padding: ${({ theme }) => `${theme.spacing.base} ${theme.spacing.medium}`};
  padding-top: 0;

  @media (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
    padding: ${({ theme }) => `${theme.spacing.base} 0`};
  }
`;

const OrdersWrapper = styled.ul`
  list-style: none;
  margin: 0 auto;
`;

const Title = styled.p`
  text-align: center;
  margin: ${({ theme }) => `${theme.spacing.small} auto`};
`;

export default { Orderbook, OrdersWrapper, Title };
