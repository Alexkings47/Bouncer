import React from "react";
import { AiFillHeart } from "react-icons/ai";
import styled from "styled-components";

const LikeBtn = ({ isLiked, onClick, classChosen, ...props }) => {
  return (
    <StyledButton
      type="button"
      className={classChosen}
      onClick={onClick}
      {...props}
    >
      <AiFillHeart
        style={{
          color: isLiked ? "#33a0ff" : "var(--grey)",
        }}
      />
    </StyledButton>
  );
};

export default LikeBtn;
const StyledButton = styled.button`
  width: 2rem;
  background-color: #33a0ff16;
  /* color: #33a0ff; */
  height: 40px;
  & * {
  }
`;
