import React from "react";
import { Box } from "@chakra-ui/react";

const TopBar = () => {
  return (
    <Box
      style={{
        backgroundColor: "#EEE4E3",
        height: "52px",
        width: {
          base: "100%",
          sm: "100%",
          md: "100%",
          lg: "100%",
          xl: "100%",
          "2xl": "100%",
        },
        position: "relative",
      }}
    >
      <Box
        style={{
          position: { "2xl": "absolute" },
          height: "26px",
          width: {
            base: "90%",
            sm: "90%",
            md: "90%",
            lg: "449px",
            xl: "449px",
            "2xl": "449px",
          },
          top: "14px",
          left: "470px",
          margin: {
            base: "auto",
            sm: "auto",
            md: 0,
            lg: "auto",
            xl: "auto",
            "2xl": "auto",
          },
        }}
      >
        <h3
          style={{
            width: {
              base: "80%",
              sm: "80%",
              md: "490px",
              lg: "490px",
              xl: "490px",
              "2xl": "490px",
            },
            textAlign: "center",
            fontWeight: "400",
            fontSize: {
              base: "14px",
              sm: "14px",
              md: 18,
              lg: "18px",
              xl: "18px",
              "2xl": "18px",
            },
            color: "#241C1C",
            fontFamily: "Kanit, sans-serif ",
            lineHeight: "26px",
          }}
        >
          FREE SHIPPING ON EVERY PRODUCT FROM THE 22ND OF JULY
        </h3>
      </Box>
    </Box>
  );
};

export default TopBar;
