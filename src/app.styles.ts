import styled from "styled-components";
import { Row } from "antd";
import OrderbookStyles from "./components/orderbook/orderbook.styles";

const PageWrapper = styled.main`
  max-width: 1000px;
  margin: ${({ theme }) => `${theme.spacing.base} auto`};
  background-color: ${({ theme }) => theme.color.white};
`;

const PairInfoSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.color.backgroundSecondary};
  padding: ${({ theme }) => `${theme.spacing.small} ${theme.spacing.medium}`};
  border: 1px solid ${({ theme }) => theme.color.border};
  margin-bottom: 0;
`;

const MaxMinWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-direction: column;
`;

const OrderbookWrapper = styled(Row)`
  > div:first-of-type ${OrderbookStyles.Orderbook} {
    border-right: 0;
    position: relative;

    :after {
      content: "";
      position: absolute;
      top: 20px;
      right: 0;
      left: auto;
      bottom: auto;
      height: 92%;
      width: 1px;
      background-color: ${({ theme }) => theme.color.border};
    }
  }

  > div:last-of-type ${OrderbookStyles.Orderbook} {
    border-left: 0;
  }
`;

export default {
  PageWrapper,
  PairInfoSection,
  MaxMinWrapper,
  OrderbookWrapper,
};
