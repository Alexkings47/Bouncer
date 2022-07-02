import React, { useState } from "react";
import styled from "styled-components";
import SearchInput from "../Search";
import CartCard from "../CartCard";
import { useSelector } from "react-redux";
import Button from "../Button";


const Cart = () => {
  const {cartArr} = useSelector((state) => state.cart);
    const t = useSelector((state) => state.cart);

  
  const [total] = useState({
    subtotal: "",
    shipping: "$20",
    coupon: false,
  });

    console.log(t);


  const CartCards = cartArr.map((cartItem) => {
    return (
      <CartCard
        imgUrl={cartItem.imgUrl}
        title={cartItem.title}
        price={cartItem.price}
        key={cartItem.id}
        id={cartItem.id}
        count={cartItem.count}
      />
    );
  });

  return (
    <StyledSection className="partial-width">
      <div className="checkout-heading">
        <h3>product</h3>
        <h3>Price</h3>
        <h3>Quantity</h3>
        <h3>Unit Price</h3>
      </div>
      <div className="cart-cards">{CartCards}</div>
      <div className="checkout-sections">
        <SearchInput
          buttonVal={"Redeem"}
          inputVal={"Voucher code"}
          chosenClass={"voucher"}
        />
        <div className="right">
          <p>
            <span> Subtotal </span>
            <span>{total.subtotal}</span>
          </p>
          <p>
            <span> Shipping fee</span> <span>{total.shipping}</span>
          </p>
          <p>
            Coupon <span>{!total.coupon ? "No" : ""}</span>
          </p>
          <p className="total">TOTAL {}</p>
          <Button value={"Check out"} classChosen={"check-out"} />
        </div>
      </div>
    </StyledSection>
  );
};

export default Cart;
const StyledSection = styled.section`
  padding-top: 4rem;
  text-transform: capitalize;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  & > * {
    width: 90%;
  }
  .voucher {
    width: 15rem;
    margin: 0;
  }
  .cart-cards {
    display: flex;
    flex-direction: column;
  }
  .checkout-heading {
    display: grid;
    justify-content: space-between;
    grid-template-columns: 3.37fr 1fr 1fr 1fr;
    justify-items: start;
  }
  .checkout-sections {
    display: flex;
    justify-content: space-between;
    height: 10rem;
    margin-top: 1rem;
    align-items: flex-start;
  }
  .right {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    width: 30%;
    min-height: 8rem;
   
  }
  .right > p {
    font-size: 12px;
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .check-out {
    background-color: #31a6e0;
    text-decoration: none;
    text-transform: capitalize;
    width: 95%;
    padding: 10px;
  }
  .checkout-heading h3 {
    font-weight: 500;
    font-size: 14px;
  }
`;
