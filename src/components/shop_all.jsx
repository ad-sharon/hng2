import React, { useEffect, useState, useContext } from "react";
import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import RatingStars from "./rating_stars";
import PrevNext from "./prev_next";
import "../hover_product.css";
import { fetchProducts } from "../utils/requests";
import { CartContext } from "../cart_context";

const ShopAll = () => {
  // to show products
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const pageProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(products.length / productsPerPage);

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

  // if (loading) return <div>Loading...</div>;.

  if (error) return <div>{error}</div>;

  return (
    <Box
      style={{
        width: "100%",
        height: "1596px",
        flex: "1 0 auto",
        position: "absolute",
        flexDirection: "column",
        display: "flex",
        gap: "114px",
        top: "554px",
      }}
    >
      {pageProducts.length > 0 ? (
        <Box
          style={{
            width: "100%",
            height: "1440px",
          }}
        >
          <Box
            style={{
              width: "90%",
              height: "448px",
              display: "flex",
              flexWrap: "wrap",
              gap: "29px",
              margin: "auto",
              justifyContent: "center",
            }}
          >
            {pageProducts.map((product) => (
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
                        <Link to={`/product/details/${product.id}`}>
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
                >
                  <Box
                    style={{
                      height: "100px",
                      gap: 8,
                      alignItems: "center",
                      flexDirection: "column",
                      display: "flex",
                    }}
                  >
                    <Box
                      style={{
                        height: "100px",
                        gap: 8,
                        alignItems: "center",
                        flexDirection: "column",
                        display: "flex",
                      }}
                    >
                      <RatingStars />

                      <Box
                        style={{
                          height: "26px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <p
                          style={{
                            textAlign: "center",
                            color: "#473838",
                            fontSize: 18,
                            fontFamily: "Kanit",
                            fontWeight: "400",
                            letterSpacing: 0.09,
                          }}
                        >
                          {product.name}
                        </p>
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
                            color: "#F7AFBC",
                            fontSize: 24,
                            fontFamily: "Kanit",
                            fontWeight: "700",
                            lineHeight: 32,
                            letterSpacing: 0.12,
                          }}
                        >
                          <span style={{ margin: 2 }}>NGN</span>
                          {product.current_price[0]?.NGN[0]}
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            ))}
            <Box display={{ base: "block", md: "none" }}>
              <PrevNext
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalPages={totalPages}
              />
            </Box>
          </Box>
        </Box>
      ) : (
        <div>No products available</div>
      )}
      <Box display={{ base: "none", md: "block" }}>
        <PrevNext
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
      </Box>
    </Box>
  );
};

export default ShopAll;
