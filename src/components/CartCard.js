import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import Counter from "./Counter";
import { decrement } from "../features/CartSlice";
import { useDispatch } from "react-redux";


const CartCard = ({ imgUrl, title, price, id }) => {
   const dispatch = useDispatch(); 
  const [totalPrice, setTotalPrice] = useState(price * 3);
  return (
    <StyledDiv>
      <div className="product">
        <button
          onClick={() => {
            dispatch(decrement(id));
          }}
        >
          <AiOutlineClose />
        </button>
        <img src={require(`../images/${imgUrl}`)} alt={title} />
        <p className="title">{title}</p>
      </div>

      <p>{totalPrice}</p>
      <Counter />
      <p>{price}</p>
    </StyledDiv>
  );
};

export default CartCard;
const StyledDiv = styled.div`
  display: grid;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  grid-template-columns: 3fr 1fr 1fr 1fr;
  justify-items: start;

  .product{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  img {
    width: 10rem;
  }
  p {
  }
  .title {
  }
`;
