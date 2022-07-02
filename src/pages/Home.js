import React, { useState } from "react";
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
import SearchBar from "../components/Sections/SearchBar";
import Footer from "../components/Sections/Footer";
import Copyright from "../components/Sections/Copyright";
import Newsletter from "../components/Newsletter";

const Home = () => {
  const [popup, setPopup] = useState(false);

  React.useEffect(() => {
    setTimeout(function () {
      setPopup(true);
    }, 5000);
  }, []);

  // const timer = setTimeout(function () {
  //   setPopup(true);
  // }, 5000);

  function close() {
    setPopup(false);
    clearTimeout(
      setTimeout(function () {
        setPopup(true);
      }, 5000)
    );
  }

  return (
    <StyledDiv popup={popup}>
      {popup && (
        <div className="popBackground">
          {" "}
          <Newsletter close={close} />
        </div>
      )}
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

  .popBackground {
    height: 100vh;
    width: 100%;
    position: fixed;
    z-index: 20;
    backdrop-filter: blur(1px);
    background-color: rgba(0, 0, 0, 0.3);
  }
  @media (max-width: 1100px) {
    /* justify-content: center;/ */
  }
`;
