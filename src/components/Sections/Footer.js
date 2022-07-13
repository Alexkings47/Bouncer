import React from "react";
import styled from "styled-components";
import { ImFacebook, ImTwitter } from "react-icons/im";
import ListDiv from "../ListDiv";
import {FooterList, Footer_map} from "../Data"

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
       {Footer_map.map((item, index)=>{
        return (
          <ListDiv
            values={FooterList}
            title={"information"}
            classChosen={"bottom-footer"}
            key={index}
          />
        );
       })
        
        }
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
    min-height: 14rem;

    .heading {
      font-size: 18px;
      font-weight: 500;
    }
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
    padding-right: 5px;
    margin-bottom: 2rem;
  }
  .footerItems,
  .top-footer > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    list-style-type: none;
    font-size: 14px;
  }
  .footerItems > li {
    margin-top: 1rem;
    cursor: pointer;
  }
  .icons-1 {
    margin-right: 1rem;
    color: #385c8e;
  }
  .icons-2 {
    margin-right: 2rem;
    color: var(--light-blue);
  }

  .title {
    color: var(--grey);
    font-weight: 600;
  }

  @media (max-width: 900px) {
    * {
      font-size: 120%;
    }
    .top-footer {
      flex-direction: column;
      align-items: flex-start;
    }
    .top-footer > div {
      padding: 0 5rem 2rem 0;
      min-height: 10rem;
    }
    .bottom-footer {
      flex-wrap: wrap;
      align-content: space-between;
    }
    .small-footer-text {
      font-size: 15px;
    }
    ul > li {
      font-size: 16px;
    }
    .heading3 {
      font-size: 18px;
      font-weight: bold;
    }
  }
`;
