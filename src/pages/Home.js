import React from "react";
import Navbar from "../components/Sections/Navbar";
import Userinfo from "../components/Sections/Userinfo";
import Carousel from "../components/Carousel";
import Bestseller from "../components/Sections/Bestseller";
import styled from "styled-components";
import ProductDisplay from "../components/Sections/ProductDisplay";
import Advertisment from "../components/Sections/Advertisment"


const Home = () => {
  return (
    <StyledDiv>
      <Userinfo classname={"partial-width"} />
      <Navbar classname={"partial-width"} />
      <Carousel />
      <Bestseller classname={"partial-width"} />
      <ProductDisplay />
      <Advertisment />
    </StyledDiv>
  );
};

export default Home;
const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(auto-fill, max-content);
`;
