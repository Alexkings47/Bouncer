import React from "react";
import styled from "styled-components";
import { ImFacebook, ImTwitter } from "react-icons/im";

const Footer = () => {
  return (
    <StyledSection className="partial-width">
      <div className="top-footer">
        <div>
          <h3 class="title">BOUNCER</h3>
          <p>
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
          <h3>Information</h3>
          <ul>
            <li>About Us</li>
            <li>Information</li>
            <li>Privacy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div>
          {" "}
          <h3>Services</h3>
          <ul>
            <li>About Us</li>
            <li>Information</li>
            <li>Privacy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div>
          {" "}
          <h3>Extras</h3>
          <ul>
            <li>About Us</li>
            <li>Information</li>
            <li>Privacy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div>
          {" "}
          <h3>My Account</h3>
          <ul>
            <li>About Us</li>
            <li>Information</li>
            <li>Privacy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div>
          {" "}
          <h3>Useful Linkd</h3>
          <ul>
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
    height: 7rem;
  }
  .top-footer {
    border-bottom: 0.5px solid #ebf3f7;
  }
  .top-footer > div {
    padding: 0 3rem 0 0;
  }

  .top-footer > div,
  .bottom-footer > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
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
  }
  .title{
      color:grey;
  }
`;
