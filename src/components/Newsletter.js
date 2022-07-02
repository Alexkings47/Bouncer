import React from "react";
import styled from "styled-components";
import SearchInput from "./Search";
import { AiOutlineClose } from "react-icons/ai";

const Newsletter = ({ close}) => {
  return (
    <StyledDiv>
      <div className="news-text">
        <h2>Newsletter</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ipsa.
        </p>
        <SearchInput
          buttonVal={"suscribe"}
          inputVal={"Email"}
          chosenClass={"suscribe"}
        />
        <input type="checkbox" value="true" />
        <p>Dont show this popup again</p>
      </div>

      <img
        src={require("../images/img.png")}
        className="news-image"
        alt="gift"
      />
      <button
        className="icon"
        onClick={close}
      >
        <AiOutlineClose />
      </button>
    </StyledDiv>
  );
};

export default Newsletter;

const StyledDiv = styled.div`
  height: 15rem;
  background: white;
  display: flex;
  align-items: stretch;
  position: absolute;
  top: 10rem;
  left: 50%;
  transform: translateX(-50%);

  .news-image {
    width: 45%;
    height: 100%;
  }

  .news-text {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 2rem 1rem;
  }

  .suscribe {
    width: 17rem;
  }
  .icon {
    position: absolute;
    top: 0;
    right: -8rem;
    transform: translateY(-50%) translateX(50%);
    font-size: 10px;
    border-radius: 50%;
    background: black;
    color: white;
    height: 1.2rem;
    width: 1.2rem;
    padding: 5px;
    text-align: center;
  }
`;
