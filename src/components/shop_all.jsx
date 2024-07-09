import React from "react";
import { Link } from "react-router-dom";
import product1 from "..//assets/images/product1.png";
import product2 from "..//assets/images/product2.png";
import product3 from "..//assets/images/product3.png";
import product4 from "..//assets/images/product4.png";
import product5 from "..//assets/images/product5.png";
import product6 from "..//assets/images/product6.png";
import product7 from "..//assets/images/product7.png";
import product8 from "..//assets/images/product8.png";
import product9 from "..//assets/images/product9.png";
import product10 from "..//assets/images/product10.png";
import product11 from "..//assets/images/product11.png";
import product12 from "..//assets/images/product12.png";
import PrevNext from "./prev_next";
import smallStar from "..//assets/images/smallStar.png";
import plainStar from "..//assets/images/plainStar.png";
import "../hover_product.css";

const ShopAll = () => {
  return (
    <div
      style={{
        position: "absolute",
        width: "1200px",
        h: "1596px",
        top: "504px",
        left: "119.5px",
        gap: "114px",
      }}
    >
      <div
        style={{
          width: "1200px",
          height: "1440px",
          display: "flex",
          flexDirection: "column",
          gap: "48px",
        }}
      >
        <div
          style={{
            width: "1200px",
            height: "448px",
            display: "flex",
            gap: "29px",
          }}
        >
          <div
            style={{
              width: "278.25px",
              height: "448px",
              gap: "8px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* one card image */}

            <div
              className="hover_product"
              style={{
                width: "278.25px",
                height: "340px",
                backgroundColor: "#f1f0f0",
                display: "flex",
              }}
            >
              <div
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
              </div>
              <div
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
              </div>

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
            </div>

            {/* CAPTION */}
            <div
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
              <div
                style={{
                  height: "100px",
                  gap: 8,
                  alignItems: "center",
                  flexDirection: "column",
                  display: "flex",
                }}
              >
                <div
                  style={{
                    justifyContent: "center",
                    height: "26px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <div
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
                  </div>

                  <div
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
                  </div>
                </div>

                <div
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
                </div>

                <div
                  style={{
                    gap: 8,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "26px",
                  }}
                >
                  <div
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
                  </div>

                  <div
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
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* one card image */}
          <div
            style={{
              width: "1200px",
              height: "448px",
              gap: "29px",
            }}
          >
            <div
              className="hover_product"
              style={{
                width: "278.25px",
                height: "340px",
                backgroundColor: "#f1f0f0",
                display: "flex",
                position: "relative",
              }}
            >
              <div
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
              </div>
              <div
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
              </div>
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
            </div>

            {/* CAPTION */}
            <div
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
              <div
                style={{
                  height: "100px",
                  gap: 8,
                  alignItems: "center",
                  flexDirection: "column",
                  display: "flex",
                }}
              >
                <div
                  style={{
                    justifyContent: "center",
                    height: "26px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <div
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
                  </div>

                  <div
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
                  </div>
                </div>

                <div
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
                </div>

                <div
                  style={{
                    gap: 8,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "26px",
                  }}
                >
                  <div
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
                  </div>

                  <div
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
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              width: "1200px",
              height: "448px",
              gap: "29px",
            }}
          >
            <div
              style={{
                width: "278.25px",
                height: "340px",
                backgroundColor: "#f1f0f0",
                display: "flex",
                position: "relative",
              }}
            >
              <div
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
              </div>
              <img
                src={product3}
                style={{
                  width: "232px",
                  position: "absolute",
                  height: "286px",
                  top: "27px",
                  left: "23px",
                  zIndex: "1",
                }}
              />
            </div>

            {/* CAPTION */}
            <div
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
              <div
                style={{
                  height: "100px",
                  gap: 8,
                  alignItems: "center",
                  flexDirection: "column",
                  display: "flex",
                }}
              >
                <div
                  style={{
                    justifyContent: "center",
                    height: "26px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <div
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
                  </div>

                  <div
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
                  </div>
                </div>

                <div
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
                </div>

                <div
                  style={{
                    gap: 8,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "26px",
                  }}
                >
                  <div
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
                  </div>

                  <div
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
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              width: "1200px",
              height: "448px",
              gap: "29px",
            }}
          >
            {/* one card image */}
            <div
              className="hover_product"
              style={{
                width: "278.25px",
                height: "340px",

                backgroundColor: "#f1f0f0",
                display: "flex",
                position: "relative",
              }}
            >
              <div
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
              </div>
              <div
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
              </div>
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
            </div>

            {/* CAPTION */}
            <div
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
              <div
                style={{
                  height: "100px",
                  gap: 8,
                  alignItems: "center",
                  flexDirection: "column",
                  display: "flex",
                }}
              >
                <div
                  style={{
                    justifyContent: "center",
                    height: "26px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <div
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
                  </div>

                  <div
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
                  </div>
                </div>

                <div
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
                </div>

                <div
                  style={{
                    gap: 8,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "26px",
                  }}
                >
                  <div
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
                  </div>

                  <div
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* second role of four cards */}
        <div className="" style={{ display: "flex", gap: "29px" }}>
          <div
            style={{
              width: "1200px",
              height: "448px",
            }}
          >
            {/* one card image */}
            <div
              style={{
                width: "278.25px",
                height: "340px",
                backgroundColor: "#f1f0f0",
                display: "flex",
                position: "relative",
              }}
            >
              <div
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
              </div>
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
            </div>

            {/* CAPTION */}
            <div
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
              <div
                style={{
                  height: "100px",
                  gap: 8,
                  alignItems: "center",
                  flexDirection: "column",
                  display: "flex",
                }}
              >
                <div
                  style={{
                    justifyContent: "center",
                    height: "26px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <div
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
                  </div>

                  <div
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
                  </div>
                </div>

                <div
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
                </div>

                <div
                  style={{
                    gap: 8,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "26px",
                  }}
                >
                  <div
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
                  </div>

                  <div
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
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              width: "1200px",
              height: "448px",
              gap: "29px",
            }}
          >
            {/* one card image */}
            <div
              className="hover_product"
              style={{
                width: "278.25px",
                height: "340px",
                backgroundColor: "#f1f0f0",
                display: "flex",
                position: "relative",
              }}
            >
              <div
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
              </div>
              <div
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
              </div>
              <img
                src={product6}
                style={{
                  width: "232px",
                  position: "absolute",
                  height: "286px",
                  top: "27px",
                  left: "23px",
                }}
              />
            </div>

            {/* CAPTION */}
            <div
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
              <div
                style={{
                  height: "100px",
                  gap: 8,
                  alignItems: "center",
                  flexDirection: "column",
                  display: "flex",
                }}
              >
                <div
                  style={{
                    justifyContent: "center",
                    height: "26px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <div
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
                  </div>

                  <div
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
                  </div>
                </div>

                <div
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
                </div>

                <div
                  style={{
                    gap: 8,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "26px",
                  }}
                >
                  <div
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
                  </div>

                  <div
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
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              width: "1200px",
              height: "448px",
              gap: "29px",
            }}
          >
            {/* one card image */}
            <div
              className="hover_product"
              style={{
                width: "278.25px",
                height: "340px",
                backgroundColor: "#f1f0f0",
                display: "flex",
                position: "relative",
              }}
            >
              <div
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
              </div>
              <div
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
              </div>
              <img
                src={product7}
                style={{
                  width: "232px",
                  position: "absolute",
                  height: "286px",
                  top: "27px",
                  left: "23px",
                }}
              />
            </div>

            {/* CAPTION */}
            <div
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
              <div
                style={{
                  height: "100px",
                  gap: 8,
                  alignItems: "center",
                  flexDirection: "column",
                  display: "flex",
                }}
              >
                <div
                  style={{
                    justifyContent: "center",
                    height: "26px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <div
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
                  </div>

                  <div
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
                  </div>
                </div>

                <div
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
                </div>

                <div
                  style={{
                    gap: 8,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "26px",
                  }}
                >
                  <div
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
                  </div>

                  <div
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
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              width: "1200px",
              height: "448px",
              gap: "29px",
            }}
          >
            {/* one card image */}
            <div
              className="hover_product"
              style={{
                width: "278.25px",
                height: "340px",
                backgroundColor: "#f1f0f0",
                display: "flex",
                position: "relative",
              }}
            >
              <div
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
              </div>
              <div
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
              </div>
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
            </div>

            {/* CAPTION */}
            <div
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
              <div
                style={{
                  height: "100px",
                  gap: 8,
                  alignItems: "center",
                  flexDirection: "column",
                  display: "flex",
                }}
              >
                <div
                  style={{
                    justifyContent: "center",
                    height: "26px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <div
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
                  </div>

                  <div
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
                  </div>
                </div>

                <div
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
                </div>

                <div
                  style={{
                    gap: 8,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "26px",
                  }}
                >
                  <div
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
                  </div>

                  <div
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* third role of four cards */}
        <div className="" style={{ display: "flex", gap: "29px" }}>
          <div
            style={{
              width: "1200px",
              height: "448px",
            }}
          >
            {/* one card image */}
            <div
              className="hover_product"
              style={{
                width: "278.25px",
                height: "340px",
                backgroundColor: "#f1f0f0",
                display: "flex",
                position: "relative",
              }}
            >
              <div
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
              </div>
              <div
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
              </div>
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
            </div>

            {/* CAPTION */}
            <div
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
              <div
                style={{
                  height: "100px",
                  gap: 8,
                  alignItems: "center",
                  flexDirection: "column",
                  display: "flex",
                }}
              >
                <div
                  style={{
                    justifyContent: "center",
                    height: "26px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <div
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
                  </div>

                  <div
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
                  </div>
                </div>

                <div
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
                </div>

                <div
                  style={{
                    gap: 8,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "26px",
                  }}
                >
                  <div
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
                  </div>

                  <div
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
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              width: "1200px",
              height: "448px",
              gap: "29px",
            }}
          >
            {/* one card image */}
            <div
              className="hover_product"
              style={{
                width: "278.25px",
                height: "340px",
                backgroundColor: "#f1f0f0",
                display: "flex",
                position: "relative",
              }}
            >
              <div
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
              </div>
              <div
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
              </div>
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
            </div>

            {/* CAPTION */}
            <div
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
              <div
                style={{
                  height: "100px",
                  gap: 8,
                  alignItems: "center",
                  flexDirection: "column",
                  display: "flex",
                }}
              >
                <div
                  style={{
                    justifyContent: "center",
                    height: "26px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <div
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
                  </div>

                  <div
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
                  </div>
                </div>

                <div
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
                </div>

                <div
                  style={{
                    gap: 8,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "26px",
                  }}
                >
                  <div
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
                  </div>

                  <div
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
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              width: "1200px",
              height: "448px",
              gap: "29px",
            }}
          >
            {/* one card image */}
            <div
              className="hover_product"
              style={{
                width: "278.25px",
                height: "340px",
                backgroundColor: "#f1f0f0",
                display: "flex",
                position: "relative",
              }}
            >
              <div
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
              </div>
              <div
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
              </div>
              <img
                src={product11}
                style={{
                  width: "232px",
                  position: "absolute",
                  height: "286px",
                  top: "27px",
                  left: "23px",
                }}
              />
            </div>

            {/* CAPTION */}
            <div
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
              <div
                style={{
                  height: "100px",
                  gap: 8,
                  alignItems: "center",
                  flexDirection: "column",
                  display: "flex",
                }}
              >
                <div
                  style={{
                    justifyContent: "center",
                    height: "26px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <div
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
                  </div>

                  <div
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
                  </div>
                </div>

                <div
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
                </div>

                <div
                  style={{
                    gap: 8,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "26px",
                  }}
                >
                  <div
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
                  </div>

                  <div
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
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              width: "1200px",
              height: "448px",
              gap: "29px",
            }}
          >
            {/* one card image */}
            <div
              className="hover_product"
              style={{
                width: "278.25px",
                height: "340px",
                backgroundColor: "#f1f0f0",
                display: "flex",
                position: "relative",
              }}
            >
              <div
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
              </div>
              <div
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
              </div>
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
            </div>

            {/* CAPTION */}
            <div
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
              <div
                style={{
                  height: "100px",
                  gap: 8,
                  alignItems: "center",
                  flexDirection: "column",
                  display: "flex",
                }}
              >
                <div
                  style={{
                    justifyContent: "center",
                    height: "26px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <div
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
                  </div>

                  <div
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
                  </div>
                </div>

                <div
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
                </div>

                <div
                  style={{
                    gap: 8,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "26px",
                  }}
                >
                  <div
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
                  </div>

                  <div
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PrevNext />
    </div>
  );
};

export default ShopAll;
