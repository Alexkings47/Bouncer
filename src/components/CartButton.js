import React from "react";
import styled from "styled-components";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { increment } from "../features/CartSlice";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";


const CartButton = ({ chosenClass, dataId }) => {
  const dispatch = useDispatch();

  return (
    <StyledDiv className={chosenClass}>
      <button className="cart-div" onClick={() => dispatch(increment(dataId))}>
        <p>Add to Cart</p>
        <AiOutlineShoppingCart />
      </button>
      <button className="like-btn">
        <AiOutlineHeart />
      </button>
    </StyledDiv>
  );
};
CartButton.propTypes = {
  chosenClass: PropTypes.string,
  dataId: PropTypes.number,
}
export default CartButton;
const StyledDiv = styled.div`
  display: flex;
  align-items: stretch;
  justify-items: flex-end;

  .cart-div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 3px;
    width: 9.5rem;
    margin-right: 1rem;
    padding: 0.5rem 1.2rem;
    color: #33a0ff;
    background-color: #33a0ff16;
    position: relative;
    height: 40px;
    font-size: 14px;
    font-weight: 500;
  }

  .like-btn {
    width: 2rem;
    background-color: #33a0ff16;
    color: #33a0ff;
    height: 40px;
  }
`;
