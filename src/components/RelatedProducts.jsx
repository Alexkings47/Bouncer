import React from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";
import {  useNavigate} from "react-router-dom";
import { useSelector } from "react-redux";

const RelatedProducts = () => {
  const { products } = useSelector((state) => state.products);
  const navigate = useNavigate();
  return (
    <StyledDiv className="partial-width">
      <p className="section-title">RELATED PRODUCTS</p>
      <div className="product-grid">
        {products.slice(0, 4).map((item) => {
          return (
              <ProductCard
                key={item.id}
                {...item}
                onClick={() =>
                  navigate(`/details?itemName=${item.id}`, { state: item })
                }
              />
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
