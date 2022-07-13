import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { ImFacebook, ImTwitter } from "react-icons/im";

const DetailsButtonDiv = ({ chosenClass }) => {
  return (
    <StyledDiv className={chosenClass}>
      <Button classChosen={"facebook-btn"}>
        <ImFacebook className="icons-2" />
        <span> share on facebook</span>
      </Button>
      <Button classChosen={"twitter-btn"}>
        <ImTwitter className="icons-2" />
        <span> share on twitter</span>
      </Button>
    </StyledDiv>
  );
};

export default DetailsButtonDiv;
const StyledDiv = styled.div`
  grid-column: 2/3;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 1rem;

  .facebook-btn,
  .twitter-btn {
    background-color: #385c8e;
    width: 11rem;
    padding: 0.5rem 1rem;
    font-size: 13px;
    font-weight: 600;
    text-transform: capitalize;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .twitter-btn {
    background-color: #33a0ff;
  }
`;
