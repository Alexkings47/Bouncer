import React,{useState} from "react";
import styled from "styled-components";
import ProductCard from "../ProductCard";
import { Data } from "../Data";
import Button from "../Button";
import { Link } from "react-router-dom";

const ProductDisplay = ({classChosen, bar}) => {

  const [showMore, setShowMore] = useState(false);

 

  const NewProducts = Data.map((item) => {
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
  });

  return (
    <StyledSection  className={classChosen? classChosen: "partial-width"}>
      {bar && <div className="product-types-mobile">
        <ul>
          <li>All</li>
          <li>Mac</li>
          <li>iPhone</li>
          <li>iPad</li>
          <li>iPod</li>
          <li>Accessories</li>
        </ul>
      </div>}
      <div className="grid-items">
        {bar && <div className="product-types">
          <ul>
            <li>All</li>
            <li>Mac</li>
            <li>iPhone</li>
            <li>iPad</li>
            <li>iPod</li>
            <li>Accessories</li>
          </ul>
        </div>}
        {NewProducts}
        {!bar? NewProducts: showMore? NewProducts: ""}
      </div>
      {bar && <Button value={"LOAD MORE"} classChosen={"displayBtn"} handleClick={()=> setShowMore(!showMore)} />}
    </StyledSection>
  );
};

export default ProductDisplay;

const StyledSection = styled.section`
  .grid-items {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
    grid-gap: 1rem;
    justify-content: center;
    /* width: 100%; */
    /* border: 1px solid red; */
  }

  .displayBtn {
    margin: 2.5rem auto 5rem;
    color: var(--light-blue);
  }
  .product-types {
    grid-row: 1/2;
    grid-column: 1/-1;
    padding: 1rem 0;
    display: flex;
    justify-content: space-between;
  }
  .product-types-mobile {
    display: none;
  }
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style-type: none;
    min-width: 50%;
    margin: 0 auto;

    & > li {
      margin-right: 1.5rem;
      font-size: 14px;
      padding-bottom: 1rem;
      border-bottom: 2px solid transparent;

      &:hover,
      &:active {
        color: --light-blue;
        cursor: pointer;
        border-bottom: 2px solid;
      }
    }
  }
  @media (max-width: 550px) {
    .product-types {
      display: none;
    }
    .product-types-mobile {
      display: flex;
    }
  }
`;
