import React from "react";
import styled from "styled-components";

const SelectBar = ({ options }) => {
  return (
    <StyledSelect>
      {options.map((item, index) => {
        return (<option key={index}>{item}</option>)
      })}
    </StyledSelect>
  );
};

export default SelectBar;
const StyledSelect = styled.select``;
