import React from "react";
import styled from "styled-components";
import { AiOutlineHeart } from "react-icons/ai";
import { TiShoppingCart } from "react-icons/ti";
import Star from "./Star";


const ProductCard = ({ imgUrl, price, title }) => {
  const [oldPrice, setOldPrice] = React.useState(0);

  React.useEffect(() => setOldPrice(parseInt(price) + 100), [price]);

  function flip(){}
  function cart(){}
  function like(){}


  return (
    <StyledDiv onMouseEnter={flip}>
      <img src={require(`../images/${imgUrl}`)} alt="productcard" />
      <h2>{title}</h2>
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
        <button className="product-icon" onClick={cart}>
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
  /* background-color: #d4d5d6; */
  padding: 1rem 1.2rem;
  cursor: pointer;
  border-radius: 3px;
  border: 3px solid rgba(212, 213, 214, 0.5);
  position: relative;
  height: 270px;

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
  .product-icon > * {
    width: 2.5rem;
    height: 1.2rem;
    padding: 0;
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
  h2 {
    font-weight: 400;
  }
`;
