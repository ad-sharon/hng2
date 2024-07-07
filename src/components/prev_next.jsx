import React from "react";
import arrow_left from "..//assets/images/arrow_left.png";
import arrow_right from "..//assets/images/arrow_right.png";

const PrevNext = () => {
  return (
    <div
      style={{
        width: "1200px",
        height: "235px",
        display: "flex",
        justifyContent: "center", // Align content to the bottom
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "427px",
          height: "42px",
          gap: "8px",
          display: "flex",
          flexDirection: "row",
        }}
      >
        {/* previous/arrow-left */}
        <div
          style={{
            width: "119px",
            height: "42px",
            padding: "8px 12px",
            opacity: "50%",
            borderRadius: "8px",
            gap: "8px",
            display: "flex",
          }}
        >
          <div
            style={{
              alignItems: "center",
              display: "flex",
            }}
          >
            <img
              src={arrow_left}
              alt=""
              style={{
                width: "16",
                height: "16",
              }}
            />
          </div>

          <div
            style={{
              color: "#B2A6A6",
              fontSize: "18px",
              fontFamily: "Kanit",
              fontWeight: "400",
              lineHeight: "26px",
              letterSpacing: "0.09px",
            }}
          >
            Previous
          </div>
        </div>

        {/* numbers */}
        <div
          style={{
            width: "207px",
            height: "38px",
            alignItems: "center",
            gap: "8px",
            display: "flex",
          }}
        >
          <div
            style={{
              width: 32,
              height: 28,
              padding: "8px 12px",
              backgroundColor: "#ED8174",
              borderRadius: "8px",
              flexDirection: "column",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <div
              style={{
                color: "#fff",
                fontSize: "18px",
                fontFamily: "Kanit, sans-serif",
                fontWeight: "400",
                lineHeight: "26px",
                letterSpacing: "0.09px",
              }}
            >
              1
            </div>
          </div>

          <div
            style={{
              width: "32px",
              height: "28px",
              padding: "8px 12px",
              flexDirection: "column",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <div
              style={{
                color: "#473838",
                fontSize: "18px",
                fontFamily: "Kanit, sans-serif",
                fontWeight: "400",
                lineHeight: "26px",
                letterSpacing: "0.09px",
              }}
            >
              2
            </div>
          </div>

          <div
            style={{
              width: "32px",
              height: "28px",
              padding: "8px 12px",
              flexDirection: "column",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <div
              style={{
                color: "#473838",
                fontSize: "18px",
                fontFamily: "Kanit, sans-serif",
                fontWeight: "400",
                lineHeight: "26px",
                letterSpacing: "0.09px",
              }}
            >
              3
            </div>
          </div>
          <div
            style={{
              paddingLeft: 16,
              paddingRight: 16,
              paddingTop: 8,
              paddingBottom: 8,
              borderRadius: 8,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              display: "inline-flex",
            }}
          >
            <div
              style={{
                color: "#000",
                fontSize: "16px",
                fontFamily: "Inter, sans-serif",
                fontWeight: "700",
                lineHeight: "22.4px",
              }}
            >
              ...
            </div>
          </div>
          <div
            style={{
              width: "32px",
              height: "28px",
              padding: "8px 12px",
              flexDirection: "column",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <div
              style={{
                color: "#473838",
                fontSize: "18px",
                fontFamily: "Kanit, sans-serif",
                fontWeight: "400",
                lineHeight: "26px",
                letterSpacing: "0.09px",
              }}
            >
              5
            </div>
          </div>
        </div>

        <div
          style={{
            width: "85px",
            height: "42px",
            padding: "8px 12px",
            alignItems: "center",
            gap: "8px",
            display: "flex",
          }}
        >
          <div
            style={{
              color: "#ED8174",
              fontSize: "18px",
              fontFamily: "Kanit, sans-serif",
              fontWeight: "400",
              lineHeight: "26px",
              letterSpacing: "0.09px",
            }}
          >
            Next
          </div>

          <div
            style={{
              display: "flex",
            }}
          >
            <img
              src={arrow_right}
              alt=""
              style={{
                width: 16,
                height: 16,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrevNext;
