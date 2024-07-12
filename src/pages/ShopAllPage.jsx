import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import TopBar from "../components/topBar";
import TimbuDiv from "../components/timbu_div";
import NavBar from "../components/navbar";
import FilterTab from "../components/filter_tab";
import ProductListing from "../components/shop_all";
import Footer from "../components/footer";
import FilterMobile from "../components/filter_tab_mobile";
import ShopAllMobile from "../components/product_list_mobile";

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
      <NavBar />

      <div>
        <FilterTab />
        <FilterMobile />
        <ProductListing />
        <ShopAllMobile />
      </div>

      <div>
        <Footer />
      </div>
    </ChakraProvider>
  );
}

export default ShopAllPage;
