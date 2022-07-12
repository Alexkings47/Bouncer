import React from "react";
import styled from "styled-components";

const Copyright = () => {
  return (
    <StyledSection className="partial-width">
      <small>&copy; 2018 Ecommerce theme by www.bisenbaev.com</small>
      <small>&copy; Developed by Axel inc! </small>
      <img src={require("../../images/Brands-min.png")} alt="payment brands" />
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
  padding: 1.5rem 0 3rem;
  font-size: 14px;

  @media (max-width: 700px) {
    padding: 1.5rem 3rem 3rem;
  }
  img {
    height: 1.2rem;
  }
  small {
    color: grey;
  }
`;
