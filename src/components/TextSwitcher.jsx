import React, { useState } from "react";
import styled from "styled-components";
import { Text } from "../api/Data";

const TextSwitcher = ({chosenClass}) => {
  const [activeName, setActiveName] = useState();

  return (
    <StyledDiv className={chosenClass}>
      <ul>
        <li
          onClick={() => setActiveName(1)}
          className={activeName === 1 ? "list_border" : ""}
        >
          Product Information
        </li>
        <li
          onClick={() => setActiveName(2)}
          className={activeName === 2 ? "list_border" : ""}
        >
          Reviews
        </li>
        <li
          onClick={() => setActiveName(3)}
          className={activeName === 3 ? "list_border" : ""}
        >
          Another tab
        </li>
      </ul>
      <p className="text">{Text}</p>
    </StyledDiv>
  );
};

export default TextSwitcher;
const StyledDiv = styled.div`
  grid-column: 1/-1;
  min-height: 10rem;
  background-color: #fafafb;
  padding: 1rem 0;

  .text {
    font-size: 14px;
    padding: 1.5rem;
  }
  ul {
    display: flex;
    border-bottom: 2px solid #e5e8ea;
    align-items: flex-end;

    li {
      margin-left: 2rem;
      padding-block: 1.5rem;
      border-bottom: 2px solid transparent;
    }
  }
  .list_border {
    border-bottom: 2px solid var(--light-blue);
  }
`;
