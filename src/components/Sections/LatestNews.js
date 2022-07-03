import React from "react";
import styled from "styled-components";
import LatestCard from "../LatestCard";

const LatestNews = () => {
  return (
    <StyledDiv className="partial-width">
      <p className="section-title">LATEST NEWS</p>
      <div className="mobile-items">
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
  margin: 1rem 0 4rem;

 
`;
