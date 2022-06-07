import React from "react";
import styled from "styled-components";

const SearchBar = () => {
  return (
    <StyledSection className="full-width">
      <div>
        <input placeholder="Search query ..." />
        <button className="search">search</button>
      </div>
    </StyledSection>
  );
};

export default SearchBar;

const StyledSection = styled.section`
  height: 5rem;
  padding: 1rem;
  margin-bottom: 2rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }

  input {
    height: 2.5rem;
    width: 16rem;
    text-indent: 1rem;
    border: 1px solid #ebf3f7;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;


    ::placeholder {
      color: grey;
      font-size: 10px;
    }
  }
  .search {
    border: none;
    background-color: #31a6e0;
    height: 2.5rem;
    width: 5rem;
    color: white;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }
`;
