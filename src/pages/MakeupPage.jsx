import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import TopBar from "../components/topBar";
import TimbuDiv from "../components/timbu_div";
import NavBar from "../components/navbar";
import FilterTab from "../components/filter_tab";
import Makeup from "../components/makeup";
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

function MakeupPage() {
  return (
    <ChakraProvider theme={theme}>
      <TopBar />
      <TimbuDiv />
      <NavBar showMobileNav={true} />

      <FilterTab />
      <Makeup />

      {/* <Footer /> */}
    </ChakraProvider>
  );
}

export default MakeupPage;
