import React from "react";
import styled from "styled-components";

const CategoryBar = ({ children }) => {
  return <StyledDiv className="full-width">{children}</StyledDiv>;
};

export default CategoryBar;
const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f6f7f8;
  width: 100%;
  text-align: center;
  height: 2rem;
  margin: 1rem 0;

  
`;
