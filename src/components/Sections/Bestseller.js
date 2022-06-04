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
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, nesciunt."
          }
          price={"$399"}
          color={"#FF6875"}
        />
        <BestsellerItem
          imgUrl={"oculus.png"}
          title={"Oculus Rift"}
          description={""}
          price={"$349"}
          color={"#FFFFFF"}
        />
        <BestsellerItem
          imgUrl={"iphone6.png"}
          title={"GoPro Hero 6"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, nesciunt."
          }
          price={"$299"}
          color={"#C1C8CE"}
        />
      </div>
      <h3>BEST SELLER</h3>
    </StyledSecion>
  );
};

export default Bestseller;

const StyledSecion = styled.section`
  padding: 1rem;

  .content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
  }
  h3 {
    text-align: center;
  }
 
`;
