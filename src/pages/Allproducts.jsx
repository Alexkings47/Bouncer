import React from "react";
import Userinfo from "../components/Sections/Userinfo";
import Navbar from "../components/Sections/Navbar";
import Footer from "../components/Sections/Footer";
import Copyright from "../components/Sections/Copyright";
import styled from "styled-components";
import AccessProducts from "../components/Sections/AccessProducts";
import CategoryBar from "../components/CategoryBar";

const Allproducts = () => {
  return (
    <StyledSection>
      <Userinfo />
      <Navbar />
      <CategoryBar />
      <AccessProducts />
      <Footer />
      <Copyright />
    </StyledSection>
  );
};

export default Allproducts;
const StyledSection = styled.section`
  display: grid;
  column-gap: 0;
  grid-template-columns: repeat(5, 1fr);
  /* grid-template-rows: repeat(auto-fill, max-content); */

 
`;
