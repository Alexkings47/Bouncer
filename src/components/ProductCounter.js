import React from "react";
import styled from "styled-components";
import { plus, minus } from "../features/CartSlice";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useDispatch } from "react-redux";

const ProductCounter = ({ count, id }) => {
  const dispatch = useDispatch();

  
  return (
    <StyledDiv>
      <button className="control__btn" onClick={() => dispatch(minus(id))}>
        <AiOutlineMinus />
      </button>
      <p>{count}</p>
      <button
        className="control__btn"
        onClick={() => {
          dispatch(plus(id));
        }}
      >
        <AiOutlinePlus />
      </button>
    </StyledDiv>
  );
};

export default ProductCounter;
const StyledDiv = styled.div`
  min-width: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 3px;
  font-size: 12px;
  /* border: 1px solid black; */
  background-color: rgba(230, 230, 230, 0.511);
  /* filter: blur(2px); */
  padding: 6px 5px;
  * {
    margin-right: 0;
  }

  button {
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #33a0ff;
  }
`;
