import React from "react";
import styled from "styled-components";
import Userinfo from "../components/Sections/Userinfo";
import Navbar from "../components/Sections/Navbar";
import Footer from "../components/Sections/Footer";
import Copyright from "../components/Sections/Copyright";
import { useSelector } from "react-redux/es/exports";
import LikedItem from "../components/LIkedItem";

const Wishlist = () => {
  const {products} = useSelector((state) => state.products);
const likeArr  = products.filter((item)=> item.isLiked === true)

  return (
    <StyledMain>
      <Userinfo />
      <Navbar />
      <div className="like-div partial-width">
        {likeArr.map((item, index) => {
          return (
            <LikedItem
              imgUrl={item.imgUrl}
              title={item.title}
              price={item.price}
              id={item.id}
              key={index}
            />
          );
        })}
      </div>
      <Footer />
      <Copyright />
    </StyledMain>
  );
};

export default Wishlist;
const StyledMain = styled.main`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(auto-fill, max-content);

  .like-div {
    padding-top: 4rem;
    text-transform: capitalize;
    min-height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    
  }
`;
