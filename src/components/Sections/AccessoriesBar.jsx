import React, { useState } from "react";
import styled from "styled-components";
import CategoryBar from "../CategoryBar";
import ColorPicker from "../ColorPicker";
import { Data, values, Color, CategoryBox } from "../Data";
import ListDiv from "../ListDiv";
import Advertisment from "./Advertisment";
import ProductDisplay from "./ProductDisplay";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import SelectBar from "../SelectBar";

const AccessProducts = () => {
  const [activeName, setActiveName] = useState();
  // const [menu, setMenu] = useState()
  const [view, setView] = useState(false);

  return (
    <StyledDiv className="full-width">
      <div className="filter">
        <ListDiv
          title={"ACCESSORIES"}
          values={values[0]}
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
          {Color.map((colorItem, index) => {
            return <ColorPicker color={colorItem} key={index} />;
          })}
        </div>
        <ListDiv
          title={"BRAND"}
          values={values[1]}
          classChosen={"brand"}
          number={1}
        />
        <div className="more">More</div>
      </div>
      <div className="right-product-display">
        <Advertisment slide={false} classChosen={"position"} />
        <CategoryBar classChosen={"spaced-bar"}>
          <div className="category-bar-div">
            <span>{Data.length * 2}</span>
            <p>Sort By</p>
            <SelectBar options={["Name", "Size"]} />
            <p>show</p>
            <SelectBar options={["12", "11"]} />
          </div>
          <div className="category-bar-div">
            <BsFillGrid3X3GapFill
              onClick={() => setView(false)}
              className={view ? "" : "blue-icon"}
            />
            <AiOutlineMenu
              className={view ? "blue-icon" : ""}
              onClick={() => setView(true)}
            />
          </div>
        </CategoryBar>
        <ProductDisplay
          classChosen={"display-details"}
          bar={false}
          view={view}
        />
        <CategoryBar>
          {CategoryBox.map((item, index) => {
            return (
              <div
                onClick={() => setActiveName(item.name)}
                className={activeName === item.name ? "div_number" : "page-num"}
                key={index}
              >
                {item.elem}
              </div>
            );
          })}
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

  .filter {
    width: 230px;
    flex-shrink: 0;
    padding-left: 2rem;
    div {
      background-color: #e5e5e553;
      border-radius: 3px;
      padding: 1rem 0.8rem;
      margin-bottom: 1rem;
    }

    li {
      margin-top: 1rem;
      font-size: 14px;
      font-weight: 500;
      display: flex;
      justify-content: space-between;
      align-items: center;
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
  .right-product-display {
    max-width: 45rem;
    padding: 0 2rem 0 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  .spaced-bar {
    justify-content: space-between;
  }
  .category-bar-div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > * {
      margin: 0 8px;
    }
  }
  .blue-icon {
    color: var(--light-blue);
  }
  .display-details {
    width: 100%;
  }
  .position {
    width: 100%;

    .advertisment-title {
      font-size: 45px;
      font-weight: 300;
    }
    .desc {
      font-size: 18px;
    }
  }
  .div_number {
    background-color: black;
    color: white;
    padding: 0 15px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .page-num {
    padding: 0 15px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 800px) {
    .filter {
      padding-left: 1rem;
    }
    .right-product-display {
      padding: 0 1rem 0 1rem;
    }
  }
  @media (max-width: 700px) {
    .filter {
      display: none;
    }
    .right-product-display {
      padding: 0 3rem;
    }
  }
`;
