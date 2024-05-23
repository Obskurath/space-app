import styled from "styled-components";

const StyledHeader = styled.header`
  padding: 60px 0;
  display: flex;
  justify-content: space-between;
`;

const Header = () => {
  return (
    <StyledHeader>
      <img src="img/logo-blanco" alt="" />
    </StyledHeader>
  );
};

export default Header;
