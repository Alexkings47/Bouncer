import React from "react";
import styled from "styled-components";

const Copyright = () => {
  return (
    <StyledSection className="partial-width">
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
height: 2.5rem;

img {
height: 1.2rem;
}
small {
color: grey;
}
`;
