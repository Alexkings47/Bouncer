import React from "react";
import styled from "styled-components";

const LatestCard = ({date,title,imgUrl}) => {
  return (
    <StyledDiv>
      <img src={require(`../images/${imgUrl}`)} alt={title} />
      <div className="info">
        <small>{date}</small>
        <h3>{title}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ipsa.
        </p>
      </div>
    </StyledDiv>
  );
};

export default LatestCard;
const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
  
  .info {
    padding: 10px;
    display: flex;
    flex-direction:column;
    justify-content: space-between;
    min-height: 70%;
    
  }
  img {
      height:100%;
      width:40%;
  }
`;
