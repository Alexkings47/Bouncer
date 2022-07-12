import React from 'react'
import styled from 'styled-components'
import ProductCard from "./ProductCard";
import BestsellerItem from "./BestsellerItem";
import { Data } from "./Data";


const SideProducts = ({chosenClass}) => {
  return (
    <StyledAside className={chosenClass}>
      
        <h3 className="grey-text">BEST SELLER</h3>
        <div className="product-items">
          <ProductCard
            title={Data[2].title}
            price={Data[2].price}
            imgUrl={Data[2].imgUrl}
            id={2}
          />
          <BestsellerItem
            imgUrl={"camcorder-min.png"}
            title={"GoPro Hero 6"}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit"
            }
            price={"$299"}
            chosenClass={"bestsellerCard3"}
          />
        </div>
    
    </StyledAside>
  );
}

export default SideProducts
const StyledAside = styled.aside`
  
    width: 210px;
    margin-right: 8rem;
  
  .bestsellerCard3 {
    background-color: #c1c8ce;
    height: 300px;
    width: 210px;
    margin-top: 1rem;
    .info {
      height: 70%;
    }

    img {
      position: absolute;
      bottom: 10px;
      right: -10px;
      width: 10rem;
      height: 10rem;
    }
  }

`;