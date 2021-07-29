import styled from "styled-components";

const Order = styled.div`
  display: flex;
  justify-content: space-between;
  margin: ${({ theme }) => theme.spacing.small};
  padding: 5px ${({ theme }) => theme.spacing.small};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.background};
  align-items: center;
  text-align: center;

  span {
    flex-basis: 25%;
    flex: 1;
  }
`;

export default { Order };
