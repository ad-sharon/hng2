import React, { useState } from "react";
import expand from "../assets/images/expand_down.png";

const Checkout_dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle_dropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      style={{
        width: "100%",
        height: 54,
        display: "flex",
      }}
    >
      <select
        style={{
          width: 339,
          height: 54,
          background: "transparent",
          padding: "12px 16px",
          letterSpacing: 0.09,
          size: 18,
          fontWeight: 400,
          fontFamily: "Kanit",
          color: "#B2A6A6",
          border: "1px solid #D9D9D9",
        }}
      >
        <option>Door Delivery</option>
        <option>Pick Up</option>
      </select>
    </div>
  );
};

export default Checkout_dropdown;
