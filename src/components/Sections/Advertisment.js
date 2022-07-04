import React from "react";
import styled from "styled-components";
import Button from "../Button";
import { Carousel } from "react-responsive-carousel";

const Advertisment = () => {
  return (
    <StyledDiv className="full-width">
      <Carousel
        showArrows={false}
        showThumbs={false}
        stopOnHover={true}
        autoPlay={true}
        showStatus={false}
      >
        <div className="item1 container">
          <div className="info">
            <p className="title">Iphone 6 Plus</p>
            <p className="desc">
              performance and design. Taken right to the edge
            </p>
            <Button value={"More"} />
          </div>
          <div className="imgDiv">
            <img
              src={require("../../images/iPhone6plus.png")}
              alt="Advertisment"
            />
          </div>
        </div>
        <div className="item1 container">
          <div className="info">
            <p className="title">Iphone 6 Plus</p>
            <p className="desc">
              performance and design. Taken right to the edge
            </p>
            <Button value={"More"} />
          </div>
          <div className="imgDiv">
            <img
              src={require("../../images/iPhone6plus.png")}
              alt="Advertisment"
            />
          </div>
        </div>
      </Carousel>
    </StyledDiv>
  );
};

export default Advertisment;
const StyledDiv = styled.div`
  background: var(--light-blue);
  overflow: hidden;
  height: 65vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .item1 {
    padding: 2rem 4rem 0 4rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    z-index: 5;
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    color: white;
    min-height: 17rem;
    max-width: 30rem;
    text-align: left;
    padding: 2rem;
  }
  .title {
    font-size: 66px;
    font-weight: 300;
  }
  .imgDiv {
  }

  img {
    max-height: 140%;
    margin-top: -4rem;
    max-width: 125%;
    left: initial;
    z-index: 10;
  }
  @media (max-width: 900px) {
    .item1 {
      justify-content: center;
      padding: 2rem 0 0;
    }

    .title{
      font-size: 50px;
    }
  }
`;
