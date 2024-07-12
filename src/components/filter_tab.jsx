import React, { useRef, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import filterIcon from "..//assets/images/filter.png";
import expandDown from "../assets/images/expand_down.png";
import search from "../assets/images/search.png";
import cart from "../assets/images/cart.png";

const FilterTab = () => {
  const screenW = useRef(null);

  useEffect(() => {
    if (screenW.current) {
      screenW.current.style.width =
        window.innerWidth >= 1315 ? "1200px" : "80%";
    }
  }, [screenW]);

  window.addEventListener("resize", () => {
    if (screenW.current) {
      screenW.current.style.width =
        window.innerWidth >= 1315 ? "1200px" : "80%";
    }
  });

  return (
    <Box
      ref={screenW}
      display={{ base: "none", md: "flex" }}
      maxWidth="1200px"
      justifyContent="space-between"
      flexWrap="wrap"
      style={{
        position: "absolute",
        flexDirection: "row",
        height: 26,
        top: 426,
        left: "119px",
      }}
    >
      <Box
        style={{
          width: "352px",
          height: "26px",
          gap: "22px",

          display: "flex",
          backgroundColor: "#f8f8f8",
        }}
      >
        <Box
          style={{
            width: "107px",
            height: "26px",
            display: "flex",
            flex: 1,
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
        </Box>

        <Box
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
        </Box>

        <Box
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
        </Box>
      </Box>

      {/* search,cart */}
      <Box
        style={{
          width: 85,
          height: 24,
          display: "flex",

          justifyContent: "space-between",
        }}
      >
        <Box className="Search" style={{ width: 24, height: 24 }}>
          <img src={search} alt="" />
        </Box>
        <Box className="UilCart" style={{ width: 24, height: 24 }}>
          <Link to="/addcart">
            <img src={cart} alt="" />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default FilterTab;
