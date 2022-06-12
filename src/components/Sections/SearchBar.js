import React from "react";
import styled from "styled-components";
import SearchInput from "../Search";

const SearchBar = () => {
  return (
    <StyledSection className="full-width">
      <SearchInput  buttonVal={"search"} inputVal={"Search query ..."}  />
    </StyledSection>
  );
};

export default SearchBar;

const StyledSection = styled.section`
  height: 5rem;
  padding: 1rem;
  margin-bottom: 2rem;
`;
