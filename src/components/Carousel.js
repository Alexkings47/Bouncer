import React from "react";
import styled from "styled-components";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { CarouselImage } from "./Data";
import Button from "./Button";

const Carousel = () => {
  const [slide, setSlide] = React.useState(0);

  function prev() {
    if (slide === 0) {
        return;
      }else {
        setSlide(slide - 1);
      }
    
  }

  function next() {
    if (slide + 1 >= CarouselImage.length) {
        return;
      }  else {
        setSlide( slide + 1);
     }
   
  }

  return (
    <StyledDiv className="full-width">
      <div className="content">
        <button className="icon" onClick={prev}>
          <IoIosArrowBack />
        </button>
        <div className="info">
          <h2>{CarouselImage[slide].name}</h2>
          <small>{CarouselImage[slide].desc}</small>
          <Button value={"more"} classChosen={"carouselButton"}/>
        </div>
      </div>
      <div className="content">
        <img
          src={require(`../images/${CarouselImage[slide].imgUrl}`)}
          alt="carousel"
        />
        <button className="icon" onClick={next}>
          <IoIosArrowForward />
        </button>
      </div>
    </StyledDiv>
  );
};

export default Carousel;
const StyledDiv = styled.div`
  height: 450px;
  background: linear-gradient(to right, #ff4858, #8f65ff);
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 18rem;

  @media (max-width: 800px) {
    padding: 2rem 5rem;
  }

  .carouselButton{
    font-size: 13px;
  } .content {
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
