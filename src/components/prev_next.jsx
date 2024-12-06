import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import arrow_left from "..//assets/images/arrow_left.png";
import arrow_right from "..//assets/images/arrow_right.png";

const PrevNext = ({ currentPage, setCurrentPage, totalPages }) => {
  return (
    <Box
      style={{
        width: "fit-content",
        margin: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        style={{
          width: "100%",
          gap: "8px",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          flexDirection: "row",
        }}
      >
        {/* previous/arrow-left */}
        <Box
          style={{
            width: "100%",
            opacity: "50%",
            borderRadius: "8px",
            gap: "8px",
            display: "flex",
            cursor: currentPage === 1 ? "not-allowed" : "pointer",
          }}
          onClick={() => {
            if (currentPage > 1) {
              setCurrentPage((prev) => prev - 1);
            }
          }}
        >
          <Box
            style={{
              display: "flex",
            }}
          >
            <img
              src={arrow_left}
              alt=""
              style={{
                width: "16",
                height: "16",
              }}
            />
          </Box>

          <p
            disabled={currentPage === 1}
            style={{
              color: "#B2A6A6",
              fontSize: "18px",
              fontFamily: "Kanit",
              fontWeight: "400",
              lineHeight: "26px",
              letterSpacing: "0.09px",
            }}
          >
            Previous
          </p>
        </Box>

        {/* Page Numbers */}
        <Box
          style={{
            width: "207px",
            height: "38px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
          }}
        >
          {[...Array(totalPages)].map((_, index) => (
            <Box
              key={index}
              style={{
                width: "32px",
                height: "28px",
                padding: "8px 12px",
                backgroundColor:
                  currentPage === index + 1 ? "#ED8174" : "transparent",
                borderRadius: "8px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                color: currentPage === index + 1 ? "#fff" : "#473838",
              }}
            >
              <Box style={{ fontSize: "18px", fontFamily: "Kanit" }}>
                {index + 1}
              </Box>
            </Box>
          ))}
        </Box>

        <Box
          style={{
            width: "100%",
            color: "#ED8174",
            display: "flex",

            cursor: currentPage === totalPages ? "not-allowed" : "pointer",
          }}
          onClick={() => {
            if (currentPage < totalPages) {
              setCurrentPage((prev) => prev + 1);
            }
          }}
        >
          <p
            disabled={currentPage === totalPages}
            style={{
              color: "#ED8174",
              fontSize: "18px",
              fontFamily: "Kanit",
              fontWeight: "400",
              letterSpacing: "0.09px",
            }}
          >
            Next
          </p>

          <Box
            style={{
              alignItems: "center",
              display: "flex",
            }}
          >
            <img
              src={arrow_right}
              alt=""
              style={{
                width: "16",
                height: "16",
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PrevNext;
