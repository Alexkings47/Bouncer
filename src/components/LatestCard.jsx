import React from "react";
import styled from "styled-components";

const LatestCard = ({date,title,imgUrl}) => {
  return (
    <StyledDiv>
      <img src={require(`../images/${imgUrl}`)} alt={title} />
      <div className="info">
        <p className="grey-text">{date}</p>
        <h3 className="heading3">{title}</h3>
        <p className="small-text">
          Lorem Ipsum is simply dummy text of the printing 
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
  min-height: 11rem;

  .info {
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 80%;
  }

  img {
    height: 100%;
    width: 40%;
  }

  .grey-text {
    font-size: 14px;
    color: var(--grey);
    font-weight: 600;
  }
  @media (max-width: 800px) {
    & {
      height: 110%;
    }
    .info {
      height: 100%;
      padding: 0 0 0 10px;
    }
  }
 
`;
