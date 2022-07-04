import React from "react";
import styled from "styled-components";

const OffersItem = ({title, imgUrl}) => {
  return (
    <StyledDiv>
      <img src={require(`../images/${imgUrl}`)} alt={title} />
      <p className="title">{title}</p>
      <p className="small-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut deserunt
        architecto asperiores iste, minus consectetur?
      </p>
    </StyledDiv>
  );
};

export default OffersItem;
const StyledDiv = styled.div`
min-height: 11rem;
display:flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
text-align: center;
max-width: 25rem;
img{
    width:2.5rem;
}

`;
