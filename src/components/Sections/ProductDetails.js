import React, { useState } from "react";
import styled from "styled-components";
import Star from "../Star";
import Button from "../Button";
import { useSelector } from "react-redux";
import { Data } from "../Data";
import ProductCard from "../ProductCard";
import BestsellerItem from "../BestsellerItem";
import ProductCounter from "../ProductCounter";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { ImFacebook, ImTwitter } from "react-icons/im";

const ProductDetails = () => {
  const [id, oldPrice] = useSelector((state) => state.value);

  const starArr = [];
  for (let i = 0; i < 4; i++) {
    let star = <Star key={i} />;
    starArr.push(star);
  }
  const ThumbArr = [];
  for (let j = 0; j < 4; j++) {
    let thumb = (
      <img
        src={require(`../../images/${Data[id].imgUrl}`)}
        alt={Data[id].title}
        className="thumb"
        key={j}
      />
    );

    ThumbArr.push(thumb);
  }

  const [values, setValues] = useState({
    isTrue: true,
    shipping: false,
    color: "",
  });

  function setColor(color) {
    setValues((prevItem) => {
      return { ...prevItem, [values.color]: color };
    });
  }

  return (
    <StyledDiv color={values.color}>
      <div className="category">Home/ Accessories/</div>
      <div className="grid-container">
        <div className="product-image">
          <img
            src={require(`../../images/${Data[id].imgUrl}`)}
            alt={Data[id].title}
            className="main-image"
          />
          <div className="thumbnails">
            {Data[id].thumb != null
              ? Data[id].thumb.map((item, index) => {
                  return (
                    <img
                      src={require(`../../images/${item}`)}
                      alt={Data[id].title}
                      className="thumb"
                      key={index}
                    />
                  );
                })
              : ThumbArr}
          </div>
        </div>
        {/*product description */}
        <div className="details-product-text">
          <p className="title">{Data[id].title}</p>

          {/* review stars and co */}
          <div className="review">
            <span className="star"> {starArr}</span>
            <small> 0 reviews</small>
            <p className="blue-text">Submit a review</p>
          </div>
          {/* price details */}
          <div className="price-details">
            <span className="price">$ {Data[id].price}</span>
            <s className="grey-text"> $ {oldPrice}</s>
          </div>
          <div className="stock">
            <div>
              {" "}
              <p>Availability:</p>
              <span>{values.isTrue ? "in stock" : "out of stock"}</span>
            </div>
            <div>
              <p> Category:</p>
              <span>{"type"}</span>
            </div>
            <div>
              <p>Free Shipping:</p>
              <span>{values.shipping ? "yes" : "no"}</span>
            </div>
          </div>
          <div className="color-div">
            <Button
              color={"blue"}
              classChosen={"color-picker"}
              handleClick={(color) => setColor(color)}
            />
            <Button color={"red"} classChosen={"color-picker"} />
            <Button color={"black"} classChosen={"color-picker"} />
            <Button color={"yellow"} classChosen={"color-picker"} />
          </div>
          <div className="size">
            Size
            <select>
              <option>XS</option>
              <option>L</option>
              <option>M</option>
            </select>
          </div>
          <div className="amount">
            <ProductCounter count={Data[id].count} id={Data[id].id} />
            <button className="cart-div">
              <div className="cart"></div>
              <p>Add to Cart</p>
              <AiOutlineShoppingCart />
            </button>
            <button className="like-btn">
              <AiOutlineHeart />
            </button>
          </div>
        </div>
        <div className="button-div">
          <Button classChosen={"facebook-btn"}>
            <ImFacebook className="icons-2" />
            <span> share on facebook</span>
          </Button>

          <Button classChosen={"twitter-btn"}>
            <ImTwitter className="icons-2" />
            <span> share on twitter</span>
          </Button>
        </div>
        <div className="text-switcher">
          <ul>
            <li>Product Information</li>
            <li>
              <span>Reviews</span> <span className="">0</span>
            </li>
            <li>Another tab</li>
          </ul>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ipsa.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
            officia blanditiis nihil vero voluptas delectus, laborum ipsa est
            consectetur quisquam sint, ad reiciendis voluptate, quia amet
            consequatur error iusto corrupti.
          </p>
          {/* <p className="desc"></p> */}
          {/* <p className="desc"></p> */}
        </div>
      </div>
      {/* right end articles */}
      <aside className="bestseller">
        <h3 className="grey-text">BEST SELLER</h3>
        <div className="product-items">
          <ProductCard
            title={Data[2].title}
            price={Data[2].price}
            imgUrl={Data[2].imgUrl}
            id={2}
          />
          <BestsellerItem
            imgUrl={"camcorder.png"}
            title={"GoPro Hero 6"}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit"
            }
            price={"$299"}
            chosenClass={"bestsellerCard3"}
          />
        </div>
      </aside>
    </StyledDiv>
  );
};

