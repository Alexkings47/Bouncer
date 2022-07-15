import React from "react";
import styled from "styled-components";
import layi from "../../images/layi.jpg";

const NotFound = () => {
  return (
    <StyledSection>
      <h1>404</h1>
      <p>Cant find what you are looking for.<br/> Check the url.</p>
    </StyledSection>
  );
};

export default NotFound;
export const StyledSection = styled.section`
  background: url(${layi}) no-repeat 50% 50% / 20rem;
  background-color: var(--pink);
  height: 100vh;
  /* background-position:  left bottom;
  background-size: contain; */
  display: flex;
  font-size: 20px;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  min-height: 80vh;
  color: white;
  color: var(--light-blue);

  h1 {
    font-size: 80px;
    letter-spacing: 10px;
  }
`;
