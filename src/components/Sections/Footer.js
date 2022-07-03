import React from "react";
import styled from "styled-components";
import { ImFacebook, ImTwitter } from "react-icons/im";

const Footer = () => {
  return (
    <StyledSection className="partial-width">
      <div className="top-footer">
        <div>
          <h2 className="title">BOUNCER</h2>
          <p className="small-footer-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever.Since the 1500s, when an unknown printer.
          </p>
        </div>
        <div>
          <h3 className="heading3">Follow Us</h3>
          <p className="small-footer-text">
            Since the 1500s, when an unknown printer took a gallery of type and
            scrambled
          </p>

          <div>
            <ImFacebook className="icons-1" />
            <ImTwitter className="icons-2" />
          </div>
        </div>
        <div>
          <h3 className="heading3">Contact Us</h3>
          <p className="small-footer-text">
            My Company , 4578 Marmora Road, Glasgow D04 89GR Call us now:
            0123-456-789 Email: support@whatever.com
          </p>
        </div>
      </div>
      <div className="bottom-footer">
        <div>
          <ul className="footerItems">
            <h3 className="heading3">Information</h3>
            <li>About Us</li>
            <li>Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div>
          {" "}
          <ul className="footerItems">
            <h3 className="heading3">Services</h3>
            <li>About Us</li>
            <li>Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div>
          {" "}
          <ul className="footerItems">
            <h3 className="heading3">Extras</h3>
            <li>About Us</li>
            <li>Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div>
          {" "}
          <ul className="footerItems">
            <h3 className="heading3">My Account</h3>
            <li>About Us</li>
            <li>Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div>
          {" "}
          <ul className="footerItems">
            <h3 className="heading3">Useful Links</h3>
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
    padding: 2rem 0 1.5rem;
    margin: 0 auto;
    height: 14rem;
  }
  .top-footer {
    border-bottom: 0.5px solid #ebf3f7;
  }

  .small-footer-text {
    font-size: 12px;
  }

  .top-footer > div {
    padding: 0 5rem 0 0;
    min-height: 8rem;
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
    color: #385c8e;
  }
  .icons-2 {
    margin-right: 2rem;
    color: var(--light-blue);
  }
  ul {
    list-style-type: none;
    font-size: 14px;
  }

  .title {
    color: var(--grey);
    font-weight: 600;
    /* font-size: 18px; */
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
`;
