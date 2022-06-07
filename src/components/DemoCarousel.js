import React from "react";
import styled from "styled-components";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { CarouselImage } from "./Data";
import Button from "./Button";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const DemoCarousel = () => {
  const [slide, setSlide] = React.useState(0);

  function prev() {
    if (slide === 0) {
      return;
    } else {
      setSlide(slide - 1);
    }
  }

  function next() {
    if (slide + 1 >= CarouselImage.length) {
      return;
    } else {
      setSlide(slide + 1);
    }
  }

  return (
    <StyledDiv className="full-width">
      <Carousel
        showArrows={false}
        showThumbs={false}
        // onChange={onChange}
        // onClickItem={onClickItem}
        // onClickThumb={onClickThumb}
      >
        <div className="carouselContent">
          <div className="content">
            <button className="icon" onClick={prev}>
              <IoIosArrowBack />
            </button>
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
            <button className="icon" onClick={next}>
              <IoIosArrowForward />
            </button>
          </div>
        </div>
        <div className="carouselContent">
          <div className="content">
            <button className="icon" onClick={prev}>
              <IoIosArrowBack />
            </button>
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
            <button className="icon" onClick={next}>
              <IoIosArrowForward />
            </button>
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
    width: 60%;
  }
  @media (max-width: 800px) {
    padding: 2rem 5rem;
  .carouselContent {
    width: 90%;
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
  .icon {
    margin-right: 1rem;
    font-size: 1.2rem;
    background: none;
    border: none;
  }

  button > *:hover {
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
