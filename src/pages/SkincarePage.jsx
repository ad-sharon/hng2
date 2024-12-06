import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import TopBar from "../components/topBar";
import TimbuDiv from "../components/timbuDiv";
import NavBar from "../components/navbar";
import FilterTab from "../components/filter_tab";
import Skincare from "../components/skincare";
// import Footer from "../components/footer";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#f8f8f8",
      },
    },
  },
});

function SkincarePage() {
  return (
    <ChakraProvider theme={theme}>
      <TopBar />
      <TimbuDiv />
      <NavBar showMobileNav={true} />
      <FilterTab />
      <Skincare />

      {/* <Footer /> */}
    </ChakraProvider>
  );
}

export default SkincarePage;
