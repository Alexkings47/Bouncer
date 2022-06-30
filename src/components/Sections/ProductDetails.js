import React, { useState } from "react";
import styled from "styled-components";
import Star from "../Star";
import Button from "../Button";
import { useSelector } from "react-redux";
import { Data } from "../Data";
import Counter from "../Counter";
import ProductCard from "../ProductCard";
import BestsellerItem from "../BestsellerItem";

const ProductDetails = () => {
  const [id, oldPrice] = useSelector((state) => state.value);

  console.log(id, oldPrice);

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

  const [values, setValues] = useState({
    isTrue: true,
    shipping: false,
  });

  return (
    <StyledDiv>
      <div className="grid-container">
        <div className="product-image">
          <img
            src={require(`../../images/${Data[id].imgUrl}`)}
            alt={Data[id].title}
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
            {starArr}
            <small> 0 reviews</small>
            <p className="blue-text">Submit a review</p>
          </div>
          {/* price details */}
          <div className="price-detials">
            <span className="price">$ {Data[id].price}</span>
            <s> $ {oldPrice}</s>
            <p>
              Availability:
              <span>{values.isTrue ? "in stock" : "out of stock"}</span>
            </p>
            <p>
              Category: <span>{"type"}</span>
            </p>
            <p>
              Free Shipping <span>{values.shipping ? "yes" : "no"}</span>
            </p>
          </div>
          <div className="color">
            <Button classChosen={"blue"} />
            <Button classChosen={"red"} />
            <Button classChosen={"black"} />
            <Button classChosen={"yellow"} />
            <div className="size">
              Size
              <select className="product-size">
                <option>USD</option>
                <option>NGN</option>
                <option>AUD</option>
              </select>
            </div>
            <div className="amount">
              <Counter />
              <button className="cart">
                <></>
                <p>Add to Cart</p>
                <button className="like"></button>
              </button>
            </div>
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
  margin-left: 8rem;

  .grid-container {
    display: grid;
    flex: 0.9;
    grid-template-columns: 45% 55%;
    column-gap: 1rem;
    row-gap: 4rem;
  }
  .product-image {
  }
  .product-text {
    /* width: 30%; */

    flex-direction: column;
    align-items: center;

    div {
      border-bottom: 1px solid #f6f7f8;
    }
    .title {
      font-size: 14px;
      font-weight: 600;
    }
    .price-details {
      max-height: 6rem;
    }
    .review {
      padding: 1rem 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 60%;
    }
    s {
      color: grey;
    }
    .price {
      color: #ff4858;
    }
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

  .bestsellerCard3 {
    background-color: #c1c8ce;
    height: 10rem;

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
    margin-left: 0;
  }
`;
