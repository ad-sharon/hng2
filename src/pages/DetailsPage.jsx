import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import TopBar from "../components/topBar";
import TimbuDiv from "../components/timbuDiv";
import NavBar from "../components/navbar";
import Details from "../components/product_detail";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#f8f8f8",
      },
    },
  },
});

function ShopAllPage() {
  return (
    <ChakraProvider theme={theme}>
      <TopBar />
      <TimbuDiv />
      <NavBar showMobileNav={false} />

      <Details />

      {/* <Footer /> */}
    </ChakraProvider>
  );
}

export default ShopAllPage;
