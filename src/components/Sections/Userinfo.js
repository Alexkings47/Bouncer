import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { ImUser } from "react-icons/im";
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
        <div className="userData">
          <ImUser className="icon white" /> <span>My Profile</span>
        </div>
        <div className="userData">
          <TiShoppingCart className="icon" /> <span>items</span>
        </div>
        <div className="userData search">
          <AiOutlineSearch className="icon" />
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
  border-bottom: 2px solid #fafafb;
  text-transform: capitalize;
   font-size: 13.5px;
  font-weight: 500;
  grid-column: 1/ -1;
  font-size: 13px;
  font-weight: 200;

  & > div {
    display: flex;
    width: 100%;
    justify-content: center;
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
    font-size: 13px;
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
  .full-width {
    grid-column: 1/ -1;
    grid-row: 2/3;
  }
`;
