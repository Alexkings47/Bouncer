import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SearchInput from "../Search";
import CartCard from "../CartCard";
import { useSelector } from "react-redux";

const Cart = () => {
  const [cartArr, setCartArr] = useState(
    useSelector((state) => state.cart.cartArr)
  );

  useEffect(() => {
    cartArr.length > 0 &&
      localStorage.setItem("CartArr", JSON.stringify(cartArr));
  }, [cartArr]);

  useEffect(() => {
    setCartArr(JSON.parse(localStorage.getItem("CartArr")));
  }, []);
  console.log(cartArr);

  const CartCards = cartArr.map((cartItem, index) => {
    return (
      <CartCard
        imgUrl={cartItem.imgUrl}
        title={cartItem.title}
        price={cartItem.price}
        key={index}
        id={index}
      />
    );
  });

  return (
    <StyledSection className="partial-width">
      <div className="checkout-heading">
        <h3>product</h3>
        {/* <div className="right-end"> */}
        <h3>Price</h3>
        <h3>Quantity</h3>
        <h3>Unit Price</h3>
        {/* </div> */}
      </div>
      <div className="cart-cards">{CartCards}</div>
      <div className="checkout-sections">
        <SearchInput buttonVal={"Redeem"} inputVal={"Voucher code"} />
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
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  .cart-cards {
    display: flex;
    flex-direction: column;
    width: 90%;
    border: 1px solid red;
  }
  .checkout-heading {
    width: 90%;
    display: grid;
    justify-content: space-between;
    grid-template-columns: 3fr 1fr 1fr 1fr;
    justify-items: start;
  }

  .right-end {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 40%;
  }
  .checkout-heading h3 {
    font-weight: 500;
    font-size: 14px;
  }
`;
