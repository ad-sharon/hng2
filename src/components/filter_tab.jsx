import React from "react";
import { Link } from "react-router-dom";
import filterIcon from "..//assets/images/filter.png";
import expandDown from "../assets/images/expand_down.png";
import search from "../assets/images/search.png";
import cart from "../assets/images/cart.png";

const FilterTab = () => {
  return (
    <div
      style={{
        position: "absolute",
        width: 1200,
        height: 26,
        top: 426,
        left: "119px",
        justifyContent: "space-between",
        display: "flex",
      }}
    >
      <div
        style={{
          width: "352px",
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

      {/* search,cart */}
      <div
        style={{
          width: 85,
          height: 24,
          alignItems: "flex-end",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div className="Search" style={{ width: 24, height: 24 }}>
          <img src={search} alt="" />
        </div>
        <div className="UilCart" style={{ width: 24, height: 24 }}>
          <Link to="/addcart">
            <img src={cart} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FilterTab;
