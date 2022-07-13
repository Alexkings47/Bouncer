import React from "react";
import styled from "styled-components";
import { AiOutlineHeart } from "react-icons/ai";
import { TiShoppingCart } from "react-icons/ti";
import Star from "./Star";
import { increment } from "../features/CartSlice";
import { useDispatch } from "react-redux";
import { update } from "../features/Details";

const ProductCard = ({ imgUrl, price, title, id }) => {
  const [oldPrice, setOldPrice] = React.useState(0);
  React.useEffect(() => setOldPrice(parseInt(price) + 100), [price]);

  const dispatch = useDispatch();

  

  function like() {}

  return (
    <StyledDiv
      onClick={() => dispatch(update([id, oldPrice]))}
    >
      <img src={require(`../images/${imgUrl}`)} alt="productcard" />
      <div className="product-text">
        <p className="title">{title}</p>
        <div className="star">
          {" "}
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </div>
        <div className="priceBox">
          <p className="price">${price}</p>
          <s>${oldPrice}</s>
        </div>
      </div>
      <div className="popup-parent">
        <div className="popup">
          <button className="product-icon" onClick={like}>
            {" "}
            <AiOutlineHeart />
          </button>

          <button
            className="product-icon"
            onClick={() => dispatch(increment(id))}
          >
            <TiShoppingCart />
          </button>
        </div>
      </div>
    </StyledDiv>
  );
};

export default ProductCard;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* background-color: var(--whitish-grey); */
  background-color: #f6f7f8;
  padding: 0 1.2rem;
  cursor: pointer;
  border-radius: 3px;
  border: 2px solid rgb(246, 247, 248);
  position: relative;
  height: 300px;
  text-align: center;

  .popup-parent {
    display: none;
    position: absolute;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 60%;
    background-color: var(--whitish-grey);

    background-color: #f4f7f1d9;
  }

  .popup {
    display: flex;
    align-items: center;
    width: 50%;
    justify-content: space-between;
  }
  .product-icon {
    color: var(--light-blue);
    width: 2.7rem;
    height: 2.5rem;
    border-radius: 50%;
    border: 2px solid #9acbf5;
  }
  .product-icon:active {
    transform: scale(1.1);
  }
  .product-icon > * {
    font-size: 18px;
    display: block;
    margin: 0 auto;
  }
  .price {
    color: #ff4858;
    margin-right: 2rem;
  }

  .title {
    font-size: 16px;
  }
  .product-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid #7070700e;
    padding-block: 1rem;
    height: 40%;
    width: 100%;
  }
  .priceBox {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &:hover .popup-parent {
    display: flex;
  }
  img {
    max-width: 12rem;
    height: 10rem;
    padding: 1.5rem 0 2rem;
  }
  s {
    color: grey;
  }
`;
