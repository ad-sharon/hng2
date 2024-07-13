import React from "react";
import arrow_left from "..//assets/images/arrow_left.png";
import arrow_right from "..//assets/images/arrow_right.png";

const PrevNext = (currentPage, totalPages, onPageChange) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "427px",
          height: "42px",
          gap: "8px",
          display: "flex",
          flexDirection: "row",
        }}
      >
        {/* previous/arrow-left */}
        <div
          style={{
            width: "119px",
            height: "42px",
            padding: "8px 12px",
            opacity: "50%",
            borderRadius: "8px",
            gap: "8px",
            display: "flex",
          }}
          onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        >
          <div
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
          </div>

          <div
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
          </div>
        </div>

        {/* Page Numbers */}
        <div
          style={{
            width: "207px",
            height: "38px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          {[...Array(totalPages)].map((_, index) => (
            <div
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
              onClick={() => onPageChange(index + 1)}
            >
              <div style={{ fontSize: "18px", fontFamily: "Kanit" }}>
                {index + 1}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            width: "85px",
            height: "42px",
            padding: "8px 12px",
            alignItems: "center",
            gap: "8px",
            display: "flex",
          }}
        >
          <div
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
          </div>

          <div
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrevNext;
