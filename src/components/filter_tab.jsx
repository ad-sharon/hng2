import React, { useRef, useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import filterIcon from "..//assets/images/filter.png";
import expandDown from "../assets/images/expand_down.png";
import search from "../assets/images/search.png";
import cart from "../assets/images/cart.png";
import { useCart } from "../cart_context";

const FilterTab = () => {
  // to handle navbar responsive on mobile
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

  // to handle filter tab dropdown
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [selectedOption1, setSelectedOption1] = useState("Availability");
  const [selectedOption2, setSelectedOption2] = useState("Price");

  const toggleOptions1 = () => {
    setIsOpen1(!isOpen1);
  };

  const toggleOptions2 = () => {
    setIsOpen2(!isOpen2);
  };

  const handleOptionSelect1 = (option) => {
    setSelectedOption1(option);
    setIsOpen1(false);
  };

  const handleOptionSelect2 = (option) => {
    setSelectedOption2(option);
    setIsOpen2(false);
  };

  const { cartCount } = useCart();
  console.log(cartCount);

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
            {selectedOption1}
          </a>
          <img
            src={expandDown}
            onClick={toggleOptions1}
            style={{ width: "24px", height: "24px" }}
          />
          {isOpen1 ? "" : ""}

          {isOpen1 && (
            <ul
              style={{
                border: "2px solid #ccc",
                padding: "0",
                marginTop: "30px",
                listStyle: "none",
                position: "absolute",
                width: "fit-content",
                zIndex: 10,
              }}
            >
              <li
                onClick={() => handleOptionSelect1("In Stock")}
                style={{ padding: "10px", cursor: "pointer" }}
              >
                In stock
              </li>
              <li
                onClick={() => handleOptionSelect1("Out of Stock")}
                style={{ padding: "10px", cursor: "pointer" }}
              >
                Out of Stock
              </li>
            </ul>
          )}
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
            {selectedOption2}
          </a>
          <img
            src={expandDown}
            onClick={toggleOptions2}
            style={{ width: "24px", height: "24px" }}
          />
          {isOpen2 ? "" : ""}
          {isOpen2 && (
            <ul
              style={{
                border: "2px solid #ccc",
                padding: "0",
                marginTop: "30px",
                listStyle: "none",
                position: "absolute",
                width: "fit-content",
                zIndex: 10,
              }}
            >
              <li
                onClick={() => handleOptionSelect2("Low to High")}
                style={{ padding: "10px", cursor: "pointer" }}
              >
                Low to High
              </li>
              <li
                onClick={() => handleOptionSelect2("High to Low")}
                style={{ padding: "10px", cursor: "pointer" }}
              >
                High to Low
              </li>
            </ul>
          )}
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
        <Box style={{ width: 24, height: 24 }}>
          <img src={search} alt="" />
        </Box>
        <Box style={{ width: 24, height: 24 }}>
          <Link to="/cart">
            <img src={cart} alt="" />
            {cartCount > 0 && (
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  backgroundColor: "#ED8174",
                  color: "white",
                  textAlign: "center",
                  fontSize: "12px",
                }}
              ></div>
            )}
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default FilterTab;
