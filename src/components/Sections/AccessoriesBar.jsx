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

const AccessProducts = () => {
  const [activeName, setActiveName] = useState();
  // const [menu, setMenu] = useState()
  const [view, setView] = useState(false);

  return (
    <StyledDiv className="full-width">
      <div className="categories">
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
      <div className="prod-images">
        <Advertisment slide={false} classChosen={"position"} />
        <CategoryBar classChosen={"spaced-bar"}>
          <div className="category-bar-div">
            <span>{Data.length * 2}</span>
            <p>Sort By</p>
            <select>
              <option>Name</option>
              <option>Size</option>
            </select>
            <p>show</p>
            <select>
              <option>12</option>
              <option>11</option>
            </select>
          </div>
          <div className="category-bar-div">
            <BsFillGrid3X3GapFill
              onClick={() => setView(false)}
              className={view ? "" : "blue-icon"}
            />
            <AiOutlineMenu
              className={view ? "blue-icon": ""}
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

  .categories {
    width: 230px;

    div {
      background-color: #e5e5e580;
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
`;
