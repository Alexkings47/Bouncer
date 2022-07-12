import React from "react";
import styled from "styled-components";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { CarouselImage } from "../Data";
import Button from "../Button";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Container from "../Container";


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
          return (
            <button className="iconPrev" onClick={previous}>
              <IoIosArrowBack />
            </button>
          );
        }}
        renderArrowNext={(nextFunc, hasNext, next) => {
          return (
            <button className="iconNext" onClick={nextFunc}>
              <IoIosArrowForward />
            </button>
          );
        }}
      >
        <Container >
        <div className="carouselContent">
          <div className="content">
            <div className="info">
              <h2>{CarouselImage[0].name}</h2>
              <p>{CarouselImage[0].desc}</p>
              <Button value={"more"} classChosen={"carouselButton"} />
            </div>
          </div>

          <img
            src={require(`../../images/${CarouselImage[0].imgUrl}`)}
            alt="carousel"
          />
        </div>
        </Container>
        <Container >
        <div className="carouselContent">
          <div className="content">
            <div className="info">
              <h2>{CarouselImage[1].name}</h2>
              <p>{CarouselImage[1].desc}</p>
              <Button value={"more"} classChosen={"carouselButton"} />
            </div>
          </div>
          <img
            src={require(`../../images/${CarouselImage[1].imgUrl}`)}
            alt="carousel"
            className="carousel-image2"
          />
        </div>
        </Container>
        <Container>
        <div className="carouselContent">
          <div className="content">
            <div className="info">
              <h2>{CarouselImage[1].name}</h2>
              <p>{CarouselImage[1].desc}</p>
              <Button value={"more"} classChosen={"carouselButton"} />
            </div>
          </div>
          <img
            src={require(`../../images/${CarouselImage[1].imgUrl}`)}
            alt="carousel"
            className="carousel-image2"
          />
        </div>
        </Container>
      </Carousel>
    </StyledDiv>
  );
};

export default DemoCarousel;
const StyledDiv = styled.div`
  height: 450px;
  background: linear-gradient(to right, #ff4858, #8f65ff);
  overflow: hidden;

  .carouselContent {
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 10rem;
    position: relative;
  }
  h2 {
    font-size: 36px;
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
    text-align: left;
  }

  img {
    max-height: 28rem;
    margin-top: 3.5rem;
  }
  .carousel-image2 {
    max-width: 16rem;
  }
  .iconNext,
  .iconPrev {
    font-size: 1.5rem;
    font-weight: 400;
    width: 5rem;
    height: 5rem;
    background: none;
    border: none;
    z-index: 5;
    text-align: center;
  }
  .iconNext {
    position: absolute;
    right: -2rem;
    top: 40%;
    transform: translate(-50%);
  }

  .iconPrev {
    position: absolute;
    left: 2rem;
    top: 40%;
    transform: translate(-50%);
  }

  @media (max-width: 800px) {
    .carouselContent {
      width: 100%;
      padding: 0 5rem;
    }
  }
`;
