import React from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";
import { Data } from "./Data";
import { Link } from "react-router-dom";

const RelatedProducts = () => {
  return (
    <StyledDiv className="partial-width">
      <p className="section-title">RELATED PRODUCTS</p>
      <div className="product-grid">
        {Data.slice(0, 4).map((item) => {
          return (
            <Link to="/details" key={item.id}>
              <ProductCard
                title={item.title}
                key={item.id}
                id={item.id}
                price={item.price}
                imgUrl={item.imgUrl}
              />
            </Link>
          );
        })}
      </div>
    </StyledDiv>
  );
};

export default RelatedProducts;

const StyledDiv = styled.div`
  .product-grid {
    margin-top: 2.5rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, 210px);
    grid-gap: 1rem;
    justify-content: center;
  }
`;
