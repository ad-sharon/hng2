import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import arrow_left from "..//assets/images/arrow_left.png";
import arrow_right from "..//assets/images/arrow_right.png";

const PrevNext = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const pageProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <Box
      style={{
        width: "100%",
        display: "flex",
      }}
    >
      <Box
        style={{
          width: "100%",
          height: "42px",
          gap: "8px",
          display: "flex",
          flexDirection: "row",
        }}
      >
        {/* previous/arrow-left */}
        <Box
          style={{
            width: "100%",
            height: "42px",
            padding: "8px 12px",
            opacity: "50%",
            borderRadius: "8px",
            gap: "8px",
            display: "flex",
          }}
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        >
          <Box
            style={{
              alignItems: "center",
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
                cursor: "pointer",
                color: currentPage === index + 1 ? "#fff" : "#473838",
              }}
              // onClick={() => onPageChange(index + 1)}
            >
              <Box style={{ fontSize: "18px", fontFamily: "Kanit" }}>
                {index + 1}
              </Box>
            </Box>
          ))}
        </Box>

        <Box
          style={{
            width: "85px",
            height: "42px",
            padding: "8px 12px",
            alignItems: "center",
            gap: "8px",
            display: "flex",
          }}
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
        >
          <p
            disabled={currentPage === totalPages}
            style={{
              color: "#ED8174",
              fontSize: "18px",
              fontFamily: "Kanit, sans-serif",
              fontWeight: "400",
              lineHeight: "26px",
              letterSpacing: "0.09px",
            }}
          >
            Next
          </p>

          <Box
            style={{
              display: "flex",
            }}
          >
            <img
              src={arrow_right}
              alt=""
              style={{
                width: 16,
                height: 16,
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PrevNext;
