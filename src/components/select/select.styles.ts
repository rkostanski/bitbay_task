import styled from "styled-components";
import { Select as SelectBase } from "antd";

const Select = styled(SelectBase)`
  width: 100%;
  max-width: 150px;

  .ant-select-selector {
    background-color: transparent;
  }
`;

export default { Select };
