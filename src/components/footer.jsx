import React from "react";
import { Box, useBreakpointValue } from "@chakra-ui/react";
import TimbuDiv from "./timbu_div";

const Footer = () => {
  const footer = useBreakpointValue({ base: "column", xl: "row" });

  return (
    <Box
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        position: "absolute",
      }}
    >
      <TimbuDiv />

      {/* main footer start */}
      <Box
        height={{ base: "706px", xl: "402.43px" }}
        style={{
          marginY: "auto",
          backgroundColor: "#EEE4E3",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* Box for all */}
        <Box
          flexDirection={footer}
          style={{
            gap: "16px",
            position: "absolute",
            width: "100%",
            height: "210px",
            top: "144px",
            left: "121px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {/* Box for text and input */}
          <Box
            gap="40px"
            width={{ base: "90%", xl: "513px" }}
            style={{
              height: "208px",
              flexDirection: "column",
              display: "-flex",
            }}
          >
            {/* Box for only text */}
            <Box
              style={{
                height: "118px",
                flexDirection: "column",
                gap: "8px",
                display: "flex",
              }}
            >
              {/* Box for top text */}
              <Box
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
              </Box>

              {/* Box for bottom text */}
              <Box
                width={{ base: "80%", xl: "100%" }}
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
              </Box>
            </Box>

            {/* Box for input */}
            <Box
              width={{ base: "80%", xl: "502px" }}
              style={{
                display: "inline-flex",
              }}
            >
              {/* enter email space */}
              <Box
                style={{
                  flex: "1 1 0",
                  height: "50px",
                  padding: "12px 16px",
                  backgroundColor: "#F8F8F8",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <Box
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
                </Box>
              </Box>

              {/* sign up button */}
              <Box
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
                <Box
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
                </Box>
              </Box>
            </Box>
          </Box>

          {/* other side */}
          <Box
            flexDirection={footer}
            gap={{ base: "16px", xl: "57px" }}
            style={{
              width: "526px",
              height: "100%",
              display: "flex",
            }}
          >
            {/* list1 */}
            <Box
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
              <Box
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
              </Box>

              <Box
                style={{
                  height: "155px",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: "17px",
                  display: "flex",
                }}
              >
                {/* text1 */}
                <Box
                  style={{
                    color: "#000",
                    fontSize: "18px",
                    fontFamily: "Kanit,sans-serif",
                    fontWeight: "400",
                    lineHeight: "26px",
                    letterSpacing: "0.09px",
                  }}
                >
                  Skincare
                </Box>

                {/* text2 */}
                <Box
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
                </Box>

                {/* text3 */}
                <Box
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
                </Box>

                {/* text4 */}
                <Box
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
                </Box>
              </Box>
            </Box>

            {/* list2*/}
            <Box
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
              <Box
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
              </Box>

              <Box
                style={{
                  height: "112px",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: "17px",
                  display: "flex",
                }}
              >
                <Box
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
                </Box>

                <Box
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
                </Box>

                <Box
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
                </Box>
              </Box>
            </Box>

            {/* list3 */}
            <Box
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
              <Box
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
              </Box>

              <Box
                style={{
                  height: "112px",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: "17px",
                  display: "flex",
                }}
              >
                <Box
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
                </Box>

                <Box
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
                </Box>

                <Box
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
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
