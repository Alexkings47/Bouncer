import React from "react";
import styled from "styled-components";
import useOutsideAlerter from "./OutsideAlerter";

import { Data } from "./Data";

const Thumb = ({ id }) => {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useOutsideAlerter(false);

  const ThumbArr = [];
  for (let j = 0; j < 4; j++) {
    let thumb = (
      <img
        src={require(`../images/${Data[id].imgUrl}`)}
        alt={Data[id].title}
        className="thumb"
        key={j}
        ref={ref}
        onClick={() => setIsComponentVisible(!isComponentVisible)}
      />
    );

    ThumbArr.push(thumb);
  }

 

  return (
    <StyledDiv isComponentVisible={isComponentVisible}>
      {" "}
      {Data[id].thumb != null
        ? Data[id].thumb.map((item, index) => {
            return (
              <img
                src={require(`../images/${item}`)}
                alt={Data[id].title}
                className="thumb"
                key={index}
                ref={ref}
                onClick={() => setIsComponentVisible(!isComponentVisible)}
              />
            );
          })
        : ThumbArr}
    </StyledDiv>
  );
};

export default Thumb;
const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .thumb {
    width: 23%;
    padding: 5px 2px;
    border: 1px solid #70707071;
  }
  .thumb_border {
    outline: 2px solid ${(props) => props.isComponentVisible? "red": "var(--light-blue)"};
  }
`;
