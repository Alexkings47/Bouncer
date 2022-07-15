import React from "react";
import styled from "styled-components";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { increment } from "../features/CartSlice";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

const CartButton = ({ dataId }) => {
  const dispatch = useDispatch();

  return (
    <StyledButton onClick={() => dispatch(increment(dataId))}>
      <p>Add to Cart</p>
      <AiOutlineShoppingCart />
    </StyledButton>
  );
};
CartButton.propTypes = {
  chosenClass: PropTypes.string,
  dataId: PropTypes.number,
};
export default CartButton;
const StyledButton = styled.button`
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
`;
