import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import TopBar from "../components/topBar";
import TimbuDiv from "../components/timbu_div";
import NavBar from "../components/navbar";
import FilterTab from "../components/filter_tab";
import Footer from "../components/footer";
import ShopAll from "../components/shop_all";

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
      </div>

      <ShopAll />
      <Footer />
    </ChakraProvider>
  );
}

export default ShopAllPage;
