import React from "react";
import styled from "styled-components";
import { ImFacebook, ImTwitter } from "react-icons/im";

const Footer = () => {
  return (
    <StyledSection className="partial-width">
      <div className="top-footer">
        <div>
          <h2 class="title">BOUNCER</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ipsa.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ipsa.
          </p>
        </div>
        <div>
          <h4>Follow Us</h4>
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
            <li>Privacy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div>
          {" "}
          <ul className="footerItems">
            <h3>Services</h3>
            <li>About Us</li>
            <li>Information</li>
            <li>Privacy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div>
          {" "}
          <ul className="footerItems">
            <h3>Extras</h3>
            <li>About Us</li>
            <li>Information</li>
            <li>Privacy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div>
          {" "}
          <ul className="footerItems">
            <h3>My Account</h3>
            <li>About Us</li>
            <li>Information</li>
            <li>Privacy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div>
          {" "}
          <ul className="footerItems">
            <h3>Useful Links</h3>
            <li>About Us</li>
            <li>Information</li>
            <li>Privacy</li>
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
    height: 6rem;
  }
  @media (max-width: 800px) {
    .top-footer,
    .bottom-footer {
      height: 10rem;
    }
  }

  .top-footer {
    border-bottom: 0.5px solid #ebf3f7;
  }
  .top-footer > div {
    padding: 0 5rem 0 0;
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
  }
  .title {
    color: grey;
  }
`;
