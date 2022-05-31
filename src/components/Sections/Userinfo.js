import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { ImUser } from "react-icons/im";
import styled from "styled-components";
import {TiShoppingCart} from "react-icons/ti"

const Userinfo = () => {
  return (
    <StyledDiv>
      <div>
        <select className="userData">
          <option>EN</option>
          <option>FR</option>
          <option>CH</option>
          <option>IG</option>
        </select>
        <select className="userData">
          <option>USD</option>
          <option>NGN</option>
          <option>AUD</option>
        </select>
      </div>
      <div className="user-right">
        <div  className="userData">
          <ImUser className="icon white" /> <span>My Profile</span>
        </div>
        <div className="userData">
          <TiShoppingCart className="icon" /> <span>items</span>
        </div>
        <div  className="userData search">
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
  border-bottom: 0.5px solid rgba(189, 193, 199, 0.3);
  text-transform: capitalize;
  font-size: 13.5px;
  font-weight: 500;
  grid-column:1/ -1; 
  

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
    font-size: 12px;
    font-weight: 500;
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
