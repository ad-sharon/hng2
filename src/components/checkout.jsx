import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import CartItem1 from "./cart_item1";
import CartItem2 from "./cart_item2";
import CheckOutButton from "./checkout_b";
import Checkout_dropdown from "./checkout_dropdown";
import expand from "../assets/images/expand_down.png";
import CheckoutForm from "./checkout_form";

const Checkout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle_dropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box display={{ base: "block", xl: "0" }}>
      <Box
        width={{ base: "100%", xl: "1200" }}
        position={{ base: "0", xl: "absolute" }}
        style={{
          height: 577,
          top: 204,
          left: 120,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          width={{ base: "100%", xl: "1200" }}
          style={{
            height: 56,
            justifyContent: "space-between",
            display: "flex",
            flexDirection: "row",
            backgroundColor: "#EEE4E3",
            alignItems: "center",
            padding: "12px 16px",
          }}
        >
          <Box
            style={{
              fontFamily: "Kanit",
              fontWeight: "400",
              fontSize: "24px",
              lineHeight: "26px",
              letterSpacing: "0.12px",
              textAlign: "center",
            }}
          >
            Order Summary
          </Box>

          <Box
            style={{
              fontFamily: "Kanit",
              fontWeight: "400",
              fontSize: "24px",
              lineHeight: "26px",
              letterSpacing: "0.12px",
              textAlign: "center",
              color: "#473838",
            }}
          >
            Total
          </Box>
        </Box>

        <Box
          width={{ base: "100%", xl: "1200" }}
          flexDirection={{ base: "column", xl: "row" }}
          style={{
            height: 465,
            gap: 84,
            display: "flex",
          }}
        >
          {/* 2 cart items */}
          <Box
            width={{ base: "100%", xl: "1200" }}
            style={{
              height: 465,
              gap: 41,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              width={{ base: "40%", xl: "767" }}
              style={{
                height: 465,
              }}
            >
              <CartItem1 />
            </Box>
            <Box
              width={{ base: "40%", xl: "767" }}
              style={{
                height: 465,
                gap: 41,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CartItem2 />
            </Box>
          </Box>

          <Box
            width={{ base: "80%", xl: "359" }}
            style={{
              height: 425,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              style={{
                width: 359,
                height: 194,
                gap: 29,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box
                style={{
                  width: 349,
                  height: 50,
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                {/* 1 */}
                <Box
                  style={{
                    width: 248,
                    height: 50,
                    padding: "12px 16px",
                    border: "1px solid #D9D9D9",
                  }}
                >
                  <p
                    style={{
                      width: 216,
                      color: "#B2A6A6",
                      height: 26,
                      letterSpacing: 0.09,
                      size: 18,
                      fontWeight: 400,
                      fontFamily: "Kanit",
                    }}
                  >
                    Discount Code
                  </p>
                </Box>

                {/* 2 */}
                <Box
                  style={{
                    width: 111,
                    height: 50,
                    backgroundColor: "#ED8174",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <p
                    style={{
                      color: "#fff",
                      height: 26,
                      letterSpacing: 0.09,
                      size: 18,
                      fontWeight: 400,
                      fontFamily: "Kanit",
                    }}
                  >
                    Apply
                  </p>
                </Box>
              </Box>

              <Box
                style={{
                  width: 359,
                  height: 32,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <p
                  style={{
                    width: 329,
                    height: 26,
                    letterSpacing: 0.09,
                    size: 18,
                    fontWeight: 400,
                    fontFamily: "Kanit",
                    color: "#473838",
                  }}
                >
                  Shipping Fee
                </p>

                <p
                  style={{
                    width: 38,
                    height: 32,
                    letterSpacing: 0.09,
                    size: 24,
                    textAlign: "center",
                    fontWeight: 700,
                    fontFamily: "Kanit",
                  }}
                >
                  $0
                </p>
              </Box>
            </Box>

            <Box
              display={{ base: "column", xl: "flex" }}
              style={{
                border: "1px solid #D9D9D9",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Checkout_dropdown />
            </Box>

            <Box
              style={{
                width: 359,
                height: 231,
                justifyContent: "space-between",
                alignItems: "flex-end",
                display: "flex",
              }}
            >
              <Box
                style={{
                  width: 359,
                  height: 55,
                  padding: "12px 16px",
                  border: "1px solid #D9D9D9",
                  justifyContent: "space-between",

                  display: "flex",
                }}
              >
                <Box
                  style={{
                    width: 70,
                    height: 26,
                    letterSpacing: 0.09,

                    fontFamily: "Kanit",
                    fontWeight: 400,
                    size: "18px",
                    color: "#473838",
                    whiteSpace: "nowrap",
                  }}
                >
                  Subtotal
                </Box>

                <Box
                  style={{
                    width: 52,
                    height: 32,
                    color: "#473838",
                    fontSize: 24,
                    fontFamily: "Kanit",
                    fontWeight: "700",
                    letterSpacing: 0.12,
                  }}
                >
                  $186
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          style={{
            width: 1200,
            height: 56,
            backgroundColor: "#EEE4E3",
          }}
        ></Box>
      </Box>
      <CheckoutForm />
    </Box>
  );
};

export default Checkout;
