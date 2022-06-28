import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { decrement, increase } from "../features/CartSlice";
import { useDispatch,  } from "react-redux";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const CartCard = ({ imgUrl, title, price, id, count }) => {
  const dispatch = useDispatch();
  // const { cartArr, totalAmount } = useSelector((state) => state.cart);
  




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
      <p>{price * count}</p>
      <div className="product-counter">
        {/* onClick={(count) => reduce(count)} */}
        <button className="control__btn" onClick={ ()=> dispatch(increase(id))}>
          <AiOutlineMinus />
        </button>
        <p>{count}</p>
        <button className="control__btn" onClick={""}>
          <AiOutlinePlus />
        </button>
      </div>
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
  grid-template-columns: 3.3fr 1fr 1fr 1fr;
  justify-items: start;
  border-bottom: 1px solid #ebf3f7;
  padding: 10px 0;

  .product {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  img {
    width: 10rem;
  }
  p {
    font-size: 14px;
  }
  .title {
    font-size: 14px;
  }
  .product-counter {
    min-width: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 3px;
    font-size: 12px;
    /* border: 1px solid black; */
    background-color: rgba(230, 230, 230, 0.7);
    /* filter: blur(2px); */
    padding: 6px 5px;

    button {
      font-size: 12px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #33a0ff;
    }
  }
`;
