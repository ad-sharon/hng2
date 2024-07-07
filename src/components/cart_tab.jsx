import React from "react";
import search from "../assets/images/search.png";
import cart from "../assets/images/cart.png";
import CartItem from "./cart_item";

const CartTab = () => {
  return (
    <div
      style={{
        width: 1200,
        height: 525,
        top: 420,
        left: 120,
        gap: 16,
        position: "absolute",
      }}
    >
      <div
        style={{
          width: 1199,
          height: 32,
          top: 426,
          left: "119px",
          justifyContent: "space-between",
          display: "flex",
        }}
      >
        <div
          style={{
            width: "352px",
            height: "26px",
            top: "425.75px",
            left: "119px",
            gap: "22px",
            display: "flex",
            backgroundColor: "#f8f8f8",
          }}
        >
          <a
            style={{
              fontFamily: "Kanit",
              fontWeight: "400",
              fontSize: "24px",
              lineHeight: "26px",
              letterSpacing: "0.12px",
              textAlign: "center",
              color: "#473838",
            }}
          >
            Cart
          </a>
        </div>

        {/* search,cart */}
        <div
          style={{
            width: 85,
            height: 24,
            alignItems: "flex-end",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div className="Search" style={{ width: 24, height: 24 }}>
            <img src={search} alt="" />
          </div>
          <div className="UilCart" style={{ width: 24, height: 24 }}>
            <img src={cart} alt="" />
          </div>
        </div>
      </div>
      <div>
        <CartItem />
      </div>
      <div>
        <CartItem />
      </div>
    </div>
  );
};

export default CartTab;
