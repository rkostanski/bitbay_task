import styled from "styled-components";

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
  border: 1px solid gray;
  margin: ${({ theme }) => theme.spacing.small};
  background: ${({ theme }) => theme.color.backgroundSecondary};
  align-items: center;
  text-align: center;

  span {
    flex-basis: 25%;
    flex: 1;
    text-align: center;
  }
`;
export default { Header };
