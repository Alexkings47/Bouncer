import React from "react";
import styled from "styled-components";
import DemoCarousel from "../DemoCarousel";
import Bestseller from "./Bestseller";
import Navbar from "./Navbar";
import Userinfo from "./Userinfo";

const Header = () => {
  return (
    <StyledHeader>
      <Userinfo />
      <Navbar />
      <DemoCarousel />
      <Bestseller />
    </StyledHeader>
  );
};

export default Header;
const StyledHeader = styled.header``;
