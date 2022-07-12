import React from "react";
import styled from "styled-components";
import SearchInput from "./Search";
import { AiOutlineClose } from "react-icons/ai";

const Newsletter = ({ close }) => {
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
        src={require("../images/img-min.png")}
        className="news-image"
        alt="gift"
      />
      <button className="icon" onClick={close}>
        <AiOutlineClose />
      </button>
    </StyledDiv>
  );
};

export default Newsletter;

const StyledDiv = styled.div`
  height: 17rem;
  background: white;
  display: flex;
  align-items: stretch;
  position: absolute;
  top: 10rem;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 3px;

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
    width: 18rem;
  }
  .icon {
    position: absolute;
    top: 0;
    left: 100%;
    transform: translateY(-50%) translateX(-50%);
    font-size: 10px;
    border-radius: 50%;
    background: black;
    color: white;
    height: 1.2rem;
    width: 1.2rem;
    padding: 5px;
    text-align: center;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    height: 25rem;

    top: 50%;
    transform: translate(-50%, -50%);
    .news-image {
      width: 100%;
      height: 40%;
    }

    .news-text {
      height: 60%;
    }
  }
`;
