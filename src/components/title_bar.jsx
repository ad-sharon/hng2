import React from "react";
import women from "..//assets/images/women.png";
import star from "..//assets//images/star.png";

const TitleBar = () => {
  return (
    <div style={{ width: "1440px", height: "238px" }}>
      <div
        style={{
          backgroundColor: "#F7AFBC",
          width: "1440px",
          height: "189px",
          position: "relative",
        }}
      >
        <div
          className=""
          style={{
            width: "349.08px",
            height: "226.77px",
            top: "-6.21px",
            left: "116.5px",
            position: "absolute",
          }}
        >
          <img
            src={star}
            alt="star"
            style={{
              zIndex: "1",
              width: "188.26px",
              height: "193.56px",
              position: "absolute",
              top: "27px",
              left: "116.5px",
            }}
          />
          <img
            src={women}
            alt="women"
            style={{
              zIndex: "2",
              position: "absolute",
              width: "279.48px",
              height: "215.21px",
              top: "-6.21px",
              left: "186.1px",
            }}
          />
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
            }}
          >
            <div style={{ height: "52px", width: "795px" }}>
              <p
                style={{
                  fontWeight: "600",
                  color: "#fff",
                  fontSize: "44px",
                  fontFamily: "Taviraj, sans-serif",
                  lineHeight: "52px",
                  letterSpacing: "-2px",
                  textAlign: "center",
                }}
              >
                Radiant beauty for every skin glow
              </p>
            </div>
            <div style={{ height: "32px", width: "795px" }}>
              <p
                style={{
                  fontWeight: "400",
                  color: "#fff",
                  fontSize: "24px",
                  fontFamily: "Kanit, sans-serif",
                  lineHeight: "32px",
                  letterSpacing: "0.5px",
                  textAlign: "center",
                }}
              >
                Inclusive skincare for every complexion, from light to deep
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          height: "50px",
          width: "1440px",
          position: "absolute",
          backgroundColor: "#f8f8f8",
          zIndex: "3",
          display: "flex",
          flexDirection: "row",
          gap: "46px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "115px",
            height: "50px",
            borderTop: "8px solid #ED8174",
            padding: "12px 16px 12px 16px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
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
              alignItems: "center",
              color: "#241C1C",
            }}
            href="#"
          >
            Shop
          </a>
        </div>

        <div
          style={{
            width: "101px",
            height: "50px",
            padding: "12px 16px 12px 16px",
            display: "flex",
            justifyContent: "center",
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
            }}
            href="#"
          >
            Skincare
          </a>
        </div>

        <div
          style={{
            width: "119px",
            height: "50px",
            padding: "12px 16px 12px 16px",
            display: "flex",
            justifyContent: "center",
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
            href="#"
          >
            Sets & Kits
          </a>
        </div>

        <div
          style={{
            width: "104px",
            height: "50px",
            padding: "12px 16px 12px 16px",
            display: "flex",
            justifyContent: "center",
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
            href="#"
          >
            Make-up
          </a>
        </div>

        <div
          style={{
            width: "178px",
            height: "50px",
            padding: "12px 16px 12px 16px",
            display: "flex",
            justifyContent: "center",
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
            href="#"
          >
            Shop by Concerns
          </a>
        </div>
      </div>
    </div>
  );
};

export default TitleBar;