export default ProductDetails;
const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  flex-wrap: wrap;

  .category {
    background-color: #f6f7f8;
    width: 100%;
    text-align: center;
    padding: 5px;
  }
  .grid-container {
    display: grid;
    min-width: 55%;
    grid-template-columns: 18rem 25rem;
    grid-template-rows: repeat(3, max-content);
    gap: 1rem;
    margin-left: 3rem;
    padding: 2rem 0 2rem 3rem;
    justify-content: space-between;
  }

  .product-image {
    width: 100%;

    .thumbnails {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .thumb {
      width: 23%;
      height: 3.9rem;
      padding: 5px 2px;
      border: 1px solid #70707071;
    }
    .thumb:focus {
      border: 1px solid red;
    }
    .main-image {
      width: 100%;
      object-fit: cover;
      /* height: 8rem; */
    }
  }

  .details-product-text {
    flex-direction: column;
    align-items: center;
    /* border: 1px solid red; */

    & > div {
      border-bottom: 1px solid #f6f7f8;
      padding: .5rem 0;
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }
    & > div > * {
      margin-right: 1rem;
    }
    .stock {
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;

      div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;

        span {
          align-self: flex-end;
          width: 40%;
        }
      }
    }
    .color-div {
      border-bottom: none;
    }
    .blue-text {
      color: #33a0ff;
      cursor: pointer;
    }
    .title {
      font-size: 20px;
      font-weight: 500;
    }
    .price-details {
      * {
        font-size: 20px;
      }

      .price {
        color: #ff4858;
      }
    }
    .review {
    }

    .amount {
      justify-content: space-between;
    }
  }
  .button-div {
    grid-column: 2/3;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding-bottom: 1rem;

    .facebook-btn,
    .twitter-btn {
      background-color: #385c8e;
      width: 11rem;
      padding: 0.5rem;
      font-size: 14px;
      font-weight: 500;
      text-transform: capitalize;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
    .twitter-btn {
      background-color: #33a0ff;
    }
  }

  .text-switcher {
    grid-column: 1/-1;
    grid-row: 3/4;
    background-color: #fafafb;

    ul {
      display: flex;
      border-bottom: 2px solid #e5e8ea;
      align-items: flex-end;

      li {
        margin-right: 2rem;
        height: 2rem;
      }
      li:visited {
        border-bottom: 2px solid var(--light-blue);
      }
    }
    .text {
      font-size: 14;
    }
  }
  .cart-div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 3px;
    width: 8rem;
    padding: 0.5rem 1.2rem;
    color: #33a0ff;
    position: relative;
  }
  .cart {
    width: 100%;
    position: absolute;
    height: 100%;
    border-radius: 2px;
    background-color: rgba(51, 160, 255, 0.3);
    filter: blur(1px);
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .like-btn {
    width: 2rem;
    background-color: rgba(51, 160, 255, 0.3);
    color: #33a0ff;
    height: 2rem;
  }
  /* select size */
  select {
    width: 5rem;
    height: 2rem;
    margin-left: 2rem;
    text-indent: 0.4rem;
    font-size: 12px;
    -webkit-appearance: none;
    -moz-appearance: none;
    background: transparent;
    background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
    background-repeat: no-repeat;
    background-position-x: 100%;
    background-position-y: 50%;
    border: 1px solid #dfdfdf;
    border-radius: 2px;
  }
  .product-items {
    max-width: 15rem;
  }
  /* best seller and product card at far right */
  .bestseller {
    width: 210px;
    margin-right: 8rem;
  }
  .bestsellerCard3 {
    background-color: #c1c8ce;
    height: 270px;
    margin-top: 1rem;
    .info {
      height: 70%;
    }

    img {
      position: absolute;
      bottom: 10px;
      right: -10px;
      width: 10rem;
      height: 10rem;
    }
  }

  @media (max-width: 900px) {
    .bestseller {
      margin-right: 0;
    }
    .grid-container {
      margin-left: 0;
    }
  }
`;
