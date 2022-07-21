import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import Star from "../Star";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { productActions } from "../../features/ProductsReducer";
import { Color_small } from "../../api/Data";
import ProductCounter from "../ProductCounter";
import ColorPicker from "../ColorPicker";
import Thumb from "../Thumb";
import TextSwitcher from "../TextSwitcher";
import SelectBar from "../SelectBar";
import SideProducts from "../SideProducts";
import DetailsButtonDiv from "../DetailsButtonDiv";
import CartButton from "../CartButton";
import LikeBtn from "../LikeBtn";
import { useLocation, useNavigate } from "react-router-dom";
import { addToCart, updateCount } from "../../features/CartSlice";

const ProductDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const { id } = useSelector((state) => state.value);
  const cartArr = useSelector((state) => state.cart.cartArr);
  const { toggleLikeProducts } = productActions;

  const starArr = [];
  for (let i = 0; i < 4; i++) {
    let star = <Star key={i} />;
    starArr.push(star);
  }

  const [values] = useState({
    isTrue: true,
    shipping: false,
  });

  useEffect(() => {
    if (!location?.state) {
      // simulate a get request
      const item = new URLSearchParams(window.location.search);
      if (item.get("itemName")) {
        const res = products?.find(
          (el) => el?.id.toString() === item.get("itemName").toString()
        );
        if (res) setProduct(res);
        // on fail go back to where you came from
        else navigate("/");
      }
    } else {
      setProduct(location?.state);
    }
  }, [location, navigate, products]);

  const cartArrElem = cartArr.find((elem) => elem.id === product?.id);

  const cartCount = cartArrElem?.count;

  function handleUpdate(newCount) {
    return cartArrElem
      ? dispatch(updateCount({ count: newCount, id: product?.id }))
      : setProduct({ ...product, count: newCount });
  }

  return (
    <>
      {!product ? (
        "loading..."
      ) : (
        <StyledDiv className={"full-width"} thumbBorder={values.border}>
          {/* <CategoryBar /> */}
          <div className="grid-container">
            <div className="product-image">
              <img
                src={require(`../../images/${product?.imgUrl}`)}
                alt={product.title}
                className="main-image"
              />
              <Thumb id={product?.id} />
            </div>
            {/*product description */}
            <div className="details-product-text">
              <p className="title">{product?.title}</p>

              {/* review stars and co */}
              <div className="review">
                <span className="star"> {starArr}</span>
                <small> 0 reviews</small>
                <p className="blue-text">Submit a review</p>
              </div>
              {/* price details */}
              <div className="price-details">
                <span className="price">$ {product.price}</span>
                <s className="grey-text"> $ {product.price + 100}</s>
              </div>
              <div className="stock">
                <div>
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
                {Color_small.map((colorItem, index) => {
                  return <ColorPicker color={colorItem} key={index} />;
                })}
              </div>
              <div className="size">
                Size
                <SelectBar options={["XS", "L", "M"]} />
              </div>
              <div className="amount">
                <ProductCounter
                  count={cartCount || product?.count}
                  id={product?.id}
                  stateArr={cartArrElem}
                  handleUpdate={handleUpdate}
                />
                <div className="right-div-amount">
                  <CartButton onClick={() => dispatch(addToCart(product))} />
                  <LikeBtn
                    isLiked={product.isLiked}
                    onClick={() => {
                      dispatch(toggleLikeProducts({ id }));
                    }}
                  />
                </div>
              </div>
            </div>
            <DetailsButtonDiv chosenClass={"button-div"} />
            <TextSwitcher chosenClass={"text-switcher"} />
          </div>
          {/* right end articles */}
          <SideProducts chosenClass={"bestseller"} />
        </StyledDiv>
      )}
    </>
  );
};

export default ProductDetails;
const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  flex-wrap: wrap;

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
  .right-div-amount {
    display: flex;
    align-items: stretch;
    justify-items: flex-end;
  }

  .product-image {
    width: 100%;

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

  /* select size */
  select {
    height: 2rem;
    margin-left: 2rem;
    text-indent: 0.4rem;
    font-size: 12px;
    background: transparent;
    background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
    background-repeat: no-repeat;
    background-position-x: 100%;
    background-position-y: 50%;
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
      grid-template-columns: 1fr;
      row-gap: 2rem;
      justify-content: center;
    }
    .button-div {
      grid-column: 1/-1;
    }
  }
`;
