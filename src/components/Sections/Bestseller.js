import React from "react";
// import { IoLogoReddit } from "react-icons/io";
import BestsellerItem from "../BestsellerItem";
import styled from "styled-components";

const Bestseller = () => {
  return (
    <StyledSecion className="partial-width">
      <div className="content">
        <BestsellerItem
          imgUrl={"iphone6.png"}
          title={"Iphone 6"}
          description={"Lorem ipsum dolor sit amet consectetur "}
          price={"$399"}
          chosenClass={"bestsellerCard1"}
        />
        <BestsellerItem
          imgUrl={"oculus.png"}
          title={"Oculus Rift"}
          description={""}
          price={"$349"}
          chosenClass={"bestsellerCard2"}
        />
        <BestsellerItem
          imgUrl={"camcorder.png"}
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

  .content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    margin-bottom: 1.5rem;
  }

  h2 {
    text-align: center;
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

    .info {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin: 0 auto;
      width: 80%;
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
  @media (max-width: 500px) {
    .content {
      overflow-x: scroll;
    }
  }
`;
