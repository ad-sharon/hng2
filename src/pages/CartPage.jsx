import React from "react";
import { Box, ChakraProvider, extendTheme } from "@chakra-ui/react";
import TopBar from "../components/topBar";
import TimbuDiv from "../components/timbu_div";
import NavBar from "../components/navbar";
import CartMain from "../components/cart_main";
import Footer from "../components/footer";
import back from "../assets/images/back.png";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#f8f8f8", // Using a color from Chakra's color palette
      },
    },
  },
});

function CartPage() {
  return (
    <ChakraProvider theme={theme}>
      <div
        style={{
          height: "379.57px",
          width: "1440px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <TopBar />
        <TimbuDiv />
        <NavBar />
      </div>
      <img
        src={back}
        style={{
          width: 24,
          height: 24,
          left: 121,
          top: 398,
          gap: "16px",
          position: "absolute",
        }}
      />

      <CartMain />
      <Footer />
    </ChakraProvider>
  );
}

export default CartPage;
