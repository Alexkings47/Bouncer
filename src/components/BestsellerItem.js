import React from "react";
import styled from "styled-components";

const BestsellerItem = ({ classname,title, imgUrl, description, color, price}) => {
  return (
    <StyledDiv className={classname}  style={{ backgroundColor: color }}>
      <div className="info">
        <p>{title}</p>
        <small>{description}</small>
        <p>{price}</p>
      </div>
      {/* <img src={require(`../images/${imgUrl}.png`)} alt={title} /> */}
      <img src={require (`../images/${imgUrl}`)} />
    </StyledDiv>
  );
};

export default BestsellerItem;
const StyledDiv = styled.div`
  padding: 15px 0 0 10px;
  
.partial-width{
    
}
  .info {
  
  }
  img{
      width: 5rem;
      float: right;
  }
`;
