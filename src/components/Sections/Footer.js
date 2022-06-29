import React from "react";
import styled from "styled-components";
import { ImFacebook, ImTwitter } from "react-icons/im";

const Footer = () => {
  return (
    <StyledSection className="partial-width">
      <div className="top-footer">
        <div>
          <h2 className="title">BOUNCER</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ipsa.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ipsa.
          </p>
        </div>
        <div>
          <h3>Follow Us</h3>
          <p>
            Since the 1500s, when an unknown printer took a gallery of type and
            scrambled
          </p>

          <div>
            <ImFacebook className="icons-1" />
            <ImTwitter className="icons-2" />
          </div>
        </div>
        <div>
          <h3>Contact Us</h3>
          <p>
            My Company , 4578 Marmora Road, Glasgow D04 89GR Call us now:
            0123-456-789 Email: support@whatever.com
          </p>
        </div>
      </div>
      <div className="bottom-footer">
        <div>
          <ul className="footerItems">
            <h3>Information</h3>
            <li>About Us</li>
            <li>Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div>
          {" "}
          <ul className="footerItems">
            <h3>Services</h3>
            <li>About Us</li>
            <li>Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div>
          {" "}
          <ul className="footerItems">
            <h3>Extras</h3>
            <li>About Us</li>
            <li>Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div>
          {" "}
          <ul className="footerItems">
            <h3>My Account</h3>
            <li>About Us</li>
            <li>Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div>
          {" "}
          <ul className="footerItems">
            <h3>Useful Links</h3>
            <li>About Us</li>
            <li>Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
      </div>
    </StyledSection>
  );
};

export default Footer;

const StyledSection = styled.section`
  .top-footer,
  .bottom-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: left;
    padding: 20px 0;
    margin: 0 auto;
    height: 9.5rem;
    font-size: 12px;
    font-family: "proxima sans";
  }
  .top-footer {
    border-bottom: 0.5px solid #ebf3f7;
    height: 7.5rem;
  }

  h3 {
    font-size: 18px;
  }
  .top-footer > div {
    padding: 0 5rem 0 0;
    min-height:8rem;
  }
  @media (max-width: 1100px) {
    .top-footer,
    .bottom-footer {
      height: 11rem;
    }
  }
  @media (max-width: 900px) {
    .top-footer > div {
      padding: 0 2rem 0 0;
    }
  }

  .bottom-footer > div {
    height: 100%;
  }
  .footerItems,
  .top-footer > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    height: 90%;
    flex: 1;
  }
  .icons-1 {
    margin-right: 1rem;
    color: darkblue;
  }
  .icons-2 {
    margin-right: 2rem;
    color: lightblue;
  }
  ul {
    list-style-type: none;
    font-weight: 300;
    font-size: 14px;
  }
  p {
    font-weight: 300;
    font-size: 14px;
  }
  .title {
    color: grey;
  }
`;
