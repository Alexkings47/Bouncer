import React from "react";
import styled from "styled-components";

const Button = ({ value, classChosen }) => {
  return <StyledButton className={classChosen}>{value}</StyledButton>;
};

export default Button;

const StyledButton = styled.button`
  color: white;
  border-bottom: 2px solid;
  text-transform: uppercase;
  padding: 0 0 3px 0;
  display: block;

  &:hover,
  &:active {
    transform: scale(1.1);
  }
   
`;
