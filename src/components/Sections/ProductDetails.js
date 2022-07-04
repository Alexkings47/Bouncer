import React, { useState } from "react";
import styled from "styled-components";
import Star from "../Star";
import Button from "../Button";
import { useSelector } from "react-redux";
import { Data } from "../Data";
import ProductCard from "../ProductCard";
import BestsellerItem from "../BestsellerItem";
import ProductCounter from "../ProductCounter";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";

const ProductDetails = () => {
  const [id, oldPrice] = useSelector((state) => state.value);

  const starArr = [];
  for (let i = 0; i < 4; i++) {
    let star = <Star />;
    starArr.push(star);
  }
  const ThumbArr = [];
  for (let j = 0; j < 4; j++) {
    let thumb = (
      <img
        src={require(`../../images/${Data[id].imgUrl}`)}
        alt={Data[id].title}
        className="thumb"
        key={j}
      />
    );

    ThumbArr.push(thumb);
  }

  const [values] = useState({
    isTrue: true,
    shipping: false,
  });

  return (
    <StyledDiv>
      <div className="category">Home/ Accessories/</div>
      <div className="grid-container">
        <div className="product-image">
          <img
            src={require(`../../images/${Data[id].imgUrl}`)}
            alt={Data[id].title}
            className="main-image"
          />
          <div className="thumbnails">
            {Data[id].thumb != null
              ? Data[id].thumb.map((item, index) => {
                  return (
                    <img
                      src={require(`../../images/${item}`)}
                      alt={Data[id].title}
                      className="thumb"
                      key={index}
                    />
                  );
                })
              : ThumbArr}
          </div>
        </div>
        {/*product description */}
        <div className="product-text">
          <p className="title">{Data[id].title}</p>

          {/* review stars and co */}
          <div className="review">
            <span className="star"> {starArr}</span>
            <small> 0 reviews</small>
            <p className="blue-text">Submit a review</p>
          </div>
          {/* price details */}
          <div className="price-detials">
            <span className="price">$ {Data[id].price}</span>
            <s> $ {oldPrice}</s>
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
          <div className="color">
            <Button color={"blue"} classChosen={"blue color-picker"} />
            <Button color={"red"} classChosen={"red color-picker"} />
            <Button color={"black"} classChosen={"black color-picker"} />
            <Button color={"yellow"} classChosen={"yellow color-picker"} />
          </div>
          <div className="size">
            Size
            <select>
              <option>XS</option>
              <option>L</option>
              <option>M</option>
            </select>
          </div>
          <div className="amount">
            <ProductCounter count={Data[id].count} id={Data[id].id} />
            <button className="cart-div">
              <div className="cart"></div>
              <p>Add to Cart</p>
              <AiOutlineShoppingCart />
            </button>
            <button className="like">
              <AiOutlineHeart />
            </button>
          </div>
        </div>
        <div className="buttons">
          <Button />
        </div>
      </div>
      <aside className="bestseller">
        <h3 className="grey-font">BEST SELLER</h3>
        <div className="product-items">
          <ProductCard
            title={Data[2].title}
            price={Data[2].price}
            imgUrl={Data[2].imgUrl}
          />
          <BestsellerItem
            imgUrl={"camcorder.png"}
            title={"GoPro Hero 6"}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit"
            }
            price={"$299"}
            chosenClass={"bestsellerCard3"}
          />
        </div>
      </aside>
    </StyledDiv>
  );
};

export default ProductDetails;
const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 8rem 0 3rem;
  flex-wrap: wrap;

  .category {
    background-color: #f6f7f8;
    width: 100%;
    text-align: center;
    padding: 5px;
  }
  .grid-container {
    display: grid;
    flex: 0.8;
    grid-template-columns: 45% 55%;
    column-gap: 1rem;
    row-gap: 4rem;
    padding: 2rem 0;
  }

  .product-image {
  }
  .main-image {
    max-width: 14rem;
    height: 13rem;
  }
  .product-text {
    flex-direction: column;
    align-items: center;

    & > div {
      border-bottom: 1px solid #f6f7f8;
      padding: 1rem 0;
      display: flex;

      align-items: center;
      justify-content: flex-start;
    }
    & > div > * {
      margin-right: 1rem;
    }
    .stock {
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;

      div {
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;

        span {
          font-weight: 400;
          align-self: flex-end;
          width: 40%;
        }
      }
    }
    .color {
      border-bottom: none;
    }
    .blue-text {
      color: #33a0ff;
      cursor: pointer;
    }
    .title {
      font-size: 14px;
      font-weight: 600;
    }
    .price-details {
      max-height: 6rem;
    }
    .review {
    }

    .color-picker {
      border-radius: 50%;
      width: 1rem;
      height: 1.1rem;
    }

    .blue:active,
    .blue:visited,
    .blue:hover {
      outline: 1px solid blue;
      outline-offset: 3px;
    }
    .red:hover {
      outline: 1px solid red;
      outline-offset: 3px;
    }
    .black:hover {
      outline: 1px solid black;
      outline-offset: 3px;
    }
    .yellow:hover {
      outline: 1px solid yellow;
      outline-offset: 3px;
    }
    s {
      color: grey;
    }
    .price {
      color: #ff4858;
      font-size: 18px;
    }
    .amount {
      justify-content: space-between;
    }
  }

  .cart-div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 3px;
    width: 8rem;
    padding: 0.5rem 1.2rem;
    color: #33a0ff;
    position: relative;
  }
  .cart {
    width: 100%;
    position: absolute;
    height: 100%;
    border-radius: 2px;
    background-color: rgba(51, 160, 255, 0.3);
    filter: blur(1px);
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .like {
    width: 2rem;
    background-color: rgba(51, 160, 255, 0.3);
    color: #33a0ff;
    height: 2rem;
  }

  .thumb {
    width: 3.5rem;
    height: 3.5rem;
    padding: 5px 2px;
    border: 1px solid #707070;
  }
  .product-items {
    max-width: 15rem;
  }
  /* best seller and product card at far right */
  .bestseller {
    width: 12rem;
  }
  .bestsellerCard3 {
    background-color: #c1c8ce;
    height: 270px;
    margin-top: 2rem;
    .info {
      height: 60%;
    }

    img {
      position: absolute;
      bottom: 10px;
      right: -10px;
      width: 7rem;
      height: 60%;
    }
  }

  @media (max-width: 900px) {
    margin: 0;
  }
`;
