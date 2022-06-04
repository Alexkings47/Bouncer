import React from "react";
import styled from "styled-components";
import FeaturedCard from "../FeaturedCard";

const LatestNews = () => {
  return (
    <StyledDiv className="partial-width">
        {/* <h3>FEATURED</h3> */}
      <FeaturedCard
        price={499}
        title={"Typesetting industry"}
        imgUrl={"guage.png"}
      />
      <FeaturedCard
        price={499}
        title={"Typesetting industry"}
        imgUrl={"tv.png"}
      />
      <FeaturedCard
        price={499}
        title={"Typesetting industry"}
        imgUrl={"headset.png"}
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
