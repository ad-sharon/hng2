import React from "react";
import { Box } from "@chakra-ui/react";
import logo from "..//assets/images/timbu_logo.png";

const TimbuBox = () => {
  return (
    <Box
      style={{
        width: {
          base: "100%",
          sm: "100%",
          md: "100%",
          lg: "100%",
          xl: "100%",
          "2xl": "100%",
        },
        height: "57.57px",
        backgroundColor: "#F8F8F8",
        border: "0.86px solid #BCBABA",
        justifyContent: "center",
        alignItems: "center",
        gap: 6.86,
        display: "flex",
        zIndex: "2",
      }}
    >
      <Box
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
      </Box>
    </Box>
  );
};

export default TimbuBox;
