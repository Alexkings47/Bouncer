import React from "react";
import styled from "styled-components";


const Advertisment = () => {
  function next() {}
  return (
    <StyledDiv className="full-width">
      <div className="info">
        <p>Iphone 6 Plus</p>
        <small>performance and design. Taken right to the edge</small>
        <button>more</button>
      </div>
      <img src={require("../../images/iphone6.png")} alt="Advertisment" />
    </StyledDiv>
  );
};

export default Advertisment;
const StyledDiv = styled.div`
  height: 300px;
  padding: 2rem 4rem 0 4rem;
  background-color: #8f65ff;
  display: flex;
  position: relative;
  justify-content: center;
  background-color: #2e90e5;

  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    color: white;
    height: 10rem;
    
    padding: 2rem;

    button {
      color: white;
      border-bottom: 2px solid white;
      text-transform: uppercase;
      padding: 0 0 3px 0;
       border: none;
    background: transparent;
    }
  }

   img {
    height: 80%;
    align-self: flex-end;
  }


`;
