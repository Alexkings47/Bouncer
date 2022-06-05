import React from "react";
import styled from "styled-components";

const BestsellerItem = ({
  classname,
  title,
  imgUrl,
  display,
  description,
  color,
  price,
  textcolor,
}) => {
  return (
    <StyledDiv
      className={classname}
      style={{
        backgroundColor: color,
        color: textcolor,
        flexDirection: display,
      }}
    >
      <img src={require(`../images/${imgUrl}`)} alt={title} />

      <div className="info">
        <p>{title}</p>
        <small>{description}</small>
        <p>{price}</p>
      </div>
    </StyledDiv>
  );
};

export default BestsellerItem;
const StyledDiv = styled.div`
  padding: 15px 0 0 10px;
 
 

  .partial-width {
  }
  .info {
    display: flex;
    flex-direction: column;
    height: 80%;
    justify-content: space-between;
    /* text-align: left; */
    
  }
  .row{
  flex-direction:row;  
  }

  img {
    width: 8rem;
    float: right;
  }
`;
