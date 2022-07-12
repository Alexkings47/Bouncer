import React from "react";
import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import styled from "styled-components";
import { TiShoppingCart } from "react-icons/ti";
import { IoMdArrowDropdown } from "react-icons/io";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Userinfo = () => {
  const cartArr = useSelector((state) => state.cart.cartArr);

  return (
    <StyledDiv>
      <div>
        <div className="select-area">
          <select>
            <option className="option">EN</option>
            <option>FR</option>
            <option>CH</option>
            <option>IG</option>
          </select>
          <IoMdArrowDropdown className="arrow" />
        </div>
        <div className="select-area">
          <select>
            <option>USD</option>
            <option>NGN</option>
            <option>AUD</option>
          </select>
          <IoMdArrowDropdown className="arrow" />
        </div>
      </div>
      <div className="user-right">
        <Link to="/profile" className="userData">
          <AiOutlineUser className="icon white" /> <span>My Profile</span>
        </Link>
        <Link className="userData" to="/checkout">
          <TiShoppingCart className="icon" />{" "}
          <span>{cartArr.length} items</span>
        </Link>
        <Link to="#searchBar" className="userData search">
          <AiOutlineSearch className="icon" />
        </Link>
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

  .user-right > * {
    margin-right: 20px;
  }
  .search {
    margin-left: 10px;
  }

  select {
    border: none;
    font-weight: 200;
    letter-spacing: -1px;

    transition: 0.1s;
    text-align: right;
    width: 40px;
    background-image: none;

    background-color: transparent;
    color: inherit; /* 1 */
    font: inherit; /* 2 */
    letter-spacing: inherit; /* 2 */
    padding: 0.25em 0.375em;
  }
  option {
    font-size: 16px;
  }
  select:focus {
    outline: none;
  }
  .select-area {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
  }

  .arrow {
    font-size: 16px;
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
