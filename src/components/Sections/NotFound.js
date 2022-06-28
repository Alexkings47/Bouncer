import React from "react";
import styled from "styled-components";

const NotFound = () => {
  return (
    <StyledSection>
      <h2>404</h2>
      <p>NotFound</p>
    </StyledSection>
  );
};

export default NotFound;
export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  color: rgb(68, 68, 68);

  h2 {
    font-size: 35px;
  }
`;
