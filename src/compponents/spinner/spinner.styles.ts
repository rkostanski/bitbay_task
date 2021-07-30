import styled, { css } from "styled-components";
import { Space } from "antd";

const Spinner = styled(Space)<{ fullSize: boolean }>`
  width: 100%;
  justify-content: center;
  height: 100%;

  ${({ fullSize }) =>
    fullSize &&
    css`
      height: 100vh;
    `}
`;
export default { Spinner };
