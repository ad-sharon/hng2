import React from "react";
import { Box } from "@chakra-ui/react";
import TopBar from "./topBar";
import TimbuDiv from "./timbuDiv";
import NavBar from "../components/navbar";

const Success = () => {
  return (
    <Box>
      <TopBar />
      <TimbuDiv />
      <Box style={{ fontWeight: "500" }}>Payment Successful</Box>
    </Box>
  );
};

export default Success;
