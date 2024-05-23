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
  &::placeholder {
    color: #d9d9d9;
  }
  position: relative;
`;

const SearchIcon = styled.img`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  right: 8%;
  width: 38px !important;
  height: 38px;
  z-index: 1;
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
