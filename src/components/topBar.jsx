import React from "react";

const TopBar = () => {
  return (
    <div
      style={{
        backgroundColor: "#FDDDD9",
        height: "52px",
        width: "1440px",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          height: "26px",
          width: "499px",
          top: "14px",
          left: "470px",
          margin: "auto",
        }}
      >
        <h3
          style={{
            fontWeight: "400",
            fontSize: "18px",
            color: "#241C1C",
            fontFamily: "Kanit, sans-serif ",
            lineHeight: "26px",
          }}
        >
          FREE SHIPPING ON EVERY PRODUCT FROM THE 22ND OF JULY
        </h3>
      </div>
    </div>
  );
};

export default TopBar;
