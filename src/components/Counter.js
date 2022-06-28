import React, {useState} from 'react'
import styled from 'styled-components'
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Counter = ({getCount}) => {

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
    <StyledDiv onClick={getCount(count)}>
      <button className="control__btn" onClick={ count => reduce(count)}>
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
  padding: 6px 5px;

  button {
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #33a0ff;
  }
`;