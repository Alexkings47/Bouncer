import React from "react";
import styled from "styled-components";

const OffersItem = ({title, imgUrl}) => {
  return (
    <StyledDiv>
      <img src={require(`../images/${imgUrl}`)} alt={title} />
      <h3>{title}</h3>
      <small>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut deserunt
        architecto asperiores iste, minus consectetur?
      </small>
    </StyledDiv>
  );
};

export default OffersItem;
const StyledDiv = styled.div`
width: 7rem;
height: 7rem;
display:flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
text-align: center;

img{
    width:2rem;
    /* height: 3.5rem; */
    /* object-fit: cover; */
}
`;
