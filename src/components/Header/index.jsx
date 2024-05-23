import styled from "styled-components";
import SearchField from "../SearchField";

const StyledHeader = styled.header`
  padding: 60px 40px;
  display: flex;
  justify-content: space-between;
  img {
    width: 212px;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <img src="img/logo-blanco.svg" alt="Logo" />
      <SearchField />
    </StyledHeader>
  );
};

export default Header;
