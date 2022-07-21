import React from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { removeFromCart, updateCount } from "../features/CartSlice";
import { useDispatch } from "react-redux";
import ProductCounter from "./ProductCounter";
import PropTypes from "prop-types"

const CartCard = ({ imgUrl, title, price, id, count, onClick }) => {
  const dispatch = useDispatch();

  function handleUpdate(newCount) {
      dispatch(updateCount({ count: newCount, id: id}))
  }
  return (
    <StyledDiv>
      <div className="product">
        <button
          onClick={() => {
            dispatch(removeFromCart(id));
          }}
        >
          <AiOutlineClose />
        </button>

        <img
          src={require(`../images/${imgUrl}`)}
          alt={title}
          onClick={onClick}
        />

        <p className="title">{title}</p>
      </div>
      <p>{price * count}</p>
      <ProductCounter
        count={count}
        stateArr={true}
        handleUpdate={handleUpdate}
      />
      <p>{price}</p>
    </StyledDiv>
  );
};

CartCard.propTypes = {
  imgUrl:PropTypes.string,
  title:PropTypes.string,
  price:PropTypes.number,
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
