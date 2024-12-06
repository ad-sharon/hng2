import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import TopBar from "../components/topBar";
import TimbuDiv from "../components/timbuDiv";
import NavBar from "../components/navbar";
import FilterTab from "../components/filter_tab";
import SetKits from "../components/setkits";
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

function SetKitsPage() {
  return (
    <ChakraProvider theme={theme}>
      <TopBar />
      <TimbuDiv />
      <NavBar showMobileNav={true} />

      <FilterTab />
      <SetKits />

      {/* <Footer /> */}
    </ChakraProvider>
  );
}

export default SetKitsPage;
