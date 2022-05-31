import React from "react";
import styled from "styled-components";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Carousel = () => {

    function next(){

    }
  return (
    <StyledDiv className="full-width">
      <div className="left-content">
        <button className="icon-left" onClick={next}>
          <IoIosArrowBack />
        </button>
        <div className="info">
          <p>Name</p>
          <small>description</small>
          <button>more</button>
        </div>
      </div>
      <div className="right-content">
        <img src={require("../images/iphone1.png")} alt="carousel" />
        <button className="icon-right" onClick={next}>
          <IoIosArrowForward />
        </button>
      </div>
    </StyledDiv>
  );
};

export default Carousel;
const StyledDiv = styled.div`
  height: 450px;
  padding: 2rem 2rem 0 2rem;
  background: linear-gradient(150deg, #ff4858, #8f65ff);
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  .left-content {
    display: flex;
    align-items: center;
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    color: white;
    height: 10rem;
    padding: 2rem;

    button {
      color: white;
      border-bottom: 2px solid white;
      text-transform: uppercase;
      padding: 0 0 3px 0;
    }
  }

  img {
    height: 25rem;
    margin-top: 3.5rem;
  }
  .icon-left {
    margin-right: 1rem;
    font-size: 1.2rem;
  }
  .icon-right {
    margin-right: 1rem;
    font-size: 1.2rem;
  }

  .right-content {
    display: flex;
    align-items: center;
  }

  button {
    border: none;
    background: transparent;
  }
`;
