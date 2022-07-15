import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const BestsellerItem = ({ chosenClass, title, imgUrl, description, price }) => {
  return (
    <StyledDiv className={chosenClass}>
      <img src={require(`../images/${imgUrl}`)} alt={title} />
      <div className="info">
        <p className="title">{title}</p>
        <p className="desc">{description}</p>
        <p className="price">{price}</p>
      </div>
    </StyledDiv>
  );
};

BestsellerItem.propTypes = {
  chosenClass: PropTypes.string,
  title: PropTypes.string,
  imgUrl:PropTypes.string,
  description:PropTypes.string ,
  price:PropTypes.string
};
export default BestsellerItem;
const StyledDiv = styled.div`
  padding: 10px;
  position: relative;
  overflow: hidden;
  min-width: 213px;

  .info {
    display: flex;
    flex-direction: column;
    height: 80%;
    justify-content: space-between;
    width: 55%;
  }
  .title {
    font-size: 24px;
    font-weight: 500;
  }
  .price {
    font-size: 24px;
  }
  .desc {
    font-size: 12px;
  }
  img {
    width: 13rem;

    height: 80%;
    float: right;
  }

  @media (max-width: 500px) {
    width: 15rem;
  }
`;
