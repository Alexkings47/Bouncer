import React from "react";
import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import styled from "styled-components";
import { TiShoppingCart } from "react-icons/ti";
import { IoMdArrowDropdown } from "react-icons/io";

const Userinfo = () => {
  return (
    <StyledDiv>
      <div>
        <div className="select-area">
          <select>
            <option>EN</option>
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
        <a href="/profile" className="userData">
          <AiOutlineUser className="icon white" /> <span>My Profile</span>
        </a>
        <a className="userData" href="/checkout">
          <TiShoppingCart className="icon" /> <span>items</span>
        </a>
        <a href="#searchBar" className="userData search">
          <AiOutlineSearch className="icon" />
        </a>
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
  border-bottom: 1px solid #7c7c7c;
  text-transform: capitalize;
  font-size: 13.5px;
  font-weight: 500;
  grid-column: 1/ -1;
  font-size: 12px;
  font-weight: 200;

  & > div {
    display: flex;
    width: 100%;
    justify-content: center;
  }
  a {
    color: black;
    text-decoration: none;
    font-size: 12px;
    font-weight: 200;
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
    appearance: none;
    width: 2rem;
    transition: 0.1s;
    text-align: right;
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
