import React from "react";
// import { IoLogoReddit } from "react-icons/io";
import BestsellerItem from "../BestsellerItem";
import styled from "styled-components";

const Bestseller = () => {
  return (
    <StyledSecion className="partial-width">
      <div className="content">
        <BestsellerItem
          imgUrl={"pic.png"}
          title={"Iphone 6"}
          description={"Lorem ipsum dolor sit amet consectetur "}
          price={"$399"}
          chosenClass={"bestsellerCard1"}
        />
        <BestsellerItem
          imgUrl={"oculus-min.png"}
          title={"Oculus Rift"}
          description={""}
          price={"$349"}
          chosenClass={"bestsellerCard2"}
        />
        <BestsellerItem
          imgUrl={"camcorder-min.png"}
          title={"GoPro Hero 6"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit"
          }
          price={"$299"}
          chosenClass={"bestsellerCard3"}
        />
      </div>
      <h2>BEST SELLER</h2>
    </StyledSecion>
  );
};

export default Bestseller;

const StyledSecion = styled.section`
  padding-block: 1rem;
  margin-top: -2.8rem;
  /* min-width: 699px; */

  .content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    margin-bottom: 1.5rem;
    max-height: 13rem;
  }

  h2 {
    text-align: center;
    font-size: 30px;
    font-weight: 400;
  }
  .bestsellerCard1 {
    background-color: #ff6875;
    color: white;

    img {
      height: 100%;
      position: absolute;
      bottom: 0;
      right: 5px;
    }
  }
  .bestsellerCard2 {
    background-color: #f6f7f8;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .info {
      flex-direction: row;
      justify-content: space-around;
      align-items: center;

      width: 100%;
    }
  }
  .bestsellerCard3 {
    background-color: #c1c8ce;

    .info {
      height: 60%;
    }

    img {
      position: absolute;
      bottom: 10px;
      right: -10px;
      width: 7rem;
      height: 60%;
    }
  }
  @media (max-width: 700px) {
    width: 100%;
    padding: 0;
    /* border: 1px solid red; */
    .content {
      overflow-x: scroll;
    }
  }
  @media (max-width: 550px) {
    margin-top: 1rem;
  }
`;
