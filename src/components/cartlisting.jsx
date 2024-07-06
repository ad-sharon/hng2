import React from "react";
import search from "../assets/images/search.png";
import cart from "../assets/images/cart.png";
import cart1 from "../assets/images/cart1.png";

const CartListing = () => {
  return (
    <div
      style={{
        position: "absolute",
        width: 1200,
        height: 525,
        top: "420px",
        left: "120px",
        flexDirection: "column",
        gap: 16,
        display: "flex",
      }}
    >
      <div
        style={{
          width: 1199,
          height: "32px",
          justifyContent: "space-between",
          alignItems: "center",
          display: "flex",
        }}
      >
        <div
          style={{
            width: 624,
            color: "#473838",
            fontSize: 24,
            fontFamily: "Kanit",
            fontWeight: "400",
            lineHeight: 32,
            letterSpacing: 0.12,
          }}
        >
          Cart
        </div>

        <div
          style={{
            width: "85px",
            height: 24,
            justifyContent: "space-between",
            alignItems: "center",
            display: "flex",
          }}
        >
          <div style={{ width: 24, height: 24, position: "relative" }}>
            <img src={search} />
          </div>

          <div style={{ width: 24, height: 24, position: "relative" }}>
            <img src={cart} />
          </div>
        </div>
      </div>

      {/* product start */}
      <div
        style={{
          height: "465px",
          width: "1200px",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: 120,
          display: "flex",
        }}
      >
        <div
          style={{
            width: 757,
            height: "465px",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 41,
            display: "flex",
          }}
        >
          <div
            style={{
              paddingBottom: 40,
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 22,
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div
              style={{
                height: 172,
                width: "146px",
                background: "#F1F0F0",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                display: "inline-flex",
              }}
            >
              <img
                src={cart1}
                style={{
                  width: "124px",
                  height: "148px",
                  top: "11.98px",
                  left: "12.91px",
                }}
                alt=""
              />
            </div>

            <div
              style={{
                width: 589,
                height: "140px",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 16,
                display: "inline-flex",
              }}
            >
              <div
                style={{
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: 21,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    width: 166,
                    color: "#473838",
                    fontSize: 24,
                    fontFamily: "Kanit",
                    fontWeight: "400",
                    lineHeight: 32,
                    letterSpacing: 0.12,
                  }}
                >
                  Lora Starter Kit
                </div>
              </div>

              <div
                style={{
                  height: "50px",
                  width: "589px",
                  justifyContent: "space-between",
                  alignItems: "center",
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    width: 150,
                    height: "50px",
                    padding: "12px 16px",
                    border: "1px #B2A6A6 solid",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: 31,
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      width: 24,
                      height: 24,
                      paddingLeft: 5,
                      paddingRight: 5,
                      justifyContent: "center",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <img src={cart}></img>
                  </div>

                  <div
                    style={{
                      width: "8px",
                      textAlign: "center",
                      color: "#473838",
                      fontSize: 24,
                      fontFamily: "Kanit",
                      fontWeight: "400",
                      lineHeight: 32,
                      letterSpacing: 0.12,
                      wordWrap: "break-word",
                    }}
                  >
                    1
                  </div>

                  <div
                    style={{
                      width: 24,
                      height: 24,
                      padding: 5,
                      justifyContent: "center",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <img src={cart} alt="" />
                  </div>
                </div>

                <div
                  style={{
                    textAlign: "center",
                    color: "#473838",
                    fontSize: 24,
                    fontFamily: "Kanit",
                    fontWeight: "700",
                    lineHeight: 32,
                    letterSpacing: 0.12,
                    wordWrap: "break-word",
                  }}
                >
                  $186
                </div>
              </div>

              <div
                style={{
                  width: 92,
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: 21,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    width: 166,
                    color: "#ED8174",
                    fontSize: 18,
                    fontFamily: "Kanit",
                    fontWeight: "400",
                    lineHeight: 26,
                    letterSpacing: 0.09,
                    wordWrap: "break-word",
                  }}
                >
                  Remove
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartListing;
{
  /* <div
            style={{
              alignSelf: "stretch",
              paddingBottom: 40,
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 22,
              display: "inline-flex",
            }}
          >
            <div
              style={{
                paddingTop: 10,
                paddingBottom: 14,
                paddingLeft: 13,
                paddingRight: 9,
                background: "#F1F0F0",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                display: "inline-flex",
              }}
            >
              <div
                style={{
                  alignSelf: "stretch",
                  height: 148,
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  display: "inline-flex",
                }}
              >
                <img
                  style={{ width: 166.49, height: 162.49 }}
                  src="https://via.placeholder.com/166x162"
                />
              </div>
            </div>
            <div
              style={{
                width: 589,
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 16,
                display: "inline-flex",
              }}
            >
              <div
                style={{
                  alignSelf: "stretch",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: 21,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    width: 166,
                    color: "#473838",
                    fontSize: 24,
                    fontFamily: "Kanit",
                    fontWeight: "400",
                    lineHeight: 32,
                    letterSpacing: 0.12,
                    wordWrap: "break-word",
                  }}
                >
                  Lim Lip Gloss
                </div>
              </div>
              <div
                style={{
                  alignSelf: "stretch",
                  justifyContent: "space-between",
                  alignItems: "center",
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    width: 150,
                    paddingLeft: 16,
                    paddingRight: 16,
                    paddingTop: 12,
                    paddingBottom: 12,
                    border: "1px #B2A6A6 solid",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: 31,
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      width: 24,
                      height: 24,
                      paddingLeft: 5,
                      paddingRight: 5,
                      justifyContent: "center",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <div
                      style={{ width: 14, height: 2, background: "#473838" }}
                    ></div>
                  </div>
                  <div
                    style={{
                      textAlign: "center",
                      color: "#473838",
                      fontSize: 24,
                      fontFamily: "Kanit",
                      fontWeight: "400",
                      lineHeight: 32,
                      letterSpacing: 0.12,
                      wordWrap: "break-word",
                    }}
                  >
                    1{" "}
                  </div>
                  <div
                    style={{
                      width: 24,
                      height: 24,
                      padding: 5,
                      justifyContent: "center",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <div
                      style={{ width: 14, height: 14, background: "#473838" }}
                    ></div>
                  </div>
                </div>
                <div
                  style={{
                    textAlign: "center",
                    color: "#473838",
                    fontSize: 24,
                    fontFamily: "Kanit",
                    fontWeight: "700",
                    lineHeight: 32,
                    letterSpacing: 0.12,
                    wordWrap: "break-word",
                  }}
                >
                  $186
                </div>
              </div>
              <div
                style={{
                  width: 92,
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: 21,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    width: 166,
                    color: "#ED8174",
                    fontSize: 18,
                    fontFamily: "Kanit",
                    fontWeight: "400",
                    lineHeight: 26,
                    letterSpacing: 0.09,
                    wordWrap: "break-word",
                  }}
                >
                  Remove
                </div>
              </div>
            </div>
          </div> */
}
