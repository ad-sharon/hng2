import React, { useEffect, useState, useContext } from "react";
import { Box } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import "../hover_product.css";
import { fetchProductbyId } from "../utils/requests";

const Details = () => {
  // to show one product
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getProduct = async () => {
      if (!id) {
        setError("No product ID provided");
        setLoading(false);
        return;
      }

      try {
        const data = await fetchProductbyId(id);
        setProduct(data);
      } catch (err) {
        setError("Error fetching product");
      } finally {
        setLoading(false);
      }
    };

    getProduct();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <Box
      style={{
        width: "100%",
        height: "618px",
        position: "absolute",
        left: 121,
        gap: "69px",
        top: "520px",
      }}
    >
      <Box
        style={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          gap: 44,
          margin: "auto",
        }}
      >
        <Box
          style={{
            width: "506px",
            height: "618px",
          }}
        >
          <img
            src={`https://api.timbu.cloud/images/${product.photos[0].url}`}
            alt={product.name}
            style={{
              width: "232px",
              height: "286px",
              position: "absolute",
              top: "27px",
              left: "23px",
            }}
          />
          <Box
            style={{
              width: 624,
              height: 603,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Box
              style={{
                height: "446.25px",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            ></Box>
            <Box
              style={{
                width: "80%",
                gap: 4,
                alignItems: "center",
                display: "flex",
              }}
            >
              <Box
                style={{
                  height: "26px",
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
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
                  gap: 8,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "26px",
                }}
              >
                <Box
                  style={{
                    textAlign: "center",
                    color: "#473838",
                    fontSize: 24,
                    fontFamily: "Kanit",
                    fontWeight: "400",
                    textDecoration: "line-through",
                    lineHeight: 32,
                    letterSpacing: 0.12,
                  }}
                >
                  $200
                </Box>
                <Box
                  style={{
                    textAlign: "center",
                    color: "#F7AFBC",
                    fontSize: 24,
                    fontFamily: "Kanit",
                    fontWeight: "700",
                    lineHeight: 32,
                    letterSpacing: 0.12,
                  }}
                >
                  {product.current_price[0]?.NGN[0]}
                </Box>
              </Box>
              <Box display="flex">
                <Box></Box>
                <Box></Box>
              </Box>
              <Box></Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Details;
