import React from "react";
import styled from "styled-components";

const Copyright = () => {
  return (
    <StyledSection className="full-width">
      <small>&copy; 2018 Ecommerce theme by www.bisenbaev.com</small>
      <img src={require("../../images/Brands.png")} alt="payment brands" />
    </StyledSection>
  );
};

export default Copyright;
const StyledSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 2px solid #fafafb;
  height: 3.5rem;
  padding: 1.5rem 18rem 3rem;

  @media (max-width: 800px) {
    padding: 1.5rem 5rem 3rem;
  }

  img {
    height: 1.2rem;
  }
  small {
    color: grey;
  }
`;
