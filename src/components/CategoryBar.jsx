import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types"

const CategoryBar = ({ children, classChosen }) => {
  return <StyledDiv className={`full-width ${classChosen}`}>{children}</StyledDiv>;
};

CategoryBar.propTypes = {
  children: PropTypes.string,
  classChosen: PropTypes.string,
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

  & > * {
    margin: 0 8px;
  }
`;
