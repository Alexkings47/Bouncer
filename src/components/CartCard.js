import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import Counter from "./Counter";

const CartCard = ({ imgUrl, title, price }) => {
  const [totalPrice, setTotalPrice] = useState(price * 3);
  return (
    <StyledDiv>
      <AiOutlineClose />
      <img src={require(`../images/${imgUrl}`)} alt={title} />
      <div className="right-end">
        <p>{title}</p>
        <p>{totalPrice}</p>
        <Counter />
        <p>{price}</p>
      </div>
    </StyledDiv>
  );
};

export default CartCard;
const StyledDiv = styled.div`
  display: flex;
  align-items: center;

  width: 90%;
  justify-content: space-between;

  .right-end {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 40%;
  }
  img {
  }

`;
