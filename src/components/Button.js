import React from "react";
import styled from "styled-components";

const Button = ({ value, classChosen, children, color,handleClick }) => {
  return <StyledButton className={classChosen} style={{
    backgroundColor: color
  }} onClick={handleClick}>{children} {value}</StyledButton>;
};

export default Button;

const StyledButton = styled.button`
  color: white;
  border-bottom: 2px solid;
  text-transform: uppercase;
  padding: 0 0 3px 0;
  display: block;
  font-size: 14px;

  &:hover,
  &:active {
    transform: scale(1.1);
  }
  

  
`;
