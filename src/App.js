import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ShopAllPage from "./pages/ShopAllPage";
import SkincarePage from "./pages/SkincarePage";
import SetKitsPage from "./pages/SetKitsPage";
import MakeupPage from "./pages/MakeupPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import { CartProvider } from "./cart_context";
import DetailsPage from "./pages/DetailsPage";
import Success from "./components/success";

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<ShopAllPage />} />
          <Route path="/product/details/:unique_id" element={<DetailsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/skincare" element={<SkincarePage />} />
          <Route path="/makeup" element={<MakeupPage />} />
          <Route path="/setkits" element={<SetKitsPage />} />
          <Route path="/byconcern" element={<ShopAllPage />} />
          <Route path="/success" element={<Success />}></Route>
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
