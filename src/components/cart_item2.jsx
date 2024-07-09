import React from "react";
import cart2 from "../assets/images/cart2.png";
import plus from "../assets/images/plus.png";
import minus from "../assets/images/minus.png";

const CartItem2 = () => {
  return (
    <div
      style={{
        width: 757,
        height: "212px",
        gap: 22,
        paddingBottom: 40,
        display: "flex",
        position: "absolute",
      }}
    >
      {/* picture div */}
      <div
        style={{
          height: 172,
          width: "146px",
          background: "#F1F0F0",
        }}
      >
        <img
          src={cart2}
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

      {/* text div */}
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
            Lim Lip Gloss
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
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              <img src={minus}></img>
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
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              <img src={plus} alt="" />
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

export default CartItem2;
