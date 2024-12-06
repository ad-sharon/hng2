import React from "react";
import { Link } from "react-router-dom";
import CheckOutButton from "./checkout_b";
import door from "../assets/images/door_delivery.png";
import "../hover_product.css";
import { useCart } from "../cart_context";
import station from "../assets/images/station_pickup.png";

const CartSide = () => {
  const { totalPrice } = useCart();

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
          >
            <img style={{ margin: "auto" }} src={door} />
            <div
              style={{
                width: 111,
                height: 26,
                letterSpacing: 0.09,
                size: 18,
                fontWeight: 400,
                fontFamily: "Kanit",
                margin: "auto",
              }}
            >
              Door Delivery
            </div>
          </div>

          {/* 2 */}
          <div
            style={{
              width: 324,
              height: 98,
              padding: "12px 16px",
              border: "1px solid #D9D9D9",
            }}
          >
            <img style={{ margin: "auto" }} src={station} />
            <div
              style={{
                width: 125,
                height: 26,
                letterSpacing: 0.09,
                size: 18,
                textAlign: "center",
                fontWeight: 400,
                fontFamily: "Kanit",
                margin: "auto",
              }}
            >
              Station Pick Up
            </div>
          </div>
        </div>

        <div
          style={{
            width: 324,
            height: 55,
            padding: "12px 16px",
            border: "1px solid #D9D9D9",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            display: "flex",
          }}
        >
          <div
            style={{
              width: 70,
              height: 26,
              letterSpacing: 0.09,

              fontFamily: "Kanit",
              fontWeight: 400,
              size: "18px",
              color: "#473838",
              whiteSpace: "nowrap",
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
              letterSpacing: 0.12,
              whiteSpace: "nowrap",
            }}
          >
            {totalPrice}
          </div>
        </div>

        <Link to="/checkout">
          <CheckOutButton />
        </Link>
      </div>
    </div>
  );
};

export default CartSide;
