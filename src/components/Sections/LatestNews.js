import React from "react";
import styled from "styled-components";
import LatestCard from "../LatestCard";

const LatestNews = () => {
  return (
    <StyledDiv className="partial-width">
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
    </StyledDiv>
  );
};

export default LatestNews;
const StyledDiv = styled.div`
padding: 2rem 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
`;
