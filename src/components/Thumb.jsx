import React, {useState} from "react";
import styled from "styled-components";

import { Data } from "./Data";

const Thumb = ({ id }) => {
  
const [activeName, setActiveName] = useState();

  
const ThumbArr = ["first","second","third","fourth"];
 
 

  return (
    <StyledDiv >
      {" "}
      {Data[id].thumb != null
        ? Data[id].thumb.map((item, index) => {
            return (
              <img
                src={require(`../images/${item.thumbUrl}`)}
                alt={Data[id].title}
              
                onClick={()=> setActiveName(item.name)}
                className= {item.name === activeName? "thumb_border": "thumb"}
                key={index}
              />
            );
          })
        : ThumbArr.map((elem, index)=>{
            return (
              <img
                src={require(`../images/${Data[id].imgUrl}`)}
                alt={Data[id].title}
                onClick={() => setActiveName(elem)}
                className={elem === activeName ? "thumb_border" : "thumb"}
                key={index}
              />
            );
        })}
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
    outline: 2px solid var(--light-blue);
    width: 23%;
    padding: 5px 2px;
    border: 1px solid #70707071;
  }
`;
