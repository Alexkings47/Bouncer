import React from "react";
import Navbar from "../components/Sections/Navbar";
import Userinfo from "../components/Sections/Userinfo";
import DemoCarousel from "../components/DemoCarousel";
import Bestseller from "../components/Sections/Bestseller";
import styled from "styled-components";
import ProductDisplay from "../components/Sections/ProductDisplay";
import Advertisment from "../components/Sections/Advertisment";
import OurOffers from "../components/Sections/OurOffers";
import LatestNews from "../components/Sections/LatestNews";
import Featured from "../components/Sections/Featured";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Sections/Footer";
import Copyright from "../components/Sections/Copyright";

const Home = () => {
  return (
    <StyledDiv>
      <Userinfo classname={"partial-width"} />
      <Navbar classname={"partial-width"} />
      <DemoCarousel />
      <Bestseller classname={"partial-width"} />
      <ProductDisplay />
      <Advertisment />
      <OurOffers />
      <LatestNews />
      <Featured />
      <SearchBar />
      <Footer />
      <Copyright />
    </StyledDiv>
  );
};

export default Home;
const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(auto-fill, max-content);
`;
