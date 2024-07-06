import React from "react";
import logo from "..//assets/images/timbu_logo.png";

const TimbuDiv = () => {
  return (
    <div
      style={{
        width: "1440px",
        height: "57.57px",
        backgroundColor: "#F8F8F8",
        border: "0.86px solid #BCBABA",
        justifyContent: "center",
        alignItems: "center",
        gap: 6.86,
        display: "flex",
        zIndex: "20",
      }}
    >
      <div
        style={{
          width: "120.41px",
          borderTopWidth: "0px",
          borderRightWidth: "0.86px",
          borderBottomWidth: "0px",
          borderLeftWidth: "0.86px",
          borderColor: " #F16B5B ",
          padding: "12px",
          justifyContent: "center",
          alignItems: "center",
          gap: 6.86,
        }}
      >
        <img
          src={logo}
          alt="Timbu Logo"
          style={{
            width: "96.41px",
            height: "33.57px",
          }}
        />
      </div>
    </div>
  );
};

export default TimbuDiv;
