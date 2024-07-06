import React from "react";
import filterIcon from "..//assets/images/filter.png";
import expandDown from "../assets/images/expand_down.png";

const FilterTab = () => {
  return (
    <div
      className=""
      style={{
        position: "absolute",
        width: "351px",
        height: "26px",
        top: "425.75px",
        left: "119px",
        gap: "22px",
        display: "flex",
        backgroundColor: "#f8f8f8",
      }}
    >
      <div
        style={{
          width: "107px",
          height: "26px",
          display: "flex",
          gap: "8px",
        }}
      >
        <img src={filterIcon} style={{ width: "24px", height: "24px" }}></img>
        <a
          style={{
            fontFamily: "Kanit",
            fontWeight: "400",
            fontSize: "18px",
            lineHeight: "26px",
            letterSpacing: "0.5px",
            textAlign: "center",
            color: "#241C1C",
            whiteSpace: "nowrap",
          }}
        >
          Filter by :
        </a>
      </div>

      <div
        style={{
          width: "127px",
          height: "26px",
          display: "flex",
          gap: "8px",
          flexDirection: "row",
        }}
      >
        <a
          style={{
            fontFamily: "Kanit",
            fontWeight: "400",
            fontSize: "18px",
            lineHeight: "26px",
            letterSpacing: "0.5px",
            textAlign: "center",
            color: "#241C1C",
            whiteSpace: "nowrap",
          }}
        >
          Availability
        </a>
        <img src={expandDown} style={{ width: "24px", height: "24px" }}></img>
      </div>

      <div
        style={{
          width: "75px",
          height: "26px",
          display: "flex",
          flexDirection: "row",
          gap: "8px",
        }}
      >
        <a
          style={{
            fontFamily: "Kanit",
            fontWeight: "400",
            fontSize: "18px",
            lineHeight: "26px",
            letterSpacing: "0.5px",
            textAlign: "center",
            color: "#241C1C",
            whiteSpace: "nowrap",
          }}
        >
          Price
        </a>
        <img src={expandDown} style={{ width: "24px", height: "24px" }}></img>
      </div>
    </div>
  );
};

export default FilterTab;
