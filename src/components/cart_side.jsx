import React from "react";
import { Link } from "react-router-dom";
import CheckOutButton from "./checkout_b";

const CartSide = () => {
  return (
    <div
      style={{
        width: 324,
        height: 438,
        gap: 41,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          width: 324,
          height: 347,
          gap: 47,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            width: 324,
            height: 245,
            gap: 49,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* 1 */}
          <div
            style={{
              width: 324,
              height: 98,
              padding: "12px 16px",
              border: "1px solid #D9D9D9",
            }}
          ></div>

          {/* 2 */}
          <div
            style={{
              width: 324,
              height: 98,
              padding: "12px 16px",
              border: "1px solid #D9D9D9",
            }}
          ></div>
        </div>

        <div
          style={{
            width: 359,
            height: 55,

            padding: "12px 16px",
            border: "1px solid #D9D9D9",
          }}
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div
              style={{
                width: 70,
                height: 26,
                padding: "12px 16px",
                letterSpacing: 0.09,
                textAlign: "center",
                fontFamily: "Kanit",
                fontWeight: 400,
                size: "18px",
                color: "#473838",
              }}
            >
              Subtotal
            </div>

            <div
              style={{
                width: 52,
                height: 32,
                color: "#473838",
                fontSize: 24,
                fontFamily: "Kanit",
                fontWeight: "700",
                lineHeight: 32,
                letterSpacing: 0.12,
              }}
            >
              $186
            </div>
          </div>
        </div>
      </div>

      <Link to="/checkout">
        <CheckOutButton />
      </Link>
    </div>
  );
};

export default CartSide;
