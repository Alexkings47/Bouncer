import React from "react";
import styled from "styled-components";
import Button from "../Button";

const Advertisment = () => {
  // Automatically change advertised elements
  //   function next(){fetch()}
  // setInterval(next(), "10000s")

  return (
    <StyledDiv className="full-width">
      <div className="info">
        <p>Iphone 6 Plus</p>
        <small>performance and design. Taken right to the edge</small>
        <Button value={"More"} />
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
  font-family: "Proxima Nova Extra Condensed Light";

  @media (max-width: 900px) {
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
  }
  p {
    font-size: 26px;
    font-weight: 100;
  }
  .imgDiv {
  
  }
  img {
    height: 140%;
    width: 125%;
    left: initial;
    /* align-self: flex-end; */
  }
`;
