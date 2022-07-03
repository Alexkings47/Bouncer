import React from "react";
import styled from "styled-components";
import FeaturedCard from "../FeaturedCard";

const LatestNews = () => {
  return (
    <StyledDiv className="partial-width">
      <p className="section-title">FEATURED PRODUCTS</p>
      <div className="mobile-items">
        <FeaturedCard
          price={499}
          title={"Beats Solo 2 On EarHeadphones -Black"}
          imgUrl={"guage.png"}
        />
        <FeaturedCard
          price={499}
          title={"H-Squared tvTray"}
          imgUrl={"guage.png"}
        />
        <FeaturedCard
          price={499}
          title={"Netatmo Rain Gauge"}
          imgUrl={"headset.png"}
        />
      </div>
    </StyledDiv>
  );
};

export default LatestNews;
const StyledDiv = styled.div`
  margin: 2rem 0 4rem;

  
`;
