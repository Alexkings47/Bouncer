import React from "react";
import styled from "styled-components";
import ProductCard from "../ProductCard";
import { Data } from "../Data";
import Button from "../Button";

const ProductDisplay = () => {
  const NewProducts = Data.map((item) => {
    return (
      <ProductCard title={item.title} price={item.price} imgUrl={item.imgUrl} />
    );
  });
  return (
    <StyledSection className="partial-width">
      <div className="grid-items">
        <div className="product-types">
          <ul>
            <li>All</li>
            <li>Mac</li>
            <li>iPhone</li>
            <li>iPad</li>
            <li>iPod</li>
            <li>Accessories</li>
          </ul>
        </div>
        {NewProducts}
      </div>
      <Button value={"LOAD MORE"} color={"#33A0FF"} align={"1rem auto"} />
    </StyledSection>
  );
};

export default ProductDisplay;

const StyledSection = styled.section`
  padding: 20px 0 2rem;

  .grid-items {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    grid-template-rows: repeat(auto-fill, max-content);
    grid-gap: 10px;
  } 

  .product-types {
    grid-row: 1/2;
    grid-column: 1/-1;
  }
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style-type: none;
    width: 50%;
    margin: 0 auto;

    & > li {
      margin-right: 1.5rem;
      font-size: 14px;
      font-family: "proxima sans";

      &:hover,
      &:active {
        color: #33a0ff;
        cursor: pointer;
      }
    }
  }
`;
