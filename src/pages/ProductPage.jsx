import React from "react";
import { Box } from "@chakra-ui/react";
import TopBar from "../components/topBar";
import TimbuDiv from "../components/timbu_div";
import TitleBar from "../components/title_bar";
import FilterTab from "../components/filter_tab";
import ProductListing from "../components/product_listing";

function ProductPage() {
  return (
    <Box>
      <div
        style={{
          height: "379.57px",
          width: "1440px",
          display: "flex",

          backgroundColor: "#f8f8f8",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <TopBar />
        <TimbuDiv />
        <TitleBar />
      </div>
      <FilterTab />
      <ProductListing />
    </Box>
  );
}

export default ProductPage;
