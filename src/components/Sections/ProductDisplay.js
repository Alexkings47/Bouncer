import React from "react";
import styled from "styled-components";
import ProductCard from "../ProductCard";
import {Data} from "../Data"

const ProductDisplay = () => {
  const NewProducts = Data.map(item =>{
   return( <ProductCard
        title={item.title}
        price={item.price}
        imgUrl={item.imgUrl}
      />
   )
   }
  )
  return <StyledSection className="partial-width">{NewProducts}</StyledSection>;
};

export default ProductDisplay;

const StyledSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(218px, 1fr));
  grid-gap: 10px;


`;
