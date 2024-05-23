import styled from "styled-components";
import SearchField from "../SearchField/SearchField";

const StyledHeader = styled.header`
  padding: 60px 0;
  display: flex;
  justify-content: space-between;
  img {
    width: 200px;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <img src="img/logo-blanco.svg" alt="Logo" />
      <SearchField placeholder="Search for a country..." />
    </StyledHeader>
  );
};

export default Header;
