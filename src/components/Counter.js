import React, {useState} from 'react'
import styled from 'styled-components'
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Counter = () => {

    const [count, setCount] = useState(0)
   
function reduce(){
    if(count > 0){
        setCount(count-1)
    }else{
    setCount(0)
    }
}
   
function add(){
        setCount(count+ 1)
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
}

export default Counter
const StyledDiv = styled.div`
  min-width: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 3px;
  font-size: 12px;
  /* border: 1px solid black; */
  background-color: rgba(230, 230, 230, 0.7);
  /* filter: blur(2px); */
  padding: 5px 4px;

  button {
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #33a0ff;
  }
`;