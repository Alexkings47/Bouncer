import React from "react";
import styled from "styled-components";
import Star from "./Star";

const FeaturedCard = ({ imgUrl, title, price }) => {
  const [oldPrice, setOldPrice] = React.useState(0);

  React.useEffect(() => setOldPrice(parseInt(price) + 100), [price]);

  return (
    <StyledDiv>
      <img src={require(`../images/${imgUrl}`)} alt={title} />
      <div className="info">
        <h3>{title}</h3>
        <div>
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </div>
        <p>
          ${price} <s>${oldPrice}</s>
        </p>
      </div>
    </StyledDiv>
  );
};

export default FeaturedCard;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 35%;
  }
  .info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  h3 {
    margin-bottom: 15px;
  }
  s {
    color: grey;
  }
  button {
    border: none;
    background: none;
  }
`;
