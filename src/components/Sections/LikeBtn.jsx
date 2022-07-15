import React, { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import styled from "styled-components";
import { like, unlike } from "../../features/CartSlice";
import { useDispatch } from "react-redux";

const LikeBtn = ({ classChosen, id }) => {
  const [likeFill, setLikeFill] = useState(false);
  const dispatch = useDispatch();

  function setLike() {
    setLikeFill(!likeFill);
    dispatch(likeFill ? unlike(id) : like(id));
  }
  return (
    <StyledButton className={classChosen} onClick={setLike} likeFill={likeFill}>
      <AiFillHeart
        style={{
          color: likeFill ? "#33a0ff" : "var(--grey)",
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
