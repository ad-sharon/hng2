import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import TopBar from "../components/topBar";
import CheckoutTop from "../components/checkout_top";
import TimbuDiv from "../components/timbu_div";
import CheckOut from "../components/checkout";
import Footer from "../components/footer";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#f8f8f8", // Using a color from Chakra's color palette
      },
    },
  },
});

function CheckoutPage() {
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
      </div>
      <CheckoutTop />
      <CheckOut />

      <div>
        <Footer />
      </div>
    </ChakraProvider>
  );
}

export default CheckoutPage;
