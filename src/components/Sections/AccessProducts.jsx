import React from "react";
import styled from "styled-components";
import ColorPicker from "../ColorPicker";

const AccessProducts = () => {
  const color = ["red", "blue", "yellow", "black", "pink", "#EFDFDF"];

  return (
    <StyledDiv >
      <div className="categories">
            <div className="accessories">
          <ul>
            <h3 className="heading">ACCESSORIES</h3>
            <li>Airpoint & Wireless</li>
            <li>Apple Car</li>
            <li>Business & Secuirity</li>
            <li>Bags, Shells & Sleeves</li>
            <li>Cables & Docks</li>
            <li>charging devices</li>
            <li>Car & Travel</li>
            <li>Cases & Films</li>
          </ul>
        </div>
        <div className="price-range">
          <p className="title">PRICES</p>
          <p>
            Ranger <span className="prices">$13.99 - $25.99</span>
          </p>
          <input type="range" min="2" max="30" id="ranger" className="ranger" />
        </div>
        <div className="color-div">
          {color.map((colorItem) => {
            return <ColorPicker color={colorItem} />;
          })}
        </div>
        <div className="accessories">
          <ul>
            <h3 className="heading">ACCESSORIES</h3>
            <li>Apple</li>
            <li>LG</li>
            <li>Samsung</li>
            <li>Siemens</li>
          </ul>
        </div>

        <div>More</div>
      </div>
      <div className="prod-images"></div>
    </StyledDiv>
  );
};

export default AccessProducts;
const StyledDiv = styled.div`
  .categories {
    width: 230px;

    div {
      background-color: #e5e5e5;
      border-radius: 3px;
    }
  }
  .color-div {
  }
`;
