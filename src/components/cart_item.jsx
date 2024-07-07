import React from "react";
import search from "../assets/images/search.png";
import cart from "../assets/images/cart.png";
import cart1 from "../assets/images/cart1.png";

const CartItem = () => {
  return (
    <div
      style={{
        width: 757,
        height: "212px",
        gap: 22,
        display: "flex",
        position: "absolute",
      }}
    >
      <div
        style={{
          height: 172,
          width: "146px",
          background: "#F1F0F0",
        }}
      >
        <img
          src={cart1}
          style={{
            width: "124px",
            height: "148px",
            top: "11.98px",
            left: "12.91px",
            position: "absolute",
          }}
          alt=""
        />
      </div>

      <div
        style={{
          width: 589,
          height: "140px",
          flexDirection: "column",
          display: "flex",
          gap: 16,
        }}
      >
        {/* lora div */}
        <div
          style={{
            width: 589,
            height: "32px",
            alignItems: "center",
            gap: 21,
            display: "inline-flex",
          }}
        >
          <div
            style={{
              width: 166,
              color: "#473838",
              fontSize: 24,
              fontFamily: "Kanit",
              fontWeight: "400",
              lineHeight: 32,
              letterSpacing: 0.12,
            }}
          >
            Lora Starter Kit
          </div>
        </div>

        <div
          style={{
            height: "50px",
            width: "589px",
            justifyContent: "space-between",
            alignItems: "center",
            display: "flex",
          }}
        >
          <div
            style={{
              width: 150,
              height: "50px",
              padding: "12px 16px",
              border: "1px solid #B2A6A6",
              // justifyContent: "flex-start",
              alignItems: "center",
              gap: 31,
              display: "flex",
            }}
          >
            <div
              style={{
                width: 24,
                height: 24,
                paddingLeft: 5,
                paddingRight: 5,
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              <img src={cart}></img>
            </div>

            <div
              style={{
                width: "8px",
                textAlign: "center",
                color: "#473838",
                fontSize: 24,
                fontFamily: "Kanit",
                fontWeight: "400",
                lineHeight: 32,
                letterSpacing: 0.12,
              }}
            >
              1
            </div>

            <div
              style={{
                width: 24,
                height: 24,
                padding: 5,
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              <img src={cart} alt="" />
            </div>
          </div>

          <div
            style={{
              textAlign: "center",
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

        <div
          style={{
            width: 92,
            height: 26,
            alignItems: "center",
            gap: 21,
            display: "inline-flex",
          }}
        >
          <div
            style={{
              width: 166,
              color: "#ED8174",
              fontSize: 18,
              fontFamily: "Kanit",
              fontWeight: "400",
              lineHeight: 26,
              letterSpacing: 0.09,
              wordWrap: "break-word",
            }}
          >
            Remove
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
