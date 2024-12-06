import React from "react";
import { useState, useEffect, useContext } from "react";
import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import cart from "../assets/images/cart.png";
import CartItem1 from "./cart_item";
import CartSide from "./cart_side";
import "../hover_product.css";
import { useCart } from "../cart_context";
import { fetchProducts } from "../utils/requests";
import { CartContext } from "../cart_context";

const CartMain = () => {
  const { clearCart } = useCart();

  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data || []);
      } catch (err) {
        setError("Error fetching products");
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  if (loading) return <Box>Loading...</Box>;
  if (error) return <Box>{error}</Box>;

  return (
    <Box
      left={{ base: "10%", md: "120" }}
      style={{
        width: "100%",
        top: 470,
        gap: 90,
        display: "flex",
        flexDirection: "column",
        position: "absolute",
      }}
    >
      {/* cart tab Box */}
      <Box
        style={{
          width: "78%",
          height: 32,
          justifyContent: "space-between",
          display: "flex",
        }}
      >
        <Box
          style={{
            width: "fit-content",
            height: "26px",
            top: "425.75px",
            left: "119px",
            gap: "22px",
            display: "flex",
            backgroundColor: "#f8f8f8",
            fontFamily: "Kanit",
            fontWeight: "400",
            fontSize: "24px",
            lineHeight: "26px",
            letterSpacing: "0.12px",
            textAlign: "center",
            color: "#473838",
          }}
        >
          Cart
        </Box>
        {/* cart */}
        <Box>
          <button
            style={{
              width: 150,
              height: 50,
              backgroundColor: "#ED8174",
              color: "#fff",
              fontSize: 18,
              fontFamily: "Kanit",
              fontWeight: "400",
              letterSpacing: 0.09,
            }}
            onClick={() => clearCart()}
          >
            Clear Cart
          </button>
        </Box>
      </Box>
      {/* cart tab Box end */}

      <Box
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="space-between"
        style={{
          width: "100%",
          height: 465,
          display: "flex",
        }}
      >
        {/*cart items */}
        <Box
          style={{
            width: "60%",

            display: "flex",
          }}
        >
          <CartItem1 />
        </Box>
        <Box
          style={{
            width: "40%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CartSide />
        </Box>
      </Box>

      {/* after */}

      <Box
        style={{
          minWidth: "100%",
          height: "900px",
          gap: 24,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          style={{
            width: "1200px",
            height: "32px",
            color: "#000",
            fontSize: 24,
            fontFamily: "Kanit",
            fontWeight: "400",
            letterSpacing: 0.12,
          }}
        >
          You May Also Like
        </Box>

        {products.length > 0 ? (
          <Box
            style={{
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              style={{
                height: "448px",
                display: "flex",
                flexWrap: "wrap",
                gap: "29px",
              }}
            >
              {products.slice(0, 4).map((product) => (
                <Box
                  key={product.unique_id}
                  style={{
                    width: "278.25px",
                    height: "448px",
                    gap: "8px",
                  }}
                >
                  <Box
                    className="hover_product"
                    style={{
                      width: "278.25px",
                      height: "340px",
                      backgroundColor: "#f1f0f0",
                      display: "flex",
                    }}
                  >
                    <Box
                      className="hover_content"
                      style={{
                        position: "absolute",
                        top: "0",
                        left: "0",
                        right: "0",
                        bottom: "0",
                        display: "flex",
                        flexDirection: "column",
                        zIndex: "1",
                      }}
                    >
                      <Link
                        onClick={() => addToCart(product)}
                        className="hover_button"
                      >
                        Add to Cart
                      </Link>
                    </Box>

                    <Box
                      display="flex"
                      width="278.25px"
                      justifyContent="space-between"
                    >
                      <Box
                        style={{
                          position: "absolute",
                          maxWidth: "92px",
                          maxHeight: "30px",
                          top: "-1px",
                          left: "-1px",
                          padding: "4px 8px 4px 8px",
                          backgroundColor: "#EEE4E3 ",
                          zIndex: "2",
                        }}
                      >
                        <p
                          style={{
                            width: "56px",
                            fontFamily: "Kanit",
                            fontWeight: "400",
                            fontSize: "14px",
                            lineHeight: "22px",
                            letterSpacing: "0.07px",
                            textAlign: "center",
                            whiteSpace: "nowrap",
                          }}
                        >
                          Save 14%
                        </p>
                      </Box>

                      <Box
                        Box
                        style={{
                          position: "absolute",
                          maxWidth: "92px",
                          maxHeight: "30px",
                          top: "-1px",
                          left: "185px",
                          padding: "4px 8px 4px 8px",
                          backgroundColor: "#EEE4E3 ",
                          zIndex: "2",
                        }}
                      >
                        <p
                          style={{
                            width: "fit-content",
                            fontFamily: "Kanit",
                            fontWeight: "400",
                            fontSize: "14px",
                            lineHeight: "22px",
                            letterSpacing: "0.07px",
                            textAlign: "center",
                            whiteSpace: "nowrap",
                          }}
                        >
                          <Link to={`/product/${product.id}`}>
                            View Details
                          </Link>
                        </p>
                      </Box>
                    </Box>

                    <img
                      src={`https://api.timbu.cloud/images/${product.photos[0].url}`}
                      alt={product.name}
                      style={{
                        width: "232px",
                        height: "286px",
                        position: "absolute",
                        height: "286px",
                        top: "27px",
                        left: "23px",
                      }}
                    />
                  </Box>

                  {/* CAPTION */}
                  <Box
                    className="Info"
                    style={{
                      width: 278.25,
                      height: 100,
                      position: "relative",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      gap: 24,
                      display: "flex",
                    }}
                  ></Box>
                </Box>
              ))}
            </Box>
          </Box>
        ) : (
          <Box>No products</Box>
        )}
      </Box>
    </Box>
  );
};

export default CartMain;
