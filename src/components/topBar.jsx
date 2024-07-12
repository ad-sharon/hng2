import React from "react";
import { Box, useBreakpointValue } from "@chakra-ui/react";

const TopBar = () => {
  const displayText = useBreakpointValue({
    base: "FREE SHIPPING ON EVERY PRODUCT FROM THE 22ND...",
    sm: "FREE SHIPPING ON EVERY PRODUCT FROM THE 22ND OF JULY",
  });

  return (
    <Box
      style={{
        backgroundColor: "#EEE4E3",
        height: "52px",
        minWidth: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        style={{
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
        }}
      >
        <h3
          style={{
            fontWeight: "400",

            fontSize: {
              base: "14px",
              sm: "14px",
              md: "18px",
              lg: "18px",
              xl: "18px",
              "2xl": "18px",
            },
            color: "#241C1C",
            fontFamily: "Kanit",
            lineHeight: "26px",
            whiteSpace: "nowrap",
          }}
        >
          {displayText}
        </h3>
      </Box>
    </Box>
  );
};

export default TopBar;
