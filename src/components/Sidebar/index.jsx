import styled from "styled-components";
import NavItem from "./NavItem";

const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  a {
    text-decoration: none;
    color: #d9d9d9;
  }
`;

const Sidebar = () => {
  return (
    <aside>
      <nav>
        <StyledList>
          <NavItem
            activeIcon="/icon/home-activo.svg"
            disabledIcon="/icon/home-inactivo.svg"
            active
          >
            Inicio
          </NavItem>
        </StyledList>
      </nav>
    </aside>
  );
};

export default Sidebar;
