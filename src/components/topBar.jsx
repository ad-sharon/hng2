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
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        style={{
          height: "26px",
          top: "14px",
          left: "470px",
        }}
      >
        <h3
          style={{
            fontWeight: "400",
            fontSize: "90%",

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
