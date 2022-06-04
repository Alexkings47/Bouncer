import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <StyledNav>
      <h2>Bouncer</h2>
      <ul>
        <li>Home</li>
        <li>Store</li>
        <li>IpHONE</li>
        <li>IPAD</li>
        <li>MACBOOK</li>
        <li>ACCESORIES</li>
      </ul>
    </StyledNav>
  );
};

export default Navbar;

const StyledNav = styled.nav`
  width: 500px;
  height: 7rem;
  text-transform: uppercase;
  margin: 0 auto;
  font-weight: 400;
  font-size: 12px;
  padding: 1rem 0;
  grid-column: 2/5;
  grid-row: 2/3;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style-type: none;

    & > li {
      margin-right: 1.5rem;
      font-size: 14px;
      font-family: "proxima sans";

      &:hover,
      &:active {
        color: #2d85e3;
        cursor: pointer;
      }
    }
  }

  h2 {
    color: #ff4252;
    font-size: 24px;
    font-weight: 700;
  }
`;
