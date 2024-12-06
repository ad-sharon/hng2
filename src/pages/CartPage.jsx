import React from "react";
import { Link } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import TopBar from "../components/topBar";
import TimbuDiv from "../components/timbuDiv";
import NavBar from "../components/navbar";
import CartMain from "../components/cart_main";
// import Footer from "../components/footer";
import back from "../assets/images/back.png";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#f8f8f8", // Using a color from Chakra's color palette
      },
    },
  },
});

function CartPage() {
  return (
    <ChakraProvider theme={theme}>
      <TopBar />
      <TimbuDiv />
      <NavBar showMobileNav={false} />

      <Link to="/">
        <img
          src={back}
          alt=""
          style={{
            width: 24,
            height: 24,
            left: 121,
            top: 398,
            gap: "16px",
            position: "absolute",
          }}
        />
      </Link>

      <CartMain />
      {/* <Footer /> */}
    </ChakraProvider>
  );
}

export default CartPage;
