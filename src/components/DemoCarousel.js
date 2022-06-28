import React from "react";
import styled from "styled-components";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { CarouselImage } from "./Data";
import Button from "./Button";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const DemoCarousel = () => {
  return (
    <StyledDiv className="full-width">
      <Carousel
        showArrows={false}
        showThumbs={false}
        stopOnHover={true}
        autoPlay={true}
        showStatus={false}
        renderArrowPrev={(previous, hasPrev, prev) => {
          console.log("WAS CLICKED", hasPrev, prev);
          return (
            <button className="iconPrev" onClick={previous}>
              <IoIosArrowBack />
            </button>
          );
        }}
        renderArrowNext={(nextFunc, hasNext, next) => {
          console.log("WAS CLICKED", hasNext, next);
          return (
            <button className="iconNext" onClick={nextFunc}>
              <IoIosArrowForward />
            </button>
          );
        }}
      >
        <div className="carouselContent">
          <div className="content">
            <div className="info">
              <h2>{CarouselImage[0].name}</h2>
              <p>{CarouselImage[0].desc}</p>
              <Button value={"more"} classChosen={"carouselButton"} />
            </div>
          </div>
          <div className="content">
            <img
              src={require(`../images/${CarouselImage[0].imgUrl}`)}
              alt="carousel"
            />
          </div>
        </div>
        <div className="carouselContent">
          <div className="content">
            <div className="info">
              <h2>{CarouselImage[1].name}</h2>
              <p>{CarouselImage[1].desc}</p>
              <Button value={"more"} classChosen={"carouselButton"} />
            </div>
          </div>
          <div className="content">
            <img
              src={require(`../images/${CarouselImage[1].imgUrl}`)}
              alt="carousel"
            />
          </div>
        </div>
      </Carousel>
    </StyledDiv>
  );
};

export default DemoCarousel;
const StyledDiv = styled.div`
  height: 450px;
  background: linear-gradient(to right, #ff4858, #8f65ff);
  overflow: hidden;
  padding-block: 2rem;

  .carouselContent {
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 18rem;
  }
  @media (max-width: 1300px) {
    .carouselContent {
      width: 90%;
      padding: 2rem 5rem;
    }
  }

  .carouselButton {
    font-size: 13px;
  }
  .content {
    display: flex;
    align-items: center;
  }
  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    color: white;
    height: 15rem;
    padding: 2rem;
  }

  img {
    height: 25rem;
    margin-top: 3.5rem;
  }
  .iconNext,
  .iconPrev {
    font-size: 2.5rem;
    font-weight: 600;
    width: 5rem;
    height: 5rem;
    background: none;
    border: none;
    color: white;
    z-index: 999999999;
    text-align: center;

  }
  .iconNext {
    position: absolute;
    right: 4rem;
    top: 40%;
    transform: translate(-50%);
  }

  .iconPrev {
    position: absolute;
    left: 4rem;
    top: 40%;
    transform: translate(-50%);
  }

  .iconNext:hover,
  .iconPrev:hover {
    transform: scale(1.2);
  }

  @keyframes transit {
    from {
      /* display: none; */
      background-color: green;
    }
    to {
      /* display: flex; */
      background-color: white;
    }
  }
`;
