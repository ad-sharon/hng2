import React from "react";
import logo from "..//assets/images/timbu_logo.png";

const TimbuDiv = () => {
  return (
    <div
      style={{
        width: "1440px",
        height: "57.57px",
        border: "0.86px solid #BCBABA",
        position: "relative",
      }}
    >
      <div
        style={{
          width: "120.41px",
          height: "57.57px",
          borderTopWidth: "0px",
          borderRightWidth: "0.86px",
          borderBottomWidth: "0px",
          borderLeftWidth: "0.86px",
          borderColor: " #F16B5B ",
          position: "absolute",
          padding: "12px",
          margin: "auto",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <img
          src={logo}
          alt="Timbu Logo"
          style={{ width: "96.41px", height: "33.57px" }}
        />
      </div>
    </div>
  );
};

export default TimbuDiv;
