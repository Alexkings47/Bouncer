import React from "react";
import styled from "styled-components";
import { Data } from "../Data";
import SearchInput from "../Search";
import CartCard from "../CartCard";
// import { CartArr } from "../ProductCard";

const Cart = () => {
//   const newCards = CartArr.map();
  return (
    <StyledSection className="partial-width">
      <div className="checkout-section1">
        <p>product</p>
        <div className="right-end">
          <p>Price</p>
          <p>Quantity</p>
          <p>Unit</p>
        </div>
      </div>
      <div className="checkout-sections">
        <SearchInput />
        <div className="right-end"></div>
      </div>
    </StyledSection>
  );
};

export default Cart;
const StyledSection = styled.section`
  padding-top: 4rem;
  grid-column: 2/5;
  text-transform: capitalize;
  height: 60vh;

  .checkout-section1 {
    width: 90%;
    display: flex;
    justify-content: space-between;
  }

  .right-end {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 40%;
  }
  p {
    font-weight: bold;
    font-size: 15px;
  }
`;
