import React from "react";
import styled from "styled-components";
import useOutsideAlerter from "../OutsideAlerter";
import { Link } from "react-router-dom";
import ListDiv from "../ListDiv";

const Navbar = () => {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useOutsideAlerter(false);
  const Links = [
    { name: "Home", path: "/" },
    { name: "Store", path: "" },
    { name: "IpHONE", path: "" },
    { name: "IPAD", path: "" },
    { name: "MACBOOK", path: "" },
    { name: "ACCESORIES", path: "/allproducts" },
  ];

  const NewLinks = Links.map((link, index) => {
    return (
      <Link to={link.path} key={index}>
        <li
          ref={ref}
          key={index}
          onClick={() => setIsComponentVisible(!isComponentVisible)}
        >
          {link.name}
        </li>
      </Link>
    );
  });
  return (
    <StyledNav isComponentVisible={isComponentVisible} className={"partial-width"}>
      <h2>Bouncer</h2>
      <ul className="nav-parent">{NewLinks}</ul>
      <div className="nav-menu">
        <ListDiv
          title={"ACCESSORIES"}
          values={[
            "Airpoint & Wireless",
            "Apple Car",
            " Business & Secuirity",
            "Bags, Shells & Sleeves",
            "Cables & Docks",
            "charging devices",
            "Car & Travel",
            "Cases & Films",
          ]}
          classChosen={"accessories"}
        />
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
  padding: 1rem 0;
  grid-column: 2/5;
  grid-row: 2/3;
  position: relative;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .nav-parent > li{
    font-size: 14px;
    font-weight: 500;
  }
  .nav-menu {
    display: ${(props) => (props.isComponentVisible ? "grid" : "none")};
    grid-template-columns: minmax(min-content, 2fr) minmax(min-content, 2fr) minmax(
        min-content,
        1fr
      );
    grid-gap: 30px;
    min-width: 70vw;
    padding: 1rem;
    background-color: white;
    text-transform: capitalize;
    border-radius: 3.5px;
    margin-top: 1rem;
    z-index: 3;

    ul {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      height: 11rem;
      align-content: space-between;
    }
    h3 {
      color: var(--grey);
      font-weight: 500;
      font-size: 18px;
    }
    li {
      padding-top: 20px;
      font-size: 12px;
    }
  }
  @media (max-width: 900px) {
    .nav-menu {
      grid-template-columns: 1fr 1fr;

      ul {
        height: auto;
      }
    }
  }
  .nav-parent {
    display: flex;
    justify-content: space-between;
    align-items: center;

    li {
      margin-right: 1.5rem;
    }
  }
  .nav-menu:hover {
    display: grid;
  }
  a {
    color: black;
    text-decoration: none;
  }
  li,
  a {
    font-weight: 500;
    font-size: 14px;
    line-height: 16.8px;
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
