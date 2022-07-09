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
import ColorPicker from "../ColorPicker";
import { increment } from "../../features/CartSlice";
import { useDispatch } from "react-redux";

const ProductDetails = () => {
  const [id, oldPrice] = useSelector((state) => state.value);
  const cartArr = useSelector((state) => state.cart.cartArr);
  const dispatch = useDispatch();


  const cartArrCount = cartArr.find((elem) => elem.id === id);
  const [countVal] =  useState(cartArrCount === undefined ? Data[id].count : cartArrCount.count);
  {cartArrCount && console.log(cartArrCount.count)}
  
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

  const color = ["red", "blue", "yellow", "black"];

  const [values, setValues] = useState({
    isTrue: true,
    shipping: false,
    border: false,
  });

  function toggleBorder() {
    setValues((prevValue) => {
      return { ...prevValue, border: !values.border };
    });
  }

  return (
    <StyledDiv className={"full-width"}>
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
            {color.map((colorItem, index) => {
              return <ColorPicker color={colorItem} key={index} />;
            })}
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
            <ProductCounter
              count={countVal}
              id={Data[id].id}
              stateArr={cartArrCount}
            />
            <div className="right-div-amount">
              <button
                className="cart-div"
                onClick={() => dispatch(increment(id))}
              >
                <p>Add to Cart</p>
                <AiOutlineShoppingCart />
              </button>
              <button className="like-btn">
                <AiOutlineHeart />
              </button>
            </div>
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
            <li onClick={toggleBorder} style={{ borderBottom: "red" }}>
              Product Information
            </li>
            <li onClick={toggleBorder}>
              <span>Reviews</span> <span className="">0</span>
            </li>
            <li onClick={toggleBorder}>Another tab</li>
          </ul>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ipsa.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
            officia blanditiis nihil vero voluptas delectus, laborum ipsa est
            consectetur quisquam sint, ad reiciendis voluptate, quia amet
            consequatur error iusto corrupti. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Nisi, ipsa. Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Fugit officia blanditiis nihil
            vero voluptas delectus, laborum ipsa est consectetur quisquam sint,
            ad reiciendis voluptate, quia amet consequatur error iusto corrupti.
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
    padding: 2rem 1rem;
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
      padding: 5px 2px;
      border: 1px solid #70707071;
    }
    .thumb:focus {
      border: 1px solid red;
    }
    .main-image {
      width: 100%;
      object-fit: cover;
    }
  }

  .details-product-text {
    flex-direction: column;
    align-items: center;
    /* border: 1px solid red; */

    & > div {
      border-bottom: 1px solid #f6f7f8;
      padding: 0.5rem 0;
      display: flex;
      align-items: center;
      justify-content: flex-start;
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
      border-bottom: none;
      * {
        font-size: 20px;
      }

      .price {
        color: #ff4858;
      }
    }

    .review > *,
    .price-details * {
      margin-right: 1rem;
    }

    .amount {
      justify-content: space-between;
    }
  }
  /* socila media buttons */
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
      padding: 0.5rem 1rem;
      font-size: 13px;
      font-weight: 600;
      text-transform: capitalize;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
    .twitter-btn {
      background-color: #33a0ff;
    }
  }
  .right-div-amount {
    display: flex;
    align-items: center;
    justify-items: flex-end;
  }
  .cart-div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 3px;
    width: 8rem;
    margin-right: 1rem;
    padding: 0.5rem 1.2rem;
    color: #33a0ff;
    background-color: rgba(51, 160, 255, 0.3);
    position: relative;
  }

  .like-btn {
    width: 2rem;
    background-color: rgba(51, 160, 255, 0.3);
    color: #33a0ff;
    height: 2rem;
  }

  .text-switcher {
    grid-column: 1/-1;
    min-height: 10rem;
    background-color: #fafafb;

    ul {
      display: flex;
      border-bottom: 2px solid #e5e8ea;
      align-items: flex-end;

      li {
        margin-left: 2rem;
        padding-block: 1.5rem;
      }
    }
    .text {
      font-size: 14px;
      padding: 1.5rem;
    }
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

  /* best seller and product card at far right */
  .bestseller {
    width: 210px;
    margin-right: 8rem;
  }
  .bestsellerCard3 {
    background-color: #c1c8ce;
    height: 300px;
    width: 210px;
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

  @media (max-width: 1200px) {
    .bestseller {
      margin-right: 1rem;
    }
    .grid-container {
      margin-left: 0;
    }
  }
  @media (max-width: 1000px) {
    justify-content: center;

    .grid-container,
    .bestseller {
      width: 90%;
    }
    .bestseller {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    }
    .product-items {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 100%;
      padding: 2rem 0;
    }
  }
  @media (max-width: 800px) {
    .grid-container {
      grid-template-columns: 90%;
      justify-content: center;
      row-gap: 2rem;
      /* justify-items: center; */
    }
    .button-div {
      grid-column: 1/-1;
    }
  }
`;
