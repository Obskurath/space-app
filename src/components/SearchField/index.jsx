import styled from "styled-components";
import search from "./search.svg";

const StyledDiv = styled.div`
  position: relative;
  display: inline-block;
`;

const StyledSearchField = styled.input`
  height: 56px;
  padding: 12px 16px;
  border-radius: 10px;
  border: 2px solid;
  border-color: #c98cf1;
  background-color: transparent;
  box-sizing: border-box;
  width: 566px;
  color: #d9d9d9;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  outline: none;
  font-family: "Amiko", sans-serif;
`;

const SearchIcon = styled.img`
  position: absolute;
  top: 10px;
  right: -75px;
  width: 38px;
  height: 38px;
`;

const SearchField = () => {
  return (
    <StyledDiv>
      <StyledSearchField
        type="text"
        placeholder="¿Qué estás buscando?"
      ></StyledSearchField>
      <SearchIcon src={search} alt="Buscar" />
    </StyledDiv>
  );
};

export default SearchField;
