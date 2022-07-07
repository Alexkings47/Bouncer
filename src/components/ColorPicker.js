import React from "react";
import styled from "styled-components";

const ColorPicker = ({ classChosen, color, handleClick }) => {
  return (
    <StyledButton
      className={classChosen}
      style={{ backgroundColor: color }}
      onClick={handleClick}
      color={color}
    ></StyledButton>
  );
};

export default ColorPicker;

const StyledButton = styled.button`
  
    margin-right: 1rem;
    border-radius: 50%;
    width: 0.8rem;
    height: 0.8rem;

  
  &:focus {
    outline: 2px solid ${(prop) => prop.color};
    outline-offset: 3px;
  }
`;
