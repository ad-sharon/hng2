import React from "react";
import smallStar from "..//assets/images/smallStar.png";
import plainStar from "..//assets/images/plainStar.png";

const RatingStars = () => {
  return (
    <div
      style={{
        justifyContent: "center",
        height: "26px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "8px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          width: 132,
          height: 24,
          gap: "3px",
        }}
      >
        <img
          src={smallStar}
          alt=""
          style={{
            width: 24,
            height: 24,
          }}
        />
        <img
          src={smallStar}
          alt=""
          style={{
            width: 24,
            height: 24,
          }}
        />
        <img
          src={smallStar}
          alt=""
          style={{
            width: 24,
            height: 24,
          }}
        />
        <img
          src={smallStar}
          alt=""
          style={{
            width: 24,
            height: 24,
          }}
        />
        <img
          src={plainStar}
          style={{
            width: 24,
            height: 24,
          }}
        />
      </div>

      <div
        style={{
          color: "#473838",
          fontSize: 18,
          fontFamily: "Kanit",
          fontWeight: "400",
          lineHeight: 26,
          letterSpacing: 0.09,
        }}
      >
        4 (5)
      </div>
    </div>
  );
};

export default RatingStars;
