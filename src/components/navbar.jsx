import React from "react";
import { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import women from "..//assets/images/women.png";
import star from "..//assets//images/star.png";
import hamburger from "..//assets/images/hamburger.png";
import search from "..//assets/images/search.png";
import cart from "..//assets/images/cart.png";
import { useCart } from "../cart_context";

const NavBar = ({ showMobileNav }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const location = useLocation();

  const toggle_dropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (e, path) => {};

  // for cart icon effect
  const { cartCount } = useCart();
  console.log(cartCount);

  // to change page title during page navigation
  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setTitle("Shop All");
        break;
      case "/skincare":
        setTitle("Skincare");
        break;
      case "/setkits":
        setTitle("Sets & Kits");
        break;
      case "/makeup":
        setTitle("Makeup");
        break;
      case "/byconcern":
        setTitle("Shop by concern");
        break;
      default:
        setTitle("");
    }
    document.title = title;
  }, [location]);

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
      width="100%"
      style={{
        height: "238px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Title for desktop */}
      <Box
        width="100%"
        position="relative"
        display={{ base: "none", xl: "flex" }}
        style={{
          backgroundColor: "#F7AFBC",
          height: "189px",
        }}
      >
        <Box
          margin="0px"
          style={{
            width: "349.08px",
            height: "226.77px",
            top: "0.21px",
            left: "116.5px",
          }}
        >
          <Box
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
          style={{
            position: "absolute",
            width: "795px",
            height: "88px",
            top: "51px",
            left: "481px",
            flexDirection: "column",
            display: {
              base: "none",
              xl: "flex",
            },
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
        </Box>
      </Box>
      {/* title for desktop end */}

      {/* title for mobile */}
      <Box
        width="100%"
        display={{ base: "block", xl: "none" }}
        style={{
          backgroundColor: "#F7AFBC",
        }}
      >
        <Box
          style={{
            width: "100%",
            height: "88px",
            top: "51px",
            left: "481px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            style={{
              width: "100%",
              fontWeight: "600",
              color: "#fff",
              fontSize: "20px",
              fontFamily: "Taviraj, sans-serif",
              lineHeight: "52px",
              letterSpacing: "-0.1px",
              textAlign: "center",
            }}
          >
            Radiant beauty for every skin glow
          </Box>

          <Box
            style={{
              height: "32px",
              width: "70%",
              fontWeight: "400",
              color: "#fff",
              fontSize: "16px",
              fontFamily: "Kanit, sans-serif",
              lineHeight: "32px",
              letterSpacing: "0.32px",
              textAlign: "center",
            }}
          >
            Inclusive skincare for every complexion, from light to deep
          </Box>
        </Box>

        <Box
          display="flex"
          alignItems="flex-end"
          marginTop="33px"
          justifyContent="center"
          width="100%"
          height="129.7px"
        >
          <Box
            className="Star1"
            style={{
              width: 114,
              height: 112.7,
              color: "#473838",
            }}
          >
            <img src={star} />
          </Box>
          <Box
            style={{
              width: "167.53px",
              height: "129px",
            }}
          >
            <img src={women} alt="women" />
          </Box>
        </Box>
      </Box>
      {/* title for mobile end */}

      {/* navbar for desktop */}
      <Box
        display={{ base: "none", md: "block" }}
        width="100%"
        style={{
          height: "50px",
          backgroundColor: "#f8f8f8",
          zIndex: "3",
        }}
      >
        <Box
          width={{ base: "none", md: "100%", lg: "90%", xl: "970px" }}
          gap={{ md: "40px", lg: "46px" }}
          style={{
            display: "flex",
            flexDirection: "row",
            margin: "auto",
          }}
        >
          <Box
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
          <Box style={{ width: "172.6px", height: "50px" }}>
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
      </Box>

      {/* navbar for mobile */}
      <Box
        width={"80%"}
        height={138}
        top={318}
        gap={16}
        margin="auto"
        display={{ base: "block", md: "none" }}
        padding={"8px"}
      >
        <Box
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            backgroundColor: "#f8f8f8",
            justifyContent: "space-between",
            cursor: "pointer",
          }}
        >
          {/* mobile menu */}
          <Box flexDirection="column">
            <img
              src={hamburger}
              style={{ width: 24, height: 24 }}
              onClick={toggle_dropdown}
            />
            {isOpen && (
              <div
                style={{
                  maxWidth: 198,
                  padding: "16px 16px",
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
                  zIndex: "5",
                  position: "absolute",
                }}
              >
                <Box>
                  {" "}
                  <Link
                    to="/"
                    onClick={(e) => {
                      handleLinkClick(e, "/", "Shop All");
                    }}
                  >
                    Shop All
                  </Link>
                </Box>
                <Box>
                  <Link
                    to="/skincare"
                    onClick={(e) => {
                      handleLinkClick(e, "/skincare");
                    }}
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
                  <Link
                    to="/makeup"
                    onClick={(e) => handleLinkClick(e, "/makeup")}
                  >
                    Makeup
                  </Link>
                </Box>
                <Box>
                  <Link
                    to="/byconcern"
                    onClick={(e) => handleLinkClick(e, "/byconcern")}
                  >
                    Shop by concern
                  </Link>
                </Box>
              </div>
            )}
          </Box>

          <Box
            style={{
              display: "flex",
              gap: 8,
            }}
          >
            <Box style={{}}>
              <img src={search} alt="" />
            </Box>
            <Box>
              {cartCount > 0 && (
                <div
                  style={{
                    position: "absolute",
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

              <Link to="/cart">
                <img src={cart} />
              </Link>
            </Box>
          </Box>
        </Box>

        {showMobileNav && (
          <Box width="80%">
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                fontFamily: "Kanit",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "26px",
                letterSpacing: "0.5px",
                color: "#241C1C",
                whiteSpace: "nowrap",
              }}
            >
              <p style={{ padding: "12px 16px" }}>{title}</p>

              <Box
                style={{
                  width: 342,
                  height: 48,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 10,
                  padding: "12px 16px",
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
        )}
      </Box>
    </Box>
  );
};

export default NavBar;
