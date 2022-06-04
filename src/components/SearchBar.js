import React from "react";
import styled from "styled-components";

const SearchBar = () => {
  return (
    <StyledSection className="full-width">
      <div>
        <input placeholder="Search query ..." />
        <button class="search">search</button>
      </div>
    </StyledSection>
  );
};

export default SearchBar;

const StyledSection = styled.section`
  height: 5rem;
  padding: 1rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    border: 0.1px solid #ebf3f7;
    width: 19.2rem;
    margin: 0 auto;
  }

  input {
    height: 2rem;
    width: 15rem;
    text-indent: 1rem;
    border: 0.1px solid #bdc9c3;
  }
  .search {
    border: none;
    background-color: #31a6e0;
    height: 2rem;
    width: 4rem;
    color: white;
  }
`;
