import React from "react";
import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import RatingStars from "./rating_stars";
import skincare1 from "..//assets/images/skincare1.png";
import product2 from "..//assets/images/product2.png";
import skincare3 from "..//assets/images/skincare3.png";
import product4 from "..//assets/images/product4.png";
import product5 from "..//assets/images/product5.png";
import skincare6 from "..//assets/images/skincare6.png";
import skincare7 from "..//assets/images/skincare7.png";
import product8 from "..//assets/images/product8.png";
import product9 from "..//assets/images/product9.png";
import product10 from "..//assets/images/product10.png";
import skincare11 from "..//assets/images/skincare11.png";
import product12 from "..//assets/images/product12.png";
import PrevNext from "./prev_next";
import smallStar from "..//assets/images/smallStar.png";
import plainStar from "..//assets/images/plainStar.png";
import "../hover_product.css";

const Skincare = () => {
  return (
    <Box
      style={{
        width: "100%",
        height: "1596px",
        position: "absolute",
        gap: "114px",
        top: "504px",
      }}
    >
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
          {/* one card image */}
          <Box
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
                src={skincare1}
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

          {/* one card image */}
          <Box
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
                  Save 10%
                </p>
              </Box>

              <img
                src={product2}
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

          {/* one card image */}
          <Box
            style={{
              width: "278.25px",
              height: "448px",
              gap: "29px",
            }}
          >
            <Box
              style={{
                width: "278.25px",
                height: "340px",
                backgroundColor: "#f1f0f0",
                display: "flex",
                position: "relative",
              }}
            >
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
                  Sold Out
                </p>
              </Box>
              <img
                src={skincare3}
                style={{
                  width: "232px",
                  position: "absolute",
                  height: "286px",
                  top: "27px",
                  left: "23px",
                  zIndex: "1",
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
                    Roladan Kit
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
                    $500
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
                  Save 14%
                </p>
              </Box>
              <img
                src={product4}
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
                    Lano Serum
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
              gap: "8px",
            }}
          >
            <Box
              style={{
                width: "278.25px",
                height: "340px",
                backgroundColor: "#f1f0f0",
                display: "flex",
                position: "relative",
              }}
            >
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
                  Sold Out
                </p>
              </Box>
              <img
                src={product5}
                style={{
                  width: "232px",
                  position: "absolute",
                  height: "286px",
                  top: "27px",
                  left: "23px",
                  zIndex: "1",
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
                    Lip Balm
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
                    $20
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
                    $15
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
                  Save 5%
                </p>
              </Box>
              <img
                src={skincare6}
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
                    Lim Lip Gloss
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
                  Save 14%
                </p>
              </Box>
              <img
                src={skincare7}
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
                    Branti Lipstick
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
                  Save 14%
                </p>
              </Box>
              <img
                src={product8}
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
                    Sekine Shower Gel
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
                    $430
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
                    $400
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
                  Save 14%
                </p>
              </Box>
              <img
                src={product9}
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
                    Kora Body Wash
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
                  Save 14%
                </p>
              </Box>
              <img
                src={product10}
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
                    Jami Face Cream
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
                  Save 14%
                </p>
              </Box>
              <img
                src={skincare11}
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
                    Sekine Make-up Kit
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
                  Save 14%
                </p>
              </Box>
              <img
                src={product12}
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
                    Ora Face Cream
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

export default Skincare;
