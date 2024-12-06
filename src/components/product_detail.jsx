import React, { useEffect, useState, useContext } from "react";
import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "../hover_product.css";
import expand from "../assets/images/expand_down.png";
import RatingStars from "./rating_stars";
import { fetchProductbyId } from "../utils/requests";
import plus from "../assets/images/plus.png";
import minus from "../assets/images/minus.png";
import { Image } from "@chakra-ui/react";
import { useCart } from "../cart_context";
import { CartContext } from "../cart_context";

const Details = () => {
  // to show one product
  const { addToCart } = useContext(CartContext);
  const { unique_id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [qty, setQty] = useState(1);

  const addQty = () => {
    setQty(qty + 1);
  };

  const subQty = () => {
    if (qty > 1) {
      setQty(qty - 1);
    } else {
      setQty(1);
    }
  };

  const { cart, cartCount, increaseQuantity, decreaseQuantity } = useCart();

  useEffect(() => {
    const getProduct = async () => {
      if (!unique_id) {
        setError("No product ID provided");
        setLoading(false);
        return;
      }

      try {
        const data = await fetchProductbyId(unique_id);
        console.log(data);
        setProduct(data);
      } catch (err) {
        setError("Error fetching product");
      } finally {
        setLoading(false);
      }
    };

    getProduct();
  }, [unique_id]);

  if (loading) return <Box>Loading...</Box>;
  if (error) return <Box>{error}</Box>;

  return (
    <Box
      gap={{ base: "300", md: "310", lg: "0" }}
      style={{
        width: "90%",
        top: 470,
        left: 121,
        display: "flex",
        flexDirection: "column",
        position: "absolute",
      }}
    >
      {/* HEADING */}
      <Box
        style={{
          width: "80%",
          justifyContent: "space-between",
          display: "flex",
        }}
      >
        <Box
          style={{
            fontFamily: "Kanit",
            fontWeight: "400",
            fontSize: "24px",
            letterSpacing: "0.12px",
            color: "#473838",
          }}
        >
          Product Details
        </Box>
        <Box style={{ width: 24, height: 24 }}>
          <Link to="/cart">
            <img src={cart} alt="" />
            {cartCount > 0 && (
              <Box
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  backgroundColor: "#ED8174",
                  color: "white",
                  textAlign: "center",
                  fontSize: "12px",
                }}
              ></Box>
            )}
          </Link>
        </Box>
      </Box>

      {/* main */}
      <Box
        flexDirection={{ base: "column", lg: "row" }}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          margin: "auto",
        }}
      >
        {/* image */}
        <Box style={{}}>
          <img
            src={`https://api.timbu.cloud/images/${product.photos[0].url}`}
            alt={product.name}
            style={{
              height: "286px",
              position: "absolute",
              top: "47px",
            }}
          />
        </Box>

        {/* text */}
        <Box
          style={{
            width: "70%",
            display: "flex",
            flexDirection: "column",
            gap: 44,
            alignItems: "flex-start",
            height: "603px",
          }}
        >
          <Box>
            <RatingStars />
          </Box>
          {/* second col */}
          <Box
            style={{
              gap: 10,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Box
              style={{
                height: "26px",
                display: "flex",
                color: "#473838",
                fontSize: 18,
                fontFamily: "Kanit",
                fontWeight: "400",
                letterSpacing: 0.09,
              }}
            >
              {product.name}
            </Box>

            <Box
              style={{
                textAlign: "center",
                color: "#F7AFBC",
                fontSize: 24,
                fontFamily: "Kanit",
                fontWeight: "700",

                letterSpacing: 0.12,
              }}
            >
              NGN
              {product.current_price}
            </Box>

            <Box
              style={{
                textAlign: "center",
                color: "#000",
                fontSize: 18,
                fontFamily: "Kanit",
                fontWeight: 400,
                letterSpacing: 0.12,
              }}
            >
              (You just saved $14)
            </Box>
          </Box>

          {/* third col */}

          <Box
            flexDirection={{ base: "column", md: "row" }}
            display="flex"
            width="100%"
            gap="10px"
          >
            <Box
              style={{
                width: "20%",
                height: "50px",
                padding: "12px 16px",
                border: "1px solid #B2A6A6",
                alignItems: "center",
                justifyContent: "space-between",
                display: "flex",
              }}
            >
              <Image
                cursor="pointer"
                onClick={() => {
                  subQty();
                }}
                src={minus}
                alt="minus"
              />

              <Box
                style={{
                  textAlign: "center",
                  color: "#473838",
                  fontSize: 24,
                  fontFamily: "Kanit",
                  fontWeight: "400",
                  lineHeight: 32,
                  letterSpacing: 0.12,
                }}
              >
                {qty}
              </Box>

              <Image
                cursor="pointer"
                onClick={() => {
                  addQty();
                }}
                src={plus}
                alt="plus"
              />
            </Box>

            <Box
              style={{
                width: "80%",
                height: 50,
                gap: "8px",
                backgroundColor: "#ED8174",
                padding: "12px 16px",
              }}
            >
              <p
                style={{
                  height: 26,
                  textAlign: "center",
                  letterSpacing: 0.09,
                  fontFamily: "Kanit",
                  fontWeight: 400,
                  size: "18px",
                  color: "#fff",
                }}
              >
                Add to Cart
              </p>
            </Box>
          </Box>
          {/* fourth col */}
          <Box
            width="100%"
            height="50px"
            border="1px 0px"
            backgroundColor="#EEE4E3"
            justifyContent="space-between"
            color="#000"
            alignItems="center"
            display="flex"
          >
            About Product
            <img src={expand} />
          </Box>

          {/* fifth col */}
          <Box>{product.extra_infos[0].value}</Box>

          {/* sixth */}
          <Box
            width="100%"
            height="50px"
            border="1px 0px"
            backgroundColor="#EEE4E3"
            justifyContent="space-between"
            color="#000"
            alignItems="center"
            display="flex"
          >
            How to Use
            <img src={expand} />
          </Box>
          <Box
            width="100%"
            height="50px"
            border="1px 0px"
            backgroundColor="#EEE4E3"
            justifyContent="space-between"
            color="#000"
            alignItems="center"
            display="flex"
          >
            Reviews
            <img src={expand} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Details;
