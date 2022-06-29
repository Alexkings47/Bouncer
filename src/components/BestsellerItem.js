import React from "react";
import styled from "styled-components";

const BestsellerItem = ({ chosenClass, title, imgUrl, description, price }) => {
  return (
    <StyledDiv className={chosenClass}>
      <img src={require(`../images/${imgUrl}`)} alt={title} />
      <div className="info">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{price}</p>
      </div>
    </StyledDiv>
  );
};

export default BestsellerItem;
const StyledDiv = styled.div`
  padding: 10px;
  position: relative;

  .info {
    display: flex;
    flex-direction: column;
    height: 80%;
    justify-content: space-between;
    width: 55%;
  }

  img {
    width: 8rem;
    height: 80%;
    float: right;
  }

  @media (max-width: 500px) {
        width: 15rem;
        }
  
`;
