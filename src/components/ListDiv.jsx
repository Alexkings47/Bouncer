import React from "react";
import styled from "styled-components";

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

export default ListDiv;
const StyledDiv = styled.div``;


