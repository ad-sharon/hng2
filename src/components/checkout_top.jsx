import React from "react";
import cart from "../assets/images/cart.png";
import back from "../assets/images/back.png";

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
        <img
          src={back}
          style={{
            width: 24,
            height: 24,
          }}
        />
      </div>
      <div>
        <img
          src={cart}
          style={{
            width: 24,
            height: 24,
          }}
        />
      </div>
    </div>
  );
};

export default CheckoutTop;
