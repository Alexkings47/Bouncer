import React from "react";
import styled from "styled-components";

const BestsellerItem = ({ chosenClass, title, imgUrl, description, price }) => {
  return (
    <StyledDiv className={chosenClass}>
      <img src={require(`../images/${imgUrl}`)} alt={title} />
      <div className="info">
        <p className="title">{title}</p>
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
  margin-top: -2.8rem;

  .info {
    display: flex;
    flex-direction: column;
    height: 80%;
    justify-content: space-between;
    width: 55%;
  }
.title{
  font-size: 24px;
  font-weight: bold;
}
.desc{
  font-size: 12px;
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
