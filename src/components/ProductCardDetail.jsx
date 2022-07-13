import React from "react";
import styled from "styled-components";
import Star from "./Star";
import { useDispatch } from "react-redux";
import { update } from "../features/Details";
import CartButton from "./CartButton";

const ProductCardDetail = ({ imgUrl, price, title, id }) => {
  const [oldPrice, setOldPrice] = React.useState(0);
  React.useEffect(() => setOldPrice(parseInt(price) + 100), [price]);

  const dispatch = useDispatch();

  // function like(){}

  return (
    <StyledDiv onClick={() => dispatch(update([id, oldPrice]))}>
      <div className="product-image">
        <div className="hot">
          <p>HOT</p>
        </div>
        <img src={require(`../images/${imgUrl}`)} alt="productcard" />
      </div>

      <div className="product-text">
        <div className="title-div">
          <p className="title">{title}</p>
          <div className="star">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
        </div>
        <div className="priceBox">
          <p className="price">${price}</p>
          <s>${oldPrice}</s>
        </div>
        <div className="text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
            harum veniam sequi ipsa fuga, placeat quae labore, ab error qui
            aliquam architecto! Eius recusandae beatae magnam quas perferendis,
            reiciendis quo.
          </p>
        </div>
        <CartButton dataId={id} chosenClass={"cartButton"} />
      </div>
    </StyledDiv>
  );
};

export default ProductCardDetail;

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--background-grey);
  padding: 1rem 10px 1rem 1.5rem;
  cursor: pointer;
  border-radius: 3px;
  border-bottom: 2px solid #7070702f;

  .price {
    color: #ff4858;
    margin-right: 2rem;
  }
  .product-image {
    position: relative;
    margin-right: 2rem;
    padding: 2.5rem 1rem;
    border: 1px solid #e2edf8;
  }
  img {
    max-width: 16rem;
    border-radius: 3px;
  }
  .hot {
    color: white;
    background-color: red;
    border-radius: 3px;
    position: absolute;
    top: 0;
    padding: 12px;
    left: 0;
  }
 
  .priceBox {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .title-div {
    border-bottom: 1px solid #7070702f;
    width: 65%;

    .star {
      padding: 12px 0 10px;
    }
  }
  .title {
    font-size: 20px;
  }
  .product-text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding-block: 1rem;

    & > * {
      margin-bottom: 1.2rem;
    }
  }

  s {
    color: grey;
  }
  .cartButton {
    margin-bottom: 0;
  }
`;
