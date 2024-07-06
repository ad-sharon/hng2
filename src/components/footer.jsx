import React from "react";
import TimbuDiv from "./timbu_div";

const Footer = () => {
  return (
    <div
      style={{
        position: "absolute",
        width: "1440px",
        height: "460px",
        top: "2164px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <TimbuDiv />
      {/* main footer start */}
      <div
        style={{
          backgroundColor: "#EEE4E3",
          height: "402.43px",
          width: "1440px",
        }}
      >
        {/* div for all */}
        <div
          style={{
            position: "absolute",
            width: "1200px",
            height: "210px",
            top: "144px",
            left: "121px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {/* div for text and input */}
          <div
            style={{
              width: "513px",
              height: "208px",
              gap: "40px",
              flexDirection: "column",
              display: "inline-flex",
            }}
          >
            {/* div for only text */}
            <div
              style={{
                width: "513px",
                height: "118px",
                flexDirection: "column",
                //   justifyContent: "flex-start",
                //   alignItems: "flex-start",
                gap: "8px",
                display: "flex",
              }}
            >
              {/* div for top text */}
              <div
                style={{
                  color: "#473838",
                  fontSize: "24px",
                  fontFamily: "Kanit, sans-serif",
                  fontWeight: "400",
                  lineHeight: "32px",
                  letterSpacing: "0.5px",
                }}
              >
                Join our Family
              </div>

              {/* div for bottom text */}
              <div
                style={{
                  color: "#473838",
                  fontSize: "18px",
                  fontFamily: "Kanit, sans-serif",
                  fontWeight: "400",
                  lineHeight: "26px",
                  letterSpacing: "0.09px",
                  wordWrap: "break-word",
                }}
              >
                You know you want to sign up for our newsletter and receive 10%
                off your first purchase! Be the first to hear about our new
                product launches, tips & tricks and juicy sales.
              </div>
            </div>

            {/* div for input */}
            <div
              style={{
                width: "502px",
                //   justifyContent: "flex-start",
                alignItems: "center",
                display: "inline-flex",
              }}
            >
              {/* enter email space */}
              <div
                style={{
                  flex: "1 1 0",
                  height: "50px",
                  padding: "12px 16px",
                  backgroundColor: "#F8F8F8",
                  // justifyContent: "flex-start",
                  alignItems: "center",
                  gap: "8px",
                  display: "flex",
                }}
              >
                <div
                  style={{
                    width: "172px",
                    color: "#473838",
                    fontSize: "18px",
                    fontFamily: "Kanit, sans-serif",
                    fontWeight: "400",
                    lineHeight: "26px",
                    letterSpacing: "0.09px",
                  }}
                >
                  Enter your mail
                </div>
              </div>

              {/* sign up button */}
              <div
                style={{
                  width: "204px",
                  height: "50px",
                  background: "#ED8174",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                  display: "flex",
                }}
              >
                <div
                  style={{
                    width: "246.25px",
                    textAlign: "center",
                    color: "#fff",
                    fontSize: "18px",
                    fontFamily: "Kanit",
                    fontWeight: "400",
                    lineHeight: "26px",
                    letterSpacing: "0.09px",
                  }}
                >
                  Sign up
                </div>
              </div>
            </div>
          </div>

          {/* other side */}
          <div
            style={{
              width: "526px",
              height: "210px",
              justifyContent: "flex-end",
              alignItems: "flex-start",
              gap: "57px",
              display: "flex",
            }}
          >
            {/* list1 */}
            <div
              style={{
                width: "169px",
                height: "210px",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: "23px",
                display: "inline-flex",
              }}
            >
              {/* topic */}
              <div
                style={{
                  color: "#473838",
                  fontSize: "24px",
                  fontFamily: "Kanit, sans-serif",
                  fontWeight: "400",
                  lineHeight: "32px",
                  letterSpacing: "0.12px",
                }}
              >
                Shop
              </div>

              <div
                style={{
                  //   alignSelf: "stretch",
                  height: "155px",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: "17px",
                  display: "flex",
                }}
              >
                {/* text1 */}
                <div
                  style={{
                    // alignSelf: "stretch",
                    color: "#000",
                    fontSize: "18px",
                    fontFamily: "Kanit,sans-serif",
                    fontWeight: "400",
                    lineHeight: "26px",
                    letterSpacing: "0.09px",
                  }}
                >
                  Skincare
                </div>

                {/* text2 */}
                <div
                  style={{
                    // alignSelf: "stretch",
                    color: "#000",
                    fontSize: "18px",
                    fontFamily: "Kanit,sans-serif",
                    fontWeight: "400",
                    lineHeight: "26px",
                    letterSpacing: "0.09px",
                  }}
                >
                  Sets & Kits
                </div>

                {/* text3 */}
                <div
                  style={{
                    // alignSelf: "stretch",
                    color: "#000",
                    fontSize: "18px",
                    fontFamily: "Kanit,sans-serif",
                    fontWeight: "400",
                    lineHeight: "26px",
                    letterSpacing: "0.09px",
                  }}
                >
                  Make-up
                </div>

                {/* text4 */}
                <div
                  style={{
                    // alignSelf: "stretch",
                    color: "#000",
                    fontSize: "18px",
                    fontFamily: "Kanit,sans-serif",
                    fontWeight: "400",
                    lineHeight: "26px",
                    letterSpacing: "0.09px",
                  }}
                >
                  Shop by concern
                </div>
              </div>
            </div>

            {/* list2*/}
            <div
              style={{
                width: "74px",
                height: "167px",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: "23px",
                display: "inline-flex",
              }}
            >
              {/* topic */}
              <div
                style={{
                  color: "#473838",
                  fontSize: "24px",
                  fontFamily: "Kanit",
                  fontWeight: "400",
                  lineHeight: "32px",
                  letterSpacing: "0.12px",
                }}
              >
                Help
              </div>

              <div
                style={{
                  height: "112px",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: "17px",
                  display: "flex",
                }}
              >
                <div
                  style={{
                    color: "#000",
                    fontSize: "18px",
                    fontFamily: "Kanit, sans-serif",
                    fontWeight: "400",
                    lineHeight: "26px",
                    letterSpacing: "0.09px",
                  }}
                >
                  FAQ
                </div>

                <div
                  style={{
                    color: "#000",
                    fontSize: "18px",
                    fontFamily: "Kanit, sans-serif",
                    fontWeight: "400",
                    lineHeight: "26px",
                    letterSpacing: "0.09px",
                  }}
                >
                  Shipping
                </div>

                <div
                  style={{
                    color: "#000",
                    fontSize: "18px",
                    fontFamily: "Kanit, sans-serif",
                    fontWeight: "400",
                    lineHeight: "26px",
                    letterSpacing: "0.09px",
                  }}
                >
                  Refunds
                </div>
              </div>
            </div>

            {/* list3 */}
            <div
              style={{
                width: "169px",
                height: "167px",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: "23px",
                display: "inline-flex",
              }}
            >
              <div
                style={{
                  color: "#473838",
                  fontSize: "24px",
                  fontFamily: "Kanit",
                  fontWeight: "400",
                  lineHeight: "32px",
                  letterSpacing: "0.12px",
                }}
              >
                Learn
              </div>

              <div
                style={{
                  height: "112px",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: "17px",
                  display: "flex",
                }}
              >
                <div
                  style={{
                    color: "#000",
                    fontSize: "18px",
                    fontFamily: "Kanit",
                    fontWeight: "400",
                    lineHeight: "26px",
                    letterSpacing: "0.09px",
                  }}
                >
                  About Us
                </div>

                <div
                  style={{
                    color: "#000",
                    fontSize: "18px",
                    fontFamily: "Kanit",
                    fontWeight: "400",
                    lineHeight: "26px",
                    letterSpacing: "0.09px",
                  }}
                >
                  Blog
                </div>

                <div
                  style={{
                    color: "#000",
                    fontSize: "18px",
                    fontFamily: "Kanit",
                    fontWeight: "400",
                    lineHeight: "26px",
                    letterSpacing: "0.09px",
                  }}
                >
                  Career
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
