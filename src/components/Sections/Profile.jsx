import React from "react";
import styled from "styled-components";
import ListDiv from "../ListDiv";

const Profile = () => {
  return (
    <StyledSection>
      <ListDiv
        classChosen={"list box-shadow"}
        values={[
          `orders`,
          `inbox`,
          `pending reviews`,
          `Bouncer Coupon`,
          `Saved Items`,
          `Recently Viewed`,
        ]}
      />
    </StyledSection>
  );
};

export default Profile;
const StyledSection = styled.section`
  .list {
    padding: 1rem 0;
    display: flex;
    justify-content: space-between;

    & > *{
        margin-top: 1rem;
    }
  }
`;
