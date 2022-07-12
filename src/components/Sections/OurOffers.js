import React from "react";
import styled from "styled-components";
import OffersItem from "../OffersItem";

const OurOffers = () => {
  return (
    <StyledDiv className="mobile-items partial-width">
      <OffersItem imgUrl={"shipping-min.png"} title={"FREE SHIPPING"} />
      <OffersItem imgUrl={"refund-min.png"} title={"100% REFUND"} />
      <OffersItem imgUrl={"support-min.png"} title={"SUPPORT"} />
    </StyledDiv>
  );
};

export default OurOffers;
const StyledDiv = styled.div`
  margin: 4rem 0;
`;
