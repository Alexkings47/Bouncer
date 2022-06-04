import React from 'react'
import styled from 'styled-components';
import { AiFillStar } from "react-icons/ai";

const Star = () => {
    const [isClicked, setIsClicked] = React.useState(false);

    function fill() {
      setIsClicked(!isClicked);
    }
  return (
   
      <StyledButton onClick={fill} isClicked={isClicked}>
        <AiFillStar class="icon" />
      </StyledButton>
  
  );
}

export default Star

const StyledButton = styled.button`
  .icon {
    font-size: 10px;
    /* color: green; */

    color: ${({ isClicked }) => (isClicked ? "gold" : "#ebf3f7")};
  }
`;

