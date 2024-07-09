import React from "react";
import { Link, useLocation } from "react-router-dom";
import women from "..//assets/images/women.png";
import star from "..//assets//images/star.png";

const NavBar = () => {
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
    <div
      style={{
        width: "1440px",
        height: "238px",
        position: "relative",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Title */}
      <div
        style={{
          backgroundColor: "#F7AFBC",
          width: "1440px",
          height: "189px",
          display: "flex",
        }}
      >
        <div
          className=""
          style={{
            width: "349.08px",
            height: "226.77px",
            top: "0.21px",
            left: "116.5px",
            overflow: "hidden",
          }}
        >
          <div
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
          </div>
          <div
            style={{
              position: "absolute",
              width: "279.48px",
              height: "200.21px",
              top: "0.21px",
              left: "186.1px",
            }}
          >
            <img src={women} alt="women" />
          </div>
        </div>

        <div
          className=""
          style={{
            position: "absolute",
            width: "795px",
            height: "88px",
            top: "51px",
            left: "481px",
            flexDirection: "column",
            gap: "4px",
            display: "flex",
          }}
        >
          <div
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
          </div>

          <div
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
          </div>
        </div>
      </div>

      {/* navbar */}
      <div
        style={{
          height: "50px",
          width: "1440px",
          backgroundColor: "#f8f8f8",
          zIndex: "3",
        }}
      >
        <div
          style={{
            width: "1047px",
            gap: "46px",
            display: "flex",
            flexDirection: "row",
            margin: "auto",
          }}
        >
          <div
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
          </div>
          <div style={{ width: "172.6px", height: "50px" }}>
            <Link
              to="/skincare"
              style={
                location.pathname === "/skincare" ? activeLinkStyle : linkStyle
              }
            >
              Skincare
            </Link>
          </div>
          <div
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
          </div>
          <div
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
          </div>
          <div
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
