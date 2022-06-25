import React from "react";
import Userinfo from "../components/Sections/Userinfo";
import Navbar from "../components/Sections/Navbar";
import Footer from "../components/Sections/Footer";
import Copyright from "../components/Sections/Copyright";
import Cart from "../components/Sections/Cart";
import styled from "styled-components";

const Checkout = () => {
  return (
    <StyledMain>
      <Userinfo  />
      <Navbar  />
      <Cart  />
      <Footer  />
      <Copyright  />
    </StyledMain>
  );
};

export default Checkout;
const StyledMain = styled.main`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(auto-fill, max-content);
`;
