import "./App.css";
import Home from "./pages/Home";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Checkout from "./pages/Checkout";
import NotFound from "./components/Sections/NotFound";
import ProductPage from "./pages/ProductPage";
import Allproducts from "./pages/Allproducts";
import Wishlist from "./pages/Wishlist";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "./features/ProductsReducer";
import SignIn from "./pages/SignIn";

function App() {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const { setProducts } = productActions;


  useEffect(() => {
    (async () => {
      if (!products.length) {
        const res = await fetch("/response.json").then((r) => r.json());
        dispatch(setProducts(res.data));
      }
    })();
  }, [dispatch, setProducts, products.length]);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/likedItems" element={<Wishlist />} />
          <Route path="/details" element={<ProductPage />} />
          <Route path="/profile" element ={<SignIn />} />
          <Route path="/allproducts" element={<Allproducts />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/not-found" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
