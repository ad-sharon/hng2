import React from "react";
import cart from "../assets/images/cart.png";
import back from "../assets/images/back.png";
import { Link } from "react-router-dom";

const CheckoutTop = () => {
  return (
    <div
      style={{
        width: 1200,
        display: "flex",
        flexDirection: "row",
        left: 121,
        top: 146,
        position: "absolute",
        justifyContent: "space-between",
      }}
    >
      <div>
        <Link to="/">
          <img
            src={back}
            style={{
              width: 24,
              height: 24,
            }}
          />
        </Link>
      </div>
      <div>
        <Link to="/cart">
          <img
            src={cart}
            style={{
              width: 24,
              height: 24,
            }}
          />
        </Link>
      </div>
    </div>
  );
};

export default CheckoutTop;
