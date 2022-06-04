import React from "react";
import styled from "styled-components";

const Advertisment = () => {
  // Automatically change advertised elements
  //   function next(){fetch()}
  // setInterval(next(), "10000s")

  return (
    <StyledDiv className="full-width">
      <div className="info">
        <p>Iphone 6 Plus</p>
        <small>performance and design. Taken right to the edge</small>
        <button>more</button>
      </div>
      <div className="imgDiv">
      <img src={require("../../images/iPhone6plus.png")} alt="Advertisment" />
      </div>
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
  justify-content: space-around;
  background-color: #2e90e5;
  overflow: hidden;

  @media (max-width: 800px) {
    justify-content: center;
  }
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
  p {
    font-size: 1rem;
    font-weight: 500;
  }
  .imgDiv {
    border: 1px solid red;
    position: absolute;
    top: -3.9rem;
    transform: translateY(3rem);
  }
  img {
    height: 120%;

    left: initial;
    /* align-self: flex-end; */
  }
`;
