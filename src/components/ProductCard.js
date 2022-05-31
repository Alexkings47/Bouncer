import React from 'react'
import styled from 'styled-components'
import {AiOutlineStar} from "react-icons/ai"

const ProductCard = ({imgUrl,price, title}) => {
function flip(){

}

  return (
    <StyledDiv onMouseEnter={flip}>
      <img src={require('../images/laptop.png')} alt="productcard" />
      <h3>{title}</h3>
      <AiOutlineStar />
      <p className="price">{price}</p>
      <p className="oldPrice">{price + 100}</p>
    </StyledDiv>
  );
}

export default ProductCard

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #f6f7f8;
  padding: 1rem 1.2rem;
  cursor: pointer;
  border-radius: 3px;
  border: 1px solid #F6F7F8;

  &:hover img {
    opacity: 0.4;
  }
`;