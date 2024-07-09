import React from "react";
import plus from "../assets/images/plus.png";
import minus from "../assets/images/minus.png";
import cart1 from "../assets/images/cart1.png";
import { Box } from "@chakra-ui/react";

const CartItem1 = () => {
  return (
    <Box
      style={{
        width: 757,
        height: "212px",
        gap: 22,
        paddingBottom: 40,
        display: "flex",
        position: "absolute",
      }}
    >
      {/* picture Box */}
      <Box
        style={{
          height: 172,
          width: "146px",
          background: "#F1F0F0",
        }}
      >
        <img
          src={cart1}
          style={{
            width: "124px",
            height: "148px",
            top: "11.98px",
            left: "12.91px",
            position: "absolute",
          }}
          alt=""
        />
      </Box>

      {/* text Box */}
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
        {/* lora Box */}
        <Box
          style={{
            width: 589,
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
            Lora Starter Kit
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
              // justifyContent: "flex-start",
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
              <img src={minus}></img>
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
              <img src={plus} alt="" />
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
            $186
          </Box>
        </Box>

        <Box
          style={{
            width: 92,
            height: 26,
            alignItems: "center",
            gap: 21,
            display: "inline-flex",
          }}
        >
          <Box
            style={{
              width: 166,
              color: "#ED8174",
              fontSize: 18,
              fontFamily: "Kanit",
              fontWeight: "400",
              lineHeight: 26,
              letterSpacing: 0.09,
              wordWrap: "break-word",
            }}
          >
            Remove
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CartItem1;
