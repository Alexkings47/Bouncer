import React from "react";
import styled from "styled-components";
import OffersItem from "../OffersItem";

const OurOffers = () => {
  return (
    <StyledDiv className="partial-width">
      <OffersItem imgUrl={"shipping.png"} title={"FREE SHIPPING"} />
      <OffersItem imgUrl={"refund.png"} title={"100% REFUND"} />
      <OffersItem imgUrl={"support.png"} title={"SUPPORT"} />
    </StyledDiv>
  );
};

export default OurOffers;
const StyledDiv = styled.div`
  margin: 4rem 0 3rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  justify-items: center;
`;
