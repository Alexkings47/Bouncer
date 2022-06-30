import React from "react";
import Userinfo from "../components/Sections/Userinfo";
import Navbar from "../components/Sections/Navbar";
import Container from "../components/Container";
import styled from "styled-components";
import ProductDetails from "../components/Sections/ProductDetails";

const ProductPage = () => {
  return (
    <StyledSection>
      <Container>
        {" "}
        <Userinfo classname={"partial-width"} />
        <Navbar classname={"partial-width"} />
        <ProductDetails />
      </Container>
    </StyledSection>
  );
};

export default ProductPage;
const StyledSection = styled.section``;
