import React, { useState } from "react";
import styled from "styled-components";
import Star from "../Star";
import Button from "../Button";
import { useSelector } from "react-redux";
import { Data } from "../Data";
import Counter from "../Counter";

const ProductDetails = () => {
  const starArr = [];

  for (let i = 0; i < 4; i++) {
    let star = <Star />;
    starArr.push(star);
  }

  const [values, setValues] = useState({
    isTrue: true,
    shipping: false,
  });

  const id = useSelector((state) => state.value);
  console.log(id);
  return (
    <StyledDiv>
      <div className="product-image">
        <img
          src={require (`../../images/${Data[id].imgUrl}`)}
          alt={Data[id].title}
        />
        {/* {Data[id].title} */}
        <div className="thumb-nails">
          {/* <img src={} alt={} />
            <img src={} alt={} />
            <img src={} alt={} />
            <img src={} alt={} /> */}
        </div>
      </div>
      <div className="product-text">
        <h3>{Data[id].title}</h3>
        review stars and co
        <div className="review">
          {starArr}
          <small> 0 reviews</small>
          <p className="blue-text">Submit a review</p>
        </div>
        price details
        <div>
          <span>{Data[id].price}</span>
          {/* <span>{oldPrice}</span> */}
          <p>
            Availability:{" "}
            <span>{values.isTrue ? "in stock" : "out of stock"}</span>
          </p>
          <p>
            Category: <span>{"type"}</span>
          </p>
          <p>
            Free Shipping <span>{values.shipping ? "yes" : "no"}</span>
          </p>
        </div>
        <div className="specifications">
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
          <div className="buttons">
            <Button />
          </div>
        </div>
      </div>
    </StyledDiv>
  );
};

export default ProductDetails;
const StyledDiv = styled.div``;
