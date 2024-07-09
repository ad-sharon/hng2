import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import TopBar from "../components/topBar";
import TimbuDiv from "../components/timbu_div";
import NavBar from "../components/navbar";
import FilterTab from "../components/filter_tab";
import ProductListing from "../components/shop_all";
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

function ShopAllPage() {
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

      <FilterTab />
      <ProductListing />

      <div>
        <Footer />
      </div>
    </ChakraProvider>
  );
}

export default ShopAllPage;
