import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <StyledNav>
      <h2>Bouncer</h2>
      <ul className="nav-parent">
        <li>Home</li>
        <li>Store</li>
        <li>IpHONE</li>
        <li>IPAD</li>
        <li>MACBOOK</li>
        <li>ACCESORIES</li>
      </ul>
      <div className="nav-menu">
        <div>
            <h3>Category</h3>
          <ul>
            <li>Airpoint & Wireless</li>
            <li>AppleCare</li>
            <li>Business & Secuirity</li>
            <li>Bags, Shells & Sleeves</li>
            <li>Cables & Docks</li>
            <li>Cameras & Video</li>
            <li>Car & Travel</li>
            <li>Cases & Films</li>
          </ul>
        </div>
        <div>
            <h3>Category</h3>
          <ul>
            <li>Charging Devices</li>
            <li>Connected Home</li>
            <li>Device Care</li>
            <li>Display & Graphic</li>
            <li>Fitness & Sport</li>
            <li>Headphones</li>
            <li>Healthkit</li>
          </ul>
        </div>
        <div>
            <h3>Category</h3>
          <ul>
            <li>Mice & Keyboards</li>
            <li>Music Creation</li>
            <li>Networking & Server</li>
          </ul>
        </div>
      </div>
    </StyledNav>
  );
};

export default Navbar;

const StyledNav = styled.nav`
  width: 500px;
  max-height: 17rem;
  text-transform: uppercase;
  margin: 0 auto;
  font-weight: 400;
  font-size: 12px;
  padding: 1rem 0;
  grid-column: 2/5;
  grid-row: 2/3;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .nav-menu {
    display: none;
    grid-template-columns: 2fr 2fr 1fr;
    grid-gap: 35px;
    width: 800px;
    padding: 1rem 3rem 1rem 1rem;
    background-color: white;
    text-transform: capitalize;
    border-radius: 3.5px;
    margin-top: 1rem;

    div {
    }

    ul {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      height: 11rem;
      align-content: space-between;
    }
    h3 {
      color: #c1c8ce;
    }
    li {
      padding-top: 20px;
    }
  }
  @media (max-width: 800px) {
    .nav-menu {
      width: 650px;
    }
  }
  .nav-parent {
    display: flex;
    justify-content: space-between;
    align-items: center;

    li {
      margin-right: 1.5rem;
    }
    .nav-parent:hover .nav-menu {
      display: block;
    }
  }

  li {
    font-size: 13px;
    font-family: "proxima sans";

    &:hover,
    &:active {
      color: #2d85e3;
      cursor: pointer;
    }
  }

  h2 {
    color: #ff4252;
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 2rem;
  }
`;
