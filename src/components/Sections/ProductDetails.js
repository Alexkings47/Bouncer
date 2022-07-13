import React, { useState } from "react";
import styled from "styled-components";
import Star from "../Star";
import { useSelector } from "react-redux";
import { Data, Color_small } from "../Data";
import ProductCounter from "../ProductCounter";
import ColorPicker from "../ColorPicker";
import Thumb from "../Thumb";
import TextSwitcher from "../TextSwitcher";
import SelectBar from "../SelectBar";
import SideProducts from "../SideProducts";
import DetailsButtonDiv from "../DetailsButtonDiv";
import CartButton from "../CartButton";

const ProductDetails = () => {
  const [id, oldPrice] = useSelector((state) => state.value);
  const cartArr = useSelector((state) => state.cart.cartArr);

  const cartArrCount = cartArr.find((elem) => elem.id === id);
  const [countVal] = useState(
    cartArrCount === undefined ? Data[id].count : cartArrCount.count
  );

  const starArr = [];
  for (let i = 0; i < 4; i++) {
    let star = <Star key={i} />;
    starArr.push(star);
  }

  const [values] = useState({
    isTrue: true,
    shipping: false,
  });

  return (
    <StyledDiv className={"full-width"} thumbBorder={values.border}>
      {/* <CategoryBar /> */}
      <div className="grid-container">
        <div className="product-image">
          <img
            src={require(`../../images/${Data[id].imgUrl}`)}
            alt={Data[id].title}
            className="main-image"
          />
          <Thumb id={id} />
        </div>
        {/*product description */}
        <div className="details-product-text">
          <p className="title">{Data[id].title}</p>

          {/* review stars and co */}
          <div className="review">
            <span className="star"> {starArr}</span>
            <small> 0 reviews</small>
            <p className="blue-text">Submit a review</p>
          </div>
          {/* price details */}
          <div className="price-details">
            <span className="price">$ {Data[id].price}</span>
            <s className="grey-text"> $ {oldPrice}</s>
          </div>
          <div className="stock">
            <div>
              {" "}
              <p>Availability:</p>
              <span>{values.isTrue ? "in stock" : "out of stock"}</span>
            </div>
            <div>
              <p> Category:</p>
              <span>{"type"}</span>
            </div>
            <div>
              <p>Free Shipping:</p>
              <span>{values.shipping ? "yes" : "no"}</span>
            </div>
          </div>
          <div className="color-div">
            {Color_small.map((colorItem, index) => {
              return <ColorPicker color={colorItem} key={index} />;
            })}
          </div>
          <div className="size">
            Size
            <SelectBar options={["XS", "L", "M"]} />
          </div>
          <div className="amount">
            <ProductCounter
              count={countVal}
              id={Data[id].id}
              stateArr={cartArrCount}
            />
            <CartButton chosenClass={"right-div-amount"} dataId = {id} />
          </div>
        </div>
        <DetailsButtonDiv chosenClass={"button-div"} />
        <TextSwitcher />
      </div>
      {/* right end articles */}
      <SideProducts chosenClass={"bestseller"} />
    </StyledDiv>
  );
};

export default ProductDetails;
const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  flex-wrap: wrap;

  .grid-container {
    display: grid;
    min-width: 55%;
    grid-template-columns: 18rem 25rem;
    grid-template-rows: repeat(3, max-content);
    gap: 1rem;
    margin-left: 3rem;
    padding: 2rem 1rem;
    justify-content: space-between;
  }

  .product-image {
    width: 100%;

    .main-image {
      width: 100%;
      object-fit: cover;
    }
  }

  .details-product-text {
    flex-direction: column;
    align-items: center;
    /* border: 1px solid red; */

    & > div {
      border-bottom: 1px solid #f6f7f8;
      padding: 0.5rem 0;
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }

    .stock {
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;

      div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;

        span {
          align-self: flex-end;
          width: 40%;
        }
      }
    }
    .color-div {
      border-bottom: none;
    }

    .blue-text {
      color: #33a0ff;
      cursor: pointer;
    }
    .title {
      font-size: 20px;
      font-weight: 500;
    }
    .price-details {
      border-bottom: none;
      * {
        font-size: 20px;
      }

      .price {
        color: #ff4858;
      }
    }

    .review > *,
    .price-details * {
      margin-right: 1rem;
    }

    .amount {
      justify-content: space-between;
    }
  }
  /* socila media buttons */

  
  /* select size */
  select {
    height: 2rem;
    margin-left: 2rem;
    text-indent: 0.4rem;
    font-size: 12px;
    background: transparent;
    background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
    background-repeat: no-repeat;
    background-position-x: 100%;
    background-position-y: 50%;
  }

  @media (max-width: 1200px) {
    .bestseller {
      margin-right: 1rem;
    }
    .grid-container {
      margin-left: 0;
    }
  }
  @media (max-width: 1000px) {
    justify-content: center;

    .grid-container,
    .bestseller {
      width: 90%;
    }
    .bestseller {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    }
    .product-items {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 100%;
      padding: 2rem 0;
    }
  }
  @media (max-width: 800px) {
    .grid-container {
      grid-template-columns: 90%;
      justify-content: center;
      row-gap: 2rem;
      /* justify-items: center; */
    }
    .button-div {
      grid-column: 1/-1;
    }
  }
`;
