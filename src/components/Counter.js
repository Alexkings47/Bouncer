import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Counter = () => {
  const [count, setCount] = useState(0);
  function reduce() {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(0);
    }
  }

  function add() {
    setCount(count + 1);
  }

  return (
    <StyledDiv>
      <button className="control__btn" onClick={reduce}>
        <AiOutlineMinus />
      </button>
      <p>{count}</p>
      <button className="control__btn" onClick={add}>
        <AiOutlinePlus />
      </button>
    </StyledDiv>
  );
};

export default Counter;
const StyledDiv = styled.div`
  width: 6rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 3rem;
  border: 1px solid red;
  border-radius: 3px;
  font-size: 14px; 
  background-color: rgba(230, 230, 230, 0.7);
  /* filter: blur(2px); */
  padding: 6px 5px;

  button {
    font-size: 14px;
    color: #33a0ff;
    display: flex;
    align-items: center;
  }
`;
