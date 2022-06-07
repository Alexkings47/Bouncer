import React from "react";
import styled from "styled-components";

const OffersItem = ({title, imgUrl}) => {
  return (
    <StyledDiv>
      <img src={require(`../images/${imgUrl}`)} alt={title} />
      <h3>{title}</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut deserunt
        architecto asperiores iste, minus consectetur?
      </p>
    </StyledDiv>
  );
};

export default OffersItem;
const StyledDiv = styled.div`
width: 8rem;
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
