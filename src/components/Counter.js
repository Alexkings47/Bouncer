import React, {useState} from 'react'
import styled from 'styled-components'

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
        <button className="control__btn" onClick={reduce}>-</button>
        <p>{count}</p>
      <button className="control__btn" onClick={add}>+</button>
    </StyledDiv>
  );
}

export default Counter
const StyledDiv = styled.div`
width: 5rem;
display: flex;
align-items: center;
border-radius: 3px;

`