import React from "react";
import { useState } from "react";
import plus from "../assets/images/plus.png";
import minus from "../assets/images/minus.png";
import { Box, Image } from "@chakra-ui/react";
import { useCart } from "../cart_context";

const CartItem = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } =
    useCart();

  return (
    <Box
      style={{
        gap: 22,
        paddingBottom: 40,
        display: "flex",
        flexDirection: "column",
        position: "absolute",
      }}
    >
      {cart.length === 0 ? (
        <Box>No items in the cart</Box>
      ) : (
        cart.map((product) => (
          <Box
            key={product.unique_id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              background: "#F1F0F0",
            }}
          >
            {/* picture */}
            <Box
              style={{
                height: 172,
                width: "146px",
                background: "#F1F0F0",
              }}
            >
              <img
                src={`https://api.timbu.cloud/images/${product.photos[0].url}`}
                style={{
                  width: "124px",
                  height: "148px",
                }}
                alt={product.name}
              />
            </Box>

            {/* side content */}
            <Box
              style={{
                width: 589,
                height: "140px",
                flexDirection: "column",
                display: "flex",
                gap: 16,
              }}
            >
              <Box
                style={{
                  width: 166,
                  color: "#473838",
                  fontSize: 24,
                  fontFamily: "Kanit",
                  fontWeight: "400",
                  letterSpacing: 0.12,
                }}
              >
                {product.name}
              </Box>

              <Box
                style={{
                  width: "100%",
                  height: "50px",
                  justifyContent: "space-between",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                {/* quantity changer */}
                <Box
                  style={{
                    width: 150,
                    height: "50px",
                    padding: "12px 16px",
                    border: "1px solid #B2A6A6",
                    alignItems: "center",
                    gap: 31,
                    display: "flex",
                  }}
                >
                  <Image
                    cursor="pointer"
                    onClick={() => decreaseQuantity(product.unique_id)}
                    src={minus}
                    alt="minus"
                  />

                  <Box
                    style={{
                      width: "8px",
                      textAlign: "center",
                      color: "#473838",
                      fontSize: 24,
                      fontFamily: "Kanit",
                      fontWeight: "400",
                      lineHeight: 32,
                      letterSpacing: 0.12,
                    }}
                  >
                    {product.quantity}
                  </Box>

                  <Image
                    cursor="pointer"
                    onClick={() => increaseQuantity(product.unique_id)}
                    src={plus}
                    alt="plus"
                  />
                </Box>

                <Box
                  style={{
                    color: "#473838",
                    fontSize: 24,
                    fontFamily: "Kanit",
                    fontWeight: "700",
                    letterSpacing: 0.12,
                  }}
                >
                  {product.current_price[0].NGN[0]}
                </Box>
              </Box>

              <Box
                style={{
                  width: 92,
                  zIndex: "5",
                  color: "#ED8174",
                  fontSize: 18,
                  fontFamily: "Kanit",
                  fontWeight: "400",
                  letterSpacing: 0.09,
                }}
              >
                <button
                  cursor="pointer"
                  onClick={() => removeFromCart(product.unique_id)}
                >
                  Remove
                </button>
              </Box>
            </Box>
          </Box>
        ))
      )}
    </Box>
  );
};

export default CartItem;
