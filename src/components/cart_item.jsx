import React from "react";
import plus from "../assets/images/plus.png";
import minus from "../assets/images/minus.png";
import { Box } from "@chakra-ui/react";
import { useCart } from "../cart_context";

const CartItem = () => {
  const { cart, removeFromCart } = useCart();

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
      {cart.map((product) => (
        <Box
          key={product.unique_id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            background: "#F1F0F0",
          }}
        >
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
                // top: "11.98px",
                // left: "12.91px",
              }}
              alt={product.name}
            />
          </Box>

          <Box
            style={{
              width: 589,
              height: "140px",
              flexDirection: "column",
              display: "flex",
              margin: "auto",
              gap: 16,
            }}
          >
            <Box
              style={{
                height: "32px",
                alignItems: "center",
                gap: 21,
                display: "flex",
              }}
            >
              <Box
                style={{
                  width: 166,
                  color: "#473838",
                  fontSize: 24,
                  fontFamily: "Kanit",
                  fontWeight: "400",
                  lineHeight: 32,
                  letterSpacing: 0.12,
                }}
              >
                {product.name}
              </Box>
            </Box>

            <Box
              width={{ base: "50%", xl: "589px" }}
              style={{
                height: "50px",
                justifyContent: "space-between",
                alignItems: "center",
                display: "flex",
              }}
            >
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
                <Box
                  style={{
                    width: 24,
                    height: 24,
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <img src={minus} alt="minus" />
                </Box>

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
                  1
                </Box>

                <Box
                  style={{
                    width: 24,
                    height: 24,
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <img src={plus} alt="plus" />
                </Box>
              </Box>

              <Box
                style={{
                  textAlign: "center",
                  color: "#473838",
                  fontSize: 24,
                  fontFamily: "Kanit",
                  fontWeight: "700",
                  lineHeight: 32,
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
              <button onClick={() => removeFromCart(product.unique_id)}>
                Remove
              </button>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default CartItem;
