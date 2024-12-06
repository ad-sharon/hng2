import React from "react";

const CheckOutButton = () => {
  return (
    <div
      style={{
        width: 324,
        height: 50,
        gap: "8px",
        backgroundColor: "#ED8174",
        padding: "12px 16px",
      }}
    >
      <p
        style={{
          width: 292,
          height: 26,
          letterSpacing: 0.09,
          textAlign: "center",
          fontFamily: "Kanit",
          fontWeight: 400,
          size: "18px",
          color: "#fff",
        }}
      >
        Checkout
      </p>
    </div>
  );
};

export default CheckOutButton;
