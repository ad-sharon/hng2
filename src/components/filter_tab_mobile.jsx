import React from "react";
import { Box } from "@chakra-ui/react";

const FilterMobile = () => {
  return (
    <Box display={{ base: "block", xl: "none" }}>
      <Box
        style={{
          display: "flex",
          position: "absolute",
          flexDirection: "column",
          backgroundColor: "#f8f8f8",
          fontFamily: "Kanit",
          fontWeight: "400",
          fontSize: "18px",
          lineHeight: "26px",
          letterSpacing: "0.5px",
          color: "#241C1C",
          whiteSpace: "nowrap",
        }}
      >
        <p style={{ padding: "12px 16px" }}>Shop All</p>

        <Box
          style={{
            width: 342,
            height: 48,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 10,
            padding: "12px 16px",

            background: "transparent",
          }}
        >
          <Box>
            <select
              style={{
                width: 161,
                height: 48,
                border: " 1px solid #d9d9d9",
                background: "transparent",
                color: "#473838",
              }}
            >
              <option>Availability</option>
              <option>In stock</option>
              <option>Out of Stock</option>
            </select>
          </Box>
          <Box>
            <select
              style={{
                width: 161,
                height: 48,
                border: " 1px solid #d9d9d9",
                background: "transparent",
                color: "#473838",
              }}
            >
              <option>Price</option>
              <option>Low to High</option>
              <option>High to Low</option>
            </select>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FilterMobile;
