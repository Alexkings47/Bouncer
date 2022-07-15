import React from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { decrement } from "../features/CartSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ProductCounter from "./ProductCounter";
import { update } from "../features/Details";
import PropTypes from "prop-types"

const CartCard = ({ imgUrl, title, price, id, count }) => {
  const dispatch = useDispatch();

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
        <Link to="/details">
          <img
            src={require(`../images/${imgUrl}`)}
            alt={title}
            onClick={() => dispatch(update([id]))}
          />
        </Link>
        <p className="title">{title}</p>
      </div>
      <p>{price * count}</p>
      <ProductCounter count={count} id={id} />
      <p>{price}</p>
    </StyledDiv>
  );
};

CartCard.propTypes = {
  imgUrl:PropTypes.string,
  title:PropTypes.string,
  price:PropTypes.string,
  id:PropTypes.number,
  count:PropTypes.number,
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
    padding: 0 0.5rem;
  }
  p {
    font-size: 14px;
  }
  .title {
    font-size: 14px;
  }
`;
