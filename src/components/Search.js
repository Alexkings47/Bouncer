import React from "react";
import styled from "styled-components";

const SearchInput = ({buttonVal,chosenClass,inputVal }) => {
  return (
    <StyledDiv id="search" className={`full-width ${chosenClass}`}>
      <input placeholder={inputVal}/>
      <button className="search">{buttonVal}</button>
    </StyledDiv>
  );
  
};

export default SearchInput;
const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 23rem;

  input {
    height: 2.5rem;
    width: 76%;
    text-indent: 1rem;
    border: 1px solid #ebf3f7;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    font-size: 14px;
    font-weight: 500;

    ::placeholder {
      color: grey;
      font-size: 14px;
      font-weight: 500;
    }
  }
  .search {
    border: none;
    background-color: #2e90e5;
    height: 2.5rem;
    width: 24%;
    color: white;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    font-size: 14px;
    font-weight: 600;
  }
`;
