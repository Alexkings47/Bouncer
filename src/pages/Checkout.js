import React from "react";
import Userinfo from "../components/Sections/Userinfo";
import Navbar from "../components/Sections/Navbar";
import Footer from "../components/Sections/Footer";
import Copyright from "../components/Sections/Copyright";
import Cart from "../components/Sections/Cart";

const Checkout = () => {
  return (
    <div>
      <Userinfo classname={"partial-width"} />
      <Navbar classname={"partial-width"} />
      <Cart classname={"partial-width"} />
      <Footer classname={"partial-width"} />
      <Copyright classname={"partial-width"} />
    </div>
  );
};

export default Checkout;
