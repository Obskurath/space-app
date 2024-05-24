import styled from "styled-components";

const StyledItemList = styled.li``;

const NavItem = ({ children, activeIcon, disabledIcon, active = false }) => {
  return (
    <StyledItemList>
      <img src={active ? activeIcon : disabledIcon} alt="Icono" />
      {children}
    </StyledItemList>
  );
};

export default NavItem;
