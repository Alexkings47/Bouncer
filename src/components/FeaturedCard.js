import React from "react";
import styled from "styled-components";
import Star from "./Star";
import PropTypes from "prop-types";

const FeaturedCard = ({ imgUrl, title, price }) => {
  const [oldPrice, setOldPrice] = React.useState(0);

  React.useEffect(() => setOldPrice(parseInt(price) + 100), [price]);

  return (
    <StyledDiv>
      <img src={require(`../images/${imgUrl}`)} alt={title} />

      <div className="info">
        <p className="title">{title}</p>
        <div>
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </div>
        <p className="price">
          ${price} <s>${oldPrice}</s>
        </p>
      </div>
    </StyledDiv>
  );
};

FeaturedCard.propTypes = {
  imgUrl: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number.isRequired,
};
export default FeaturedCard;

const StyledDiv = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;

  img {
    width: 45%;
    
  }
  .price {
    font-size: 16px;
  }
  .info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    width: 55%;
  }
  .title {
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: 600;
  }
  .price {
    color: #ff4858;
    margin-right: 1rem;
  }
  s {
    color: grey;
    font-size: 16px;
  }
  
  @media (max-width:550px) {
    img{
      margin-left: -1rem;
      width: 40%;
    }
  }
`;
