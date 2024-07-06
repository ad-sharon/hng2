import React from "react";
import arrow_left from "..//assets/images/arrow_left.png";
import arrow_right from "..//assets/images/arrow_right.png";

const PrevNext = () => {
  return (
    <div
      style={{
        width: "427px",
        height: "42px",
        display: "flex",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "119px",
          height: "42px",
          padding: "8px 12px 8px 12px",
          opacity: "50%",
          gap: "8px",
          whiteSpace: "nowrap",
        }}
      >
        <img src={arrow_left} style={{ width: "16px", height: "16px" }} />
        <p
          style={{
            width: "71px",
            height: "26px",
            fontFamily: "Kanit",
            fontWeight: "400",
            fontSize: "18px",
            lineHeight: "26px",
            letterSpacing: "0.5px",
            color: "#B2A6A6",
          }}
        >
          Previous
        </p>
      </div>
      <div
        style={{
          width: "207px",
          height: "38px",
          gap: "8px",
          display: "flex",
        }}
      >
        <div
          style={{
            borderRadius: "8px",
            backgroundColor: "#ED8174",
            width: "32px",
            height: "28px",
            padding: "8px 12px 8px 12px",
          }}
        >
          <p
            style={{
              width: "6px",
              height: "26px",
              fontFamily: "Kanit",
              fontWeight: "400",
              fontSize: "18px",
              letterSpacing: "0.5px",
              lineHeight: "26px",
              color: "#fff",
            }}
          >
            1
          </p>
        </div>

        <div
          style={{
            borderRadius: "8px",
            width: "32px",
            height: "28px",
            padding: "8px 12px 8px 12px",
          }}
        >
          <p
            style={{
              width: "6px",
              height: "26px",
              fontFamily: "Kanit",
              fontWeight: "400",
              fontSize: "18px",
              letterSpacing: "0.5px",
              lineHeight: "26px",
              color: "#473838",
            }}
          >
            2
          </p>
        </div>

        <div
          style={{
            borderRadius: "8px",
            width: "32px",
            height: "28px",
            padding: "8px 12px 8px 12px",
          }}
        >
          <p
            style={{
              width: "6px",
              height: "26px",
              fontFamily: "Kanit",
              fontWeight: "400",
              fontSize: "18px",
              letterSpacing: "0.5px",
              lineHeight: "26px",
              color: "#473838",
            }}
          >
            3
          </p>
        </div>

        <div
          style={{
            borderRadius: "8px",
            width: "32px",
            height: "28px",
            padding: "8px 12px 8px 12px",
            flexDirection: "row",
          }}
        >
          <p
            style={{
              width: "15px",
              height: "22px",
              fontFamily: " Inter, sans-serif",
              fontWeight: "700",
              fontSize: "16px",
              lineHeight: "22.4px",
              color: "#000",
            }}
          >
            ...
          </p>
        </div>

        <div
          style={{
            borderRadius: "8px",
            width: "32px",
            height: "28px",
            padding: "8px 12px 8px 12px",
          }}
        >
          <p
            style={{
              width: "6px",
              height: "26px",
              fontFamily: "Kanit",
              fontWeight: "400",
              fontSize: "18px",
              letterSpacing: "0.5px",
              lineHeight: "26px",
              color: "#473838",
            }}
          >
            5
          </p>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          width: "85px",
          height: "42px",
          padding: "8px 12px 8px 12px",
          gap: "8px",
        }}
      >
        <p
          style={{
            width: "37px",
            height: "26px",
            fontFamily: "Kanit, sans-serif",
            fontWeight: "400",
            fontSize: "18px",
            lineHeight: "26px",
            letterSpacing: "0.5px",
            whiteSpace: "nowrap",
          }}
        >
          Next
        </p>
        <img src={arrow_right} style={{ width: "16px", height: "16px" }} />
      </div>
    </div>
  );
};

export default PrevNext;
