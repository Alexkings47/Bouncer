import React from "react";
import styled from "styled-components";
import CategoryBar from "../CategoryBar";
import ColorPicker from "../ColorPicker";
import ListDiv from "../ListDiv";
import Advertisment from "./Advertisment";
import ProductDisplay from "./ProductDisplay";

const AccessProducts = () => {
  const color = ["red", "blue", "yellow", "black", "pink", "#EFDFDF"];

  function toggleBackGround(evt) {
    // var element = document.getElementsByClassName("div_number");
    if (evt.target.classList.contains("div_number")) {
      evt.target.classList.remove("div_number");
    } else {
      // element[0].parentNode.classList.remove("div_number");
      evt.target.classList.add("div_number");
    }
  }

  return (
    <StyledDiv className="full-width">
      <div className="categories">
        <ListDiv
          title={"ACCESSORIES"}
          values={[
            "Airpoint & Wireless",
            "Apple Car",
            " Business & Secuirity",
            "Bags, Shells & Sleeves",
            "Cables & Docks",
            "charging devices",
            "Car & Travel",
            "Cases & Films",
          ]}
          classChosen={"accessories"}
          number={2}
        />
        <div className="price-range">
          <p className="heading">PRICES</p>
          <p className="ranger">
            <span>Range</span> <span className="prices">$13.99 - $25.99</span>
          </p>
          <input type="range" min="2" max="30" id="ranger" className="ranger" />
        </div>
        <div className="color-div">
          {color.map((colorItem, index) => {
            return <ColorPicker color={colorItem} key={index} />;
          })}
        </div>
        <ListDiv
          title={"BRAND"}
          values={["Apple", "LG", "Samsung", "Siemens"]}
          classChosen={"brand"}
          number={1}
        />
        <div className="more">More</div>
      </div>
      <div className="prod-images">
        <Advertisment slide={false} classChosen={"position"} />
        <CategoryBar>{"Home/ Accessories/"}</CategoryBar>
        <ProductDisplay classChosen={"position"} bar={false} />
        <CategoryBar>
          <div className="page-num" onClick={toggleBackGround}>
            1
          </div>
          <div className="page-num" onClick={toggleBackGround}>
            2
          </div>
          <div className="page-num" onClick={toggleBackGround}>
            3
          </div>
          <div className="page-num" onClick={toggleBackGround}>
            4
          </div>
        </CategoryBar>
      </div>
    </StyledDiv>
  );
};

export default AccessProducts;
const StyledDiv = styled.div`
  margin: 2rem 0 5rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  .categories {
    width: 230px;

    div {
      background-color: #e5e5e580;
      border-radius: 3px;
      padding: 1rem 0.8rem;
      margin-bottom: 1rem;
    }
    /* .partial-width{
        grid-column: 2/4;
    } */
    li {
      margin-top: 1rem;
      font-size: 14px;
      font-weight: 500;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    li:focus {
      color: var(--light-blue);
    }
    .heading {
      font-size: 18px;
      font-weight: 500;
    }
    .more {
      text-transform: uppercase;
      font-size: 18px;
      font-weight: 500;
      text-align: center;
    }
    .price-range {
      * {
        width: 100%;
      }
    }
    .ranger {
      padding-block: 0.5rem;
      font-size: 14px;
      font-weight: 500;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }

    input:focus {
      outline: none;
    }
  }
  .prod-images {
    width: 50%;
    padding-left: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  .position {
    width: 100%;
  }
  .div_number {
    background-color: black;
    color: white;
  }
  .page-num {
    padding: 0 15px;
    margin: 0 3px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* .accessories,
  .price-range,
  .color-div,
  .brand {
    padding: 1rem 0.8rem;
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  } */
`;
