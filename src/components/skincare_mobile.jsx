import React from "react";
import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import product1 from "..//assets/images/product1.png";
import product2 from "..//assets/images/product2.png";
import PrevNext from "./prev_next";
import smallStar from "..//assets/images/smallStar.png";
import plainStar from "..//assets/images/plainStar.png";
import "../hover_product.css";

const SkinCareMobile = () => {
  return (
    <Box
      display={{ base: "block", xl: "none" }}
      style={{
        width: "90%",
        position: "absolute",
        h: "1596px",
        top: "504px",
        left: "119.5px",
        gap: "114px",
      }}
    >
      <Box
        style={{
          width: "90%",
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
            justifyContent: "center",
          }}
        >
          <Box
            style={{
              width: "278.25px",
              height: "448px",
              gap: "8px",
            }}
          >
            {/* one card image */}

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
                <Link to="/addcart" className="hover_button">
                  Add to Cart
                </Link>
              </Box>
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

              <img
                src={product1}
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
                    justifyContent: "center",
                    height: "26px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      width: 132,
                      height: 24,
                      gap: "3px",
                    }}
                  >
                    <img
                      src={smallStar}
                      alt=""
                      style={{
                        width: 24,
                        height: 24,
                      }}
                    />
                    <img
                      src={smallStar}
                      alt=""
                      style={{
                        width: 24,
                        height: 24,
                      }}
                    />
                    <img
                      src={smallStar}
                      alt=""
                      style={{
                        width: 24,
                        height: 24,
                      }}
                    />
                    <img
                      src={smallStar}
                      alt=""
                      style={{
                        width: 24,
                        height: 24,
                      }}
                    />
                    <img
                      src={plainStar}
                      style={{
                        width: 24,
                        height: 24,
                      }}
                    />
                  </Box>

                  <Box
                    style={{
                      color: "#473838",
                      fontSize: 18,
                      fontFamily: "Kanit",
                      fontWeight: "400",
                      lineHeight: 26,
                      letterSpacing: 0.09,
                    }}
                  >
                    4 (5)
                  </Box>
                </Box>

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
                    Lora Starter Kit
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
                    $186
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* one card image */}
          <Box
            style={{
              width: "278.25px",
              height: "448px",
              gap: "29px",
            }}
          >
            <Box
              className="hover_product"
              style={{
                width: "278.25px",
                height: "340px",
                backgroundColor: "#f1f0f0",
                display: "flex",
                position: "relative",
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
                <Link to="/addcart" className="hover_button">
                  Add to Cart
                </Link>
              </Box>
              <Box
                style={{
                  position: "absolute",
                  maxWidth: "92px",
                  maxHeight: "30px",
                  top: "-1px",
                  left: "-1px",
                  padding: "4px 8px 4px 8px",
                  backgroundColor: "#EEE4E3",
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
                  Save 10%
                </p>
              </Box>
              <img
                src={product2}
                style={{
                  width: "232px",
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
                    justifyContent: "center",
                    height: "26px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      width: 132,
                      height: 24,
                      gap: "3px",
                    }}
                  >
                    <img
                      src={smallStar}
                      style={{
                        width: 24,
                        height: 24,
                      }}
                    />
                    <img
                      src={smallStar}
                      style={{
                        width: 24,
                        height: 24,
                      }}
                    />
                    <img
                      src={smallStar}
                      style={{
                        width: 24,
                        height: 24,
                      }}
                    />
                    <img
                      src={smallStar}
                      style={{
                        width: 24,
                        height: 24,
                      }}
                    />
                    <img
                      src={plainStar}
                      style={{
                        width: 24,
                        height: 24,
                      }}
                    />
                  </Box>

                  <Box
                    style={{
                      color: "#473838",
                      fontSize: 18,
                      fontFamily: "Kanit",
                      fontWeight: "400",
                      lineHeight: 26,
                      letterSpacing: 0.09,
                    }}
                  >
                    4 (5)
                  </Box>
                </Box>

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
                    Sekine Serum
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
                      color: "#473838",
                      fontSize: 24,
                      fontFamily: "Kanit",
                      fontWeight: "400",
                      textDecoration: "line-through",
                      lineHeight: 32,
                      letterSpacing: 0.12,
                    }}
                  >
                    $280
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
                    $186
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box
            style={{
              width: "278.25px",
              height: "448px",
              gap: "8px",
            }}
          >
            {/* one card image */}

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
                <Link to="/addcart" className="hover_button">
                  Add to Cart
                </Link>
              </Box>
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

              <img
                src={product1}
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
                    justifyContent: "center",
                    height: "26px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      width: 132,
                      height: 24,
                      gap: "3px",
                    }}
                  >
                    <img
                      src={smallStar}
                      alt=""
                      style={{
                        width: 24,
                        height: 24,
                      }}
                    />
                    <img
                      src={smallStar}
                      alt=""
                      style={{
                        width: 24,
                        height: 24,
                      }}
                    />
                    <img
                      src={smallStar}
                      alt=""
                      style={{
                        width: 24,
                        height: 24,
                      }}
                    />
                    <img
                      src={smallStar}
                      alt=""
                      style={{
                        width: 24,
                        height: 24,
                      }}
                    />
                    <img
                      src={plainStar}
                      style={{
                        width: 24,
                        height: 24,
                      }}
                    />
                  </Box>

                  <Box
                    style={{
                      color: "#473838",
                      fontSize: 18,
                      fontFamily: "Kanit",
                      fontWeight: "400",
                      lineHeight: 26,
                      letterSpacing: 0.09,
                    }}
                  >
                    4 (5)
                  </Box>
                </Box>

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
                    Lora Starter Kit
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
                    $186
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box
            style={{
              width: "278.25px",
              height: "448px",
              gap: "8px",
            }}
          >
            {/* one card image */}

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
                <Link to="/addcart" className="hover_button">
                  Add to Cart
                </Link>
              </Box>
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

              <img
                src={product1}
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
                    justifyContent: "center",
                    height: "26px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      width: 132,
                      height: 24,
                      gap: "3px",
                    }}
                  >
                    <img
                      src={smallStar}
                      alt=""
                      style={{
                        width: 24,
                        height: 24,
                      }}
                    />
                    <img
                      src={smallStar}
                      alt=""
                      style={{
                        width: 24,
                        height: 24,
                      }}
                    />
                    <img
                      src={smallStar}
                      alt=""
                      style={{
                        width: 24,
                        height: 24,
                      }}
                    />
                    <img
                      src={smallStar}
                      alt=""
                      style={{
                        width: 24,
                        height: 24,
                      }}
                    />
                    <img
                      src={plainStar}
                      style={{
                        width: 24,
                        height: 24,
                      }}
                    />
                  </Box>

                  <Box
                    style={{
                      color: "#473838",
                      fontSize: 18,
                      fontFamily: "Kanit",
                      fontWeight: "400",
                      lineHeight: 26,
                      letterSpacing: 0.09,
                    }}
                  >
                    4 (5)
                  </Box>
                </Box>

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
                    Lora Starter Kit
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
                    $186
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box
            style={{
              width: "278.25px",
              height: "448px",
              gap: "8px",
            }}
          >
            {/* one card image */}

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
                <Link to="/addcart" className="hover_button">
                  Add to Cart
                </Link>
              </Box>
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

              <img
                src={product1}
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
                    justifyContent: "center",
                    height: "26px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      width: 132,
                      height: 24,
                      gap: "3px",
                    }}
                  >
                    <img
                      src={smallStar}
                      alt=""
                      style={{
                        width: 24,
                        height: 24,
                      }}
                    />
                    <img
                      src={smallStar}
                      alt=""
                      style={{
                        width: 24,
                        height: 24,
                      }}
                    />
                    <img
                      src={smallStar}
                      alt=""
                      style={{
                        width: 24,
                        height: 24,
                      }}
                    />
                    <img
                      src={smallStar}
                      alt=""
                      style={{
                        width: 24,
                        height: 24,
                      }}
                    />
                    <img
                      src={plainStar}
                      style={{
                        width: 24,
                        height: 24,
                      }}
                    />
                  </Box>

                  <Box
                    style={{
                      color: "#473838",
                      fontSize: 18,
                      fontFamily: "Kanit",
                      fontWeight: "400",
                      lineHeight: 26,
                      letterSpacing: 0.09,
                    }}
                  >
                    4 (5)
                  </Box>
                </Box>

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
                    Lora Starter Kit
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
                    $186
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box
            style={{
              width: "278.25px",
              height: "448px",
              gap: "8px",
            }}
          >
            {/* one card image */}

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
                <Link to="/addcart" className="hover_button">
                  Add to Cart
                </Link>
              </Box>
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

              <img
                src={product1}
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
                    justifyContent: "center",
                    height: "26px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      width: 132,
                      height: 24,
                      gap: "3px",
                    }}
                  >
                    <img
                      src={smallStar}
                      alt=""
                      style={{
                        width: 24,
                        height: 24,
                      }}
                    />
                    <img
                      src={smallStar}
                      alt=""
                      style={{
                        width: 24,
                        height: 24,
                      }}
                    />
                    <img
                      src={smallStar}
                      alt=""
                      style={{
                        width: 24,
                        height: 24,
                      }}
                    />
                    <img
                      src={smallStar}
                      alt=""
                      style={{
                        width: 24,
                        height: 24,
                      }}
                    />
                    <img
                      src={plainStar}
                      style={{
                        width: 24,
                        height: 24,
                      }}
                    />
                  </Box>

                  <Box
                    style={{
                      color: "#473838",
                      fontSize: 18,
                      fontFamily: "Kanit",
                      fontWeight: "400",
                      lineHeight: 26,
                      letterSpacing: 0.09,
                    }}
                  >
                    4 (5)
                  </Box>
                </Box>

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
                    Lora Starter Kit
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
                    $186
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <PrevNext />
    </Box>
  );
};

export default SkinCareMobile;
