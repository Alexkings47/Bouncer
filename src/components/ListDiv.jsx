import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";


const ListDiv = ({ title, values, number, classChosen }) => {
  return (
    <StyledDiv className={classChosen}>
      <ul>
        <h3 className="heading">{title}</h3>
        {values.map((value, index) => {
          return (
            <li key={index}>
              {value}
              <span key={index}>{number}</span>
            </li>
          );
        })}
      </ul>
    </StyledDiv>
  );
};
ListDiv.propTypes = {
  imgUrl: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
};
export default ListDiv;
const StyledDiv = styled.div``;
