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

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/likedItems" element={<Wishlist />} />
          <Route path="/details" element={<ProductPage />} />
          <Route path="/allproducts" element={<Allproducts />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/not-found" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
