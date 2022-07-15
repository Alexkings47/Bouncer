import React from "react";
import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import styled from "styled-components";
import { TiShoppingCart } from "react-icons/ti";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SelectBar from "../SelectBar";
import { AiFillHeart } from "react-icons/ai";

const Userinfo = () => {
  const cartArr = useSelector((state) => state.cart.cartArr);
  const likedItems = useSelector((state) => state.cart.likeArr);

  return (
    <StyledDiv>
      <div>
        <SelectBar options={["FR", "CH", "IG"]} />
        <SelectBar options={["USD", "NGN", "AUD"]} />
      </div>
      <div className="user-right">
        <Link to="/profile" className="userData">
          <AiOutlineUser className="icon white" /> <span>My Profile</span>
        </Link>
        <Link className="userData" to="/checkout">
          <TiShoppingCart className="icon" />{" "}
          <span>{cartArr?.length} items</span>
        </Link>
        <Link to="#searchBar" className="userData search">
          <AiOutlineSearch className="icon" />
        </Link>
        <div className="userData">
          <Link to="/likedItems">
            <button
              className="like-btn"
              color={
                likedItems?.length > 0 ? "var(--light-blue)" : "#70707049;"
              }
            >
              <AiFillHeart />
            </button>
          </Link>
          <p>{likedItems?.length}</p>
        </div>
      </div>
    </StyledDiv>
  );
};

export default Userinfo;

const StyledDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  height: 2rem;
  border-bottom: 1px solid #70707049;
  text-transform: capitalize;
  font-size: 13.5px;
  font-weight: 400;
  grid-column: 1/ -1;
  font-size: 12px;

  & > div {
    display: flex;
    width: 100%;
    justify-content: center;
  }
  a {
    color: black;
    text-decoration: none;
  }
  .userData {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .like-btn {
    background-color: transparent;
    height: 100%;
    font-size: 16px;
    color: var(--light-blue);
    width: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .user-right > * {
    margin-right: 20px;
  }
  .search {
    margin-left: 10px;
  }

  select {
    border: none;
    text-align: center;
  }

  .icon {
    font-size: 16px;
    margin-right: 5px;
  }
  .icon:hover {
    transform: scale(1.1);
  }
  .full-width {
    grid-column: 1/ -1;
    grid-row: 2/3;
  }
`;
