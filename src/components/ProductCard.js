import React from "react";
import styled from "styled-components";
import { TiShoppingCart } from "react-icons/ti";
import Star from "./Star";
import { addToCart } from "../features/CartSlice";
import { useDispatch } from "react-redux";
import LikeBtn from "./LikeBtn";
import { productActions } from "../features/ProductsReducer";

const ProductCard = ({ imgUrl, price, title, id, isLiked, onClick }) => {
  const [oldPrice, setOldPrice] = React.useState(0);
  React.useEffect(() => setOldPrice(parseInt(price) + 100), [price]);

  const dispatch = useDispatch();

  const { toggleLikeProducts } = productActions;

  return (
    <StyledDiv
      // onClick={() => dispatch(update([id, oldPrice]))}
      onClick={onClick}
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
        <LikeBtn
          isLiked={isLiked}
          onClick={() => {
            dispatch(toggleLikeProducts({ id }));
          }}
          classChosen={"popup-icon"}
          id={id}
        />
        <button
          className="popup-icon-left"
          onClick={() => dispatch(addToCart(id))}
        >
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
  background-color: var(--background-grey);
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

  .popup-icon,
  .popup-icon-left {
    color: var(--light-blue);
    width: 2.7rem;
    height: 2.5rem;
    border-radius: 50%;
    border: 2px solid #9acbf5;
  }
  .popup-icon-left {
    margin-left: 1.5rem;
  }
  .popup-icon:active {
    transform: scale(1.1);
  }
  .popup-icon > * {
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
