import React from "react";
import Userinfo from "../components/Sections/Userinfo";
import Navbar from "../components/Sections/Navbar";
import styled from "styled-components";
import ProductDetails from "../components/Sections/ProductDetails";
import Footer from "../components/Sections/Footer";
import RelatedProducts from "../components/RelatedProducts";

const ProductPage = () => {
  return (
    <StyledDiv>
      <Userinfo />
      <Navbar />
      <ProductDetails />
      <RelatedProducts />
      <Footer />
    </StyledDiv>
  );
};

export default ProductPage;
const StyledDiv = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(auto-fill, max-content);
`;
