import React from "react";
import styled from "styled-components";
import FeaturedCard from "../FeaturedCard";

const LatestNews = () => {
  return (
    <StyledDiv className="partial-width">
      <h2>FEATURED PRODUCTS</h2>
      <div className="featured">
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
      </div>
    </StyledDiv>
  );
};

export default LatestNews;
const StyledDiv = styled.div`
  margin:2rem 0 4rem;

  .featured {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    justify-items: center;
  }

  h2 {
    font-size: large;
    margin: 0 auto 2rem;
    text-align: center;
  }
`;
