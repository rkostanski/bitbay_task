import styled from "styled-components";

const Orderbook = styled.div`
  background-color: white;
  border: 1px solid ${({ theme }) => theme.color.border};
  margin: ${({ theme }) => `${theme.spacing.base} ${theme.spacing.medium}`};
`;

const OrdersWrapper = styled.ul`
  list-style: none;
  margin: 0 auto;
`;

export default { Orderbook, OrdersWrapper };
