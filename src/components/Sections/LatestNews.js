import React from "react";
import styled from "styled-components";
import LatestCard from "../LatestCard";

const LatestNews = () => {
  return (
    <StyledDiv className="partial-width">
      <h2>LATEST NEWS</h2>
      <div className="latestCards">
        <LatestCard
          date={"01 jan, 2022"}
          title={"Typesetting industry"}
          imgUrl={"latestphone1.png"}
        />
        <LatestCard
          date={"01 jan, 2022"}
          title={"Typesetting industry"}
          imgUrl={"latestlaptop.png"}
        />
        <LatestCard
          date={"01 jan, 2022"}
          title={"Typesetting industry"}
          imgUrl={"latestphone2.png"}
        />
      </div>
    </StyledDiv>
  );
};

export default LatestNews;
const StyledDiv = styled.div`
  margin: 1rem 0 3rem;
  /* padding: 1rem 0 3rem; */

  .latestCards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    grid-gap: 2rem;
  }
  h2 {
    font-size: large;
    margin: 0 auto 2rem;
    text-align: center;
  }
`;
