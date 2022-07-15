import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { update } from "../features/Details";
import PropTypes from "prop-types";
import LikeBtn from "./Sections/LikeBtn";

const LikedItem = ({ imgUrl, title, price, id }) => {
  const dispatch = useDispatch();

  return (
    <StyledDiv>
      {/* <div className="product"> */}
        <LikeBtn classChosen={"like-btn"} id={id} />
        <Link to="/details">
          <img
            src={require(`../images/${imgUrl}`)}
            alt={title}
            onClick={() => dispatch(update([id]))}
          />
        </Link>
        <p className="title">{title}</p>
      {/* </div> */}
      <p>{price}</p>
    </StyledDiv>
  );
};

LikedItem.propTypes = {
  imgUrl: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.string,
  id: PropTypes.number,
  count: PropTypes.number,
};
export default LikedItem;
const StyledDiv = styled.div`
  display: grid;
  align-items: center;
  width: 60%;
  justify-content: space-between;
  grid-template-columns: 1fr 2fr 1fr 1fr;
  justify-items: start;
  border: 1px solid #c6c8c9;
  padding: 10px 0;

  .product {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .like-btn {
    background-color: transparent;
    height: 100%;
    font-size: 16px;
  }
  img {
    width: 10rem;
    padding: 0 0.5rem;
  }
  p {
    font-size: 14px;
  }
  .title {
    font-size: 14px;
  }
`;
