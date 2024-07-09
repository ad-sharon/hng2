import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import TopBar from "../components/topBar";
import TimbuDiv from "../components/timbu_div";
import TitleBar from "../components/title_bar";
import FilterTab from "../components/filter_tab";
import Skincare from "../components/skincare";
import Footer from "../components/footer";

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
        <TitleBar />
      </div>

      <FilterTab />
      <Skincare />

      <div>
        <Footer />
      </div>
    </ChakraProvider>
  );
}

export default SkincarePage;
