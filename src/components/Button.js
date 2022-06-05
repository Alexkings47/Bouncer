import React from "react";
import styled from "styled-components";

const Button = ({ value, color, align }) => {
  return <StyledButton style={{ color: color , margin:align}}>{value}</StyledButton>;
};

export default Button;

const StyledButton = styled.button`
  color: white;
  border-bottom: 2px solid;
  text-transform: uppercase;
  padding: 0 0 3px 0;
  display: block;
`;
