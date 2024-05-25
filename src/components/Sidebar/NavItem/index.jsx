import styled from "styled-components";

const StyledItemList = styled.li`
  font-size: 24px;
  margin-bottom: 30px;
  line-height: 28px;
  display: flex;
  align-items: center;
  gap: 16px;
  color: ${(props) => (props.$active ? "#7878e5" : "#d9d9d9")};
`;

const NavItem = ({ children, activeIcon, disabledIcon, active = false }) => {
  return (
    <StyledItemList $active={active}>
      <img src={active ? activeIcon : disabledIcon} alt="Icono" />
      {children}
    </StyledItemList>
  );
};

export default NavItem;
