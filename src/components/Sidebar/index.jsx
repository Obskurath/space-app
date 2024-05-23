import styled from "styled-components";

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
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Más vistas</a>
          </li>
          <li>
            <a href="#">Más Me Gusta</a>
          </li>
          <li>
            <a href="#">Nuevas</a>
          </li>
          <li>
            <a href="#">Sorprémdeme</a>
          </li>
        </StyledList>
      </nav>
    </aside>
  );
};

export default Sidebar;
