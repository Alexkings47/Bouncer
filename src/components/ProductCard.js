import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineHeart } from "react-icons/ai";
import { TiShoppingCart } from "react-icons/ti";
import Star from "./Star";
import { increment } from "../features/CartSlice";
import {  useDispatch } from "react-redux";

const ProductCard = ({ imgUrl, price, title, id }) => {
  const [oldPrice, setOldPrice] = React.useState(0);
  React.useEffect(() => setOldPrice(parseInt(price) + 100), [price]);

  const dispatch = useDispatch();

  function flip() {}
  function cartEdit() {
    // setCartArr((prevCartArr) => {
    //   prevCartArr.push();
    // });
  }
  function like() {}

  return (
    <StyledDiv onMouseEnter={flip}>
      <img src={require(`../images/${imgUrl}`)} alt="productcard" />
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
      <div className="popup">
        <button className="product-icon" onClick={like}>
          {" "}  
          <AiOutlineHeart />
        </button>
        <button className="product-icon" onClick={() => dispatch(increment(id))}>
          <TiShoppingCart />
        </button>
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
  background-color: rgba(246, 247, 248, 0.8);
  padding: 1rem 1.2rem;
  cursor: pointer;
  border-radius: 3px;
  border: 2px solid rgb(246, 247, 248);
  position: relative;
  min-height: 300px;
  text-align: center;

  .popup {
    display: none;
    justify-content: space-between;
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    width: 40%;
  }
  .product-icon {
    color: #33a0ff;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    border: 2px solid #9acbf5;
  }
  .product-icon:active{
  transform:scale(1.1) ;
  }
  .product-icon > * {
    font-size: 18px;
    display: block;
    margin: 0 auto;
  }
  &:hover img {
    opacity: 0.4;
  }
  &:hover .popup {
    display: flex;
  }
  img {
    width: 99%;
  }
  s {
    color: grey;
  }
  .price {
    color: #ff4858;
  }
  .priceBox {
    display: flex;
    justify-content: space-between;
    width: 35%;
    font-size: 12px;
  }
  p {
    font-weight: 400;
    font-size: 13px;
  }
`;
