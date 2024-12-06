import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import TopBar from "../components/topBar";
import CheckoutTop from "../components/checkout_top";
import TimbuDiv from "../components/timbu_div";
import CheckOut from "../components/checkout";
// import Footer from "../components/footer";
import CheckoutForm from "../components/checkout_form";

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
      <TopBar />
      <TimbuDiv />

      <CheckoutTop />
      <CheckOut />
      <CheckoutForm />
      <div>{/* <Footer /> */}</div>
    </ChakraProvider>
  );
}

export default CheckoutPage;
