import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ShopAllPage from "./pages/ShopAllPage";
import SkincarePage from "./pages/SkincarePage";
import SetKitsPage from "./pages/SetKitsPage";
import MakeupPage from "./pages/MakeupPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ShopAllPage />} />
        <Route path="/addcart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/skincare" element={<SkincarePage />} />
        <Route path="/makeup" element={<MakeupPage />} />
        <Route path="/setkits" element={<SetKitsPage />} />
        <Route path="/byconcern" element={<ShopAllPage />} />
      </Routes>
    </Router>
  );
}

export default App;
