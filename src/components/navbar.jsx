import React from "react";
import { useState } from "react";
import { Box } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import women from "..//assets/images/women.png";
import star from "..//assets//images/star.png";
import hamburger from "..//assets/images/hamburger.png";
import search from "..//assets/images/search.png";
import cart from "..//assets/images/cart.png";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle_dropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (e, path) => {
    // Perform any action you need here
    console.log("Navigating to:", path);
  };

  const location = useLocation();

  const linkStyle = {
    padding: "12px 16px",
    display: "flex",
    justifyContent: "center",
    fontFamily: "Kanit",
    fontWeight: "400",
    fontSize: "18px",
    lineHeight: "26px",
    letterSpacing: "0.5px",
    textAlign: "center",
    color: "#241C1C",
    whiteSpace: "nowrap",
  };

  const activeLinkStyle = {
    ...linkStyle,
    borderTop: "8px solid #ED8174",
  };

  return (
    <Box
      width={{ base: "100%", "2xl": "1440px" }}
      style={{
        height: "238px",
        position: "relative",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Title */}
      <Box
        width={{ base: "100%", "2xl": "1440px" }}
        display={{ base: "block", "2xl": "flex" }}
        style={{
          backgroundColor: "#F7AFBC",
          height: "189px",
        }}
      >
        <Box
          margin={{ base: "auto", xl: 0, "2xl": 0 }}
          style={{
            width: "349.08px",
            height: "226.77px",
            top: "0.21px",
            left: "116.5px",
            overflow: "hidden",
          }}
        >
          <Box
            width={{ base: "80&", xl: "795px" }}
            style={{
              fontWeight: "600",
              color: "#fff",
              fontSize: "20px",
              fontFamily: "Taviraj, sans-serif",
              lineHeight: "52px",
              letterSpacing: "-0.88px",
              textAlign: "center",
            }}
          >
            Radiant beauty for every skin glow
          </Box>

          <Box
            width={{ base: "80&", xl: "795px" }}
            style={{
              height: "32px",
              fontWeight: "400",
              color: "#fff",
              fontSize: "16px",
              fontFamily: "Kanit, sans-serif",
              lineHeight: "32px",
              letterSpacing: "0.12px",
              textAlign: "center",
            }}
          >
            Inclusive skincare for every complexion, from light to deep
          </Box>

          <Box
            display={{
              base: "none",
              xl: "block",
              "2xl": "block",
            }}
            className="Star1"
            style={{
              width: 188.26,
              height: 193.56,
              left: 116.5,
              top: 33.21,
              position: "absolute",
              color: "#473838",
            }}
          >
            <img src={star} />
          </Box>
          <Box
            display={{
              base: "none",
              xl: "block",
              "2xl": "block",
            }}
            style={{
              position: "absolute",
              width: "279.48px",
              height: "200.21px",
              top: "0.21px",
              left: "186.1px",
            }}
          >
            <img src={women} alt="women" />
          </Box>
        </Box>

        <Box
          display={{
            base: "none",
            xl: "flex",
            "2xl": "flex",
          }}
          style={{
            position: "absolute",
            width: "795px",
            height: "88px",
            top: "51px",
            left: "481px",
            flexDirection: "column",
            gap: "4px",
          }}
        >
          <Box
            style={{
              width: "795px",
              fontWeight: "600",
              color: "#fff",
              fontSize: "44px",
              fontFamily: "Taviraj, sans-serif",
              lineHeight: "52px",
              letterSpacing: "-0.88px",
              textAlign: "center",
              display: {
                base: "none",
                sm: "none",
                md: "none",
                lg: "none",
                xl: "flex",
                "2xl": "flex",
              },
            }}
          >
            Radiant beauty for every skin glow
          </Box>

          <Box
            style={{
              height: "32px",
              width: "795px",
              fontWeight: "400",
              color: "#fff",
              fontSize: "24px",
              fontFamily: "Kanit, sans-serif",
              lineHeight: "32px",
              letterSpacing: "0.12px",
              textAlign: "center",
            }}
          >
            Inclusive skincare for every complexion, from light to deep
          </Box>

          <Box
            display={{
              base: "block",
              xl: "none",
              "2xl": "none",
            }}
            className="Star1"
            style={{
              width: 114,
              height: 112.7,
              left: 91.49,
              top: 122,
              position: "absolute",
              color: "#473838",
            }}
          >
            <img src={star} />
          </Box>
          <Box
            display={{
              base: "block",
              xl: "none",
              "2xl": "none",
            }}
            style={{
              position: "absolute",
              width: "279.48px",
              height: "200.21px",
              top: "0.21px",
              left: "186.1px",
            }}
          >
            <img src={women} alt="women" />
          </Box>
        </Box>
      </Box>

      {/* navbar */}
      <Box
        width={{ base: "80%", xl: "1440px" }}
        style={{
          height: "50px",
          backgroundColor: "#f8f8f8",
          zIndex: "3",
        }}
      >
        <Box
          display={{ base: "none", xl: "block" }}
          style={{
            width: "1047px",
            gap: "46px",
            display: "flex",
            flexDirection: "row",
            margin: "auto",
          }}
        >
          <Box
            display={{ base: "none", xl: "block" }}
            style={{
              width: "172.6px",
              height: "50px",
            }}
          >
            <Link
              to="/"
              style={location.pathname === "/" ? activeLinkStyle : linkStyle}
            >
              Shop All
            </Link>
          </Box>
          <Box
            style={{ width: "172.6px", height: "50px" }}
            display={{ base: "none", xl: "block" }}
          >
            <Link
              to="/skincare"
              style={
                location.pathname === "/skincare" ? activeLinkStyle : linkStyle
              }
            >
              Skincare
            </Link>
          </Box>
          <Box
            display={{ base: "none", xl: "block" }}
            style={{
              width: "172.6px",
              height: "50px",
            }}
          >
            <Link
              to="/setkits"
              style={
                location.pathname === "/setkits" ? activeLinkStyle : linkStyle
              }
            >
              Sets & Kits
            </Link>
          </Box>
          <Box
            display={{ base: "none", xl: "block" }}
            style={{
              width: "172.6px",
              height: "50px",
            }}
          >
            <Link
              to="/makeup"
              style={
                location.pathname === "/makeup" ? activeLinkStyle : linkStyle
              }
            >
              Make-up
            </Link>
          </Box>
          <Box
            display={{ base: "none", xl: "block" }}
            style={{
              width: "172.6px",
              height: "50px",
            }}
          >
            <Link
              to="/byconcern"
              style={
                location.pathname === "/byconcern" ? activeLinkStyle : linkStyle
              }
            >
              Shop by Concerns
            </Link>
          </Box>
        </Box>

        <Box display={{ base: "block", xl: "none" }} padding={"8px 0px"}>
          <Box
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              backgroundColor: "#f8f8f8",
              justifyContent: "space-between",
            }}
          >
            <img
              src={hamburger}
              style={{ width: 24, height: 24 }}
              onClick={toggle_dropdown}
            />{" "}
            {isOpen ? "" : ""}
            {isOpen && (
              <div
                style={{
                  width: 359,
                  height: "fit-content",
                  alignItems: "center",
                  letterSpacing: 0.09,
                  size: 18,
                  fontWeight: 400,
                  fontFamily: "Kanit",
                  color: "#000",
                  backgroundColor: "#fff",
                  display: "block",
                  opacity: 1,
                }}
              >
                <Box>
                  {" "}
                  <Link to="/" onClick={(e) => handleLinkClick(e, "/shopall")}>
                    Shop All
                  </Link>
                </Box>
                <Box>
                  {" "}
                  <Link
                    to="/skincare"
                    onClick={(e) => handleLinkClick(e, "/skincare")}
                  >
                    Skincare
                  </Link>
                </Box>
                <Box>
                  <Link
                    to="/setkits"
                    onClick={(e) => handleLinkClick(e, "/setkits")}
                  >
                    Sets & Kits
                  </Link>
                </Box>
                <Box>
                  {" "}
                  <Link
                    to="/makeup"
                    onClick={(e) => handleLinkClick(e, "/makeup")}
                  >
                    Makeup
                  </Link>
                </Box>
                <Box>
                  {" "}
                  <Link
                    to="/byconcern"
                    onClick={(e) => handleLinkClick(e, "/byconcern")}
                  >
                    Shop by concern
                  </Link>
                </Box>
              </div>
            )}
            <Box
              style={{
                height: "50px",
                display: "flex",
                gap: 8,
              }}
            >
              <img style={{ width: 24, height: 24 }} src={search} />

              <Link to="/addcart">
                <img style={{ width: 24, height: 24 }} src={cart} alt="" />
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default NavBar;
