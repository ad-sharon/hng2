import React from "react";
import search from "../assets/images/search.png";
import cart from "../assets/images/cart.png";
import CartItem1 from "./cart_item1";
import CartItem2 from "./cart_item2";
import CartSide from "./cart_side";

const CartMain = () => {
  return (
    // all div
    <div
      style={{
        width: 1200,
        height: 525,
        top: 420,
        left: 120,
        gap: 16,
        display: "flex",
        flexDirection: "column",
        position: "absolute",
      }}
    >
      {/* cart tab div */}
      <div
        style={{
          width: 1199,
          height: 32,
          justifyContent: "space-between",
          display: "flex",
          flexDirection: "row",
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
      {/* cart tab div end */}

      <div
        style={{
          width: 1200,
          height: 465,
          gap: 120,
          display: "flex",
          flexDirection: "row",
        }}
      >
        {/* 2 cart items */}
        <div
          style={{
            width: 1200,
            height: 465,
            gap: 41,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              width: 767,
              height: 465,
            }}
          >
            <CartItem1 />
          </div>
          <div
            style={{
              width: 767,
              height: 465,
              gap: 41,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CartItem2 />
          </div>
        </div>
        <div>
          <CartSide />
        </div>
      </div>
    </div>
  );
};

export default CartMain;
