import React from "react";
import women from "..//assets/images/women.png";
import star from "..//assets//images/star.png";

const TitleBar = () => {
  return (
    <div style={{ width: "1440px", height: "238px" }}>
      <div
        style={{
          backgroundColor: "#F7AFBC",
          width: "1440px",
          height: "189px",
          position: "relative",
        }}
      >
        <div
          className=""
          style={{
            width: "349.08px",
            height: "226.77px",
            top: "0.21px",
            left: "116.5px",
          }}
        >
          <div
            className="Star1"
            style={{
              width: 188.26,
              height: 193.56,
              left: 116.5,
              top: 33.21,
              position: "absolute",
              color: "#473838",
            }}
          >
            <img src={star} />
          </div>
          <div
            style={{
              position: "absolute",
              width: "279.48px",
              height: "200.21px",
              top: "0.21px",
              left: "186.1px",
            }}
          >
            <img src={women} alt="women" />
          </div>
        </div>

        <div
          className=""
          style={{
            position: "absolute",
            width: "795px",
            height: "88px",
            top: "51px",
            left: "481px",
            flexDirection: "column",
            gap: "4px",
            display: "flex",
          }}
        >
          <div
            style={{
              width: "795px",
              fontWeight: "600",
              color: "#fff",
              fontSize: "44px",
              fontFamily: "Taviraj, sans-serif",
              lineHeight: "52px",
              letterSpacing: "-0.88px",
              textAlign: "center",
            }}
          >
            Radiant beauty for every skin glow
          </div>

          <div
            style={{
              height: "32px",
              width: "795px",
              fontWeight: "400",
              color: "#fff",
              fontSize: "24px",
              fontFamily: "Kanit, sans-serif",
              lineHeight: "32px",
              letterSpacing: "0.12px",
              textAlign: "center",
            }}
          >
            Inclusive skincare for every complexion, from light to deep
          </div>
        </div>
      </div>
      <div
        style={{
          height: "50px",
          width: "1440px",
          position: "absolute",
          backgroundColor: "#f8f8f8",
          zIndex: "3",
          display: "flex",
          flexDirection: "row",
          gap: "46px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "115px",
            height: "50px",
            borderTop: "8px solid #ED8174",
            padding: "12px 16px 12px 16px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <a
            style={{
              fontFamily: "Kanit",
              fontWeight: "400",
              fontSize: "18px",
              lineHeight: "26px",
              letterSpacing: "0.5px",
              textAlign: "center",
              alignItems: "center",
              color: "#241C1C",
            }}
            href="#"
          >
            Shop
          </a>
        </div>

        <div
          style={{
            width: "101px",
            height: "50px",
            padding: "12px 16px 12px 16px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <a
            style={{
              fontFamily: "Kanit",
              fontWeight: "400",
              fontSize: "18px",
              lineHeight: "26px",
              letterSpacing: "0.5px",
              textAlign: "center",
              color: "#241C1C",
            }}
            href="#"
          >
            Skincare
          </a>
        </div>

        <div
          style={{
            width: "119px",
            height: "50px",
            padding: "12px 16px 12px 16px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <a
            style={{
              fontFamily: "Kanit",
              fontWeight: "400",
              fontSize: "18px",
              lineHeight: "26px",
              letterSpacing: "0.5px",
              textAlign: "center",
              color: "#241C1C",
              whiteSpace: "nowrap",
            }}
            href="#"
          >
            Sets & Kits
          </a>
        </div>

        <div
          style={{
            width: "104px",
            height: "50px",
            padding: "12px 16px 12px 16px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <a
            style={{
              fontFamily: "Kanit",
              fontWeight: "400",
              fontSize: "18px",
              lineHeight: "26px",
              letterSpacing: "0.5px",
              textAlign: "center",
              color: "#241C1C",
              whiteSpace: "nowrap",
            }}
            href="#"
          >
            Make-up
          </a>
        </div>

        <div
          style={{
            width: "178px",
            height: "50px",
            padding: "12px 16px 12px 16px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <a
            style={{
              fontFamily: "Kanit",
              fontWeight: "400",
              fontSize: "18px",
              lineHeight: "26px",
              letterSpacing: "0.5px",
              textAlign: "center",
              color: "#241C1C",
              whiteSpace: "nowrap",
            }}
            href="#"
          >
            Shop by Concerns
          </a>
        </div>
      </div>
    </div>
  );
};

export default TitleBar;

// <div
// style={{
//   width: 324,
//   flexDirection: "column",
//   justifyContent: "flex-start",
//   alignItems: "flex-start",
//   gap: 41,
//   display: "inline-flex",
// }}
// >
// <div
//   style={{
//     alignSelf: "stretch",
//     height: 347,
//     flexDirection: "column",
//     justifyContent: "flex-start",
//     alignItems: "flex-start",
//     gap: 47,
//     display: "flex",
//   }}
// >
//   <div
//     style={{
//       alignSelf: "stretch",
//       height: 245,
//       flexDirection: "column",
//       justifyContent: "flex-start",
//       alignItems: "flex-start",
//       gap: 49,
//       display: "flex",
//     }}
//   >
//     <div
//       style={{
//         alignSelf: "stretch",
//         height: 98,
//         paddingLeft: 16,
//         paddingRight: 16,
//         paddingTop: 12,
//         paddingBottom: 12,
//         border: "1px #D9D9D9 solid",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//         display: "flex",
//       }}
//     >
//       <div
//         style={{
//           width: 52,
//           height: 48,
//           position: "relative",
//           flexDirection: "column",
//           justifyContent: "flex-start",
//           alignItems: "flex-start",
//           display: "inline-flex",
//         }}
//       >
//         <div
//           style={{
//             width: 51.42,
//             height: 33.06,
//             background: "#473838",
//           }}
//         ></div>
//         <div
//           style={{
//             width: 21.63,
//             height: 5.79,
//             background: "#473838",
//           }}
//         ></div>
//         <div
//           style={{
//             width: 21.81,
//             height: 32.98,
//             background: "#473838",
//           }}
//         ></div>
//       </div>
//       <div
//         style={{
//           textAlign: "center",
//           color: "#473838",
//           fontSize: 18,
//           fontFamily: "Kanit",
//           fontWeight: "400",
//           lineHeight: 26,
//           letterSpacing: 0.09,
//           wordWrap: "break-word",
//         }}
//       >
//         Door Delivery
//       </div>
//     </div>
//     <div
//       style={{
//         alignSelf: "stretch",
//         height: 98,
//         paddingLeft: 16,
//         paddingRight: 16,
//         paddingTop: 12,
//         paddingBottom: 12,
//         border: "1px #D9D9D9 solid",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//         display: "flex",
//       }}
//     >
//       <div style={{ width: 52, height: 52, position: "relative" }}>
//         <div
//           style={{
//             width: 33.27,
//             height: 33.27,
//             left: 9.37,
//             top: 9.37,
//             position: "absolute",
//             background: "#473838",
//           }}
//         ></div>
//         <div
//           style={{
//             width: 13.93,
//             height: 10.71,
//             left: 14.2,
//             top: 14.2,
//             position: "absolute",
//             background: "#473838",
//           }}
//         ></div>
//       </div>
//       <div
//         style={{
//           textAlign: "center",
//           color: "#473838",
//           fontSize: 18,
//           fontFamily: "Kanit",
//           fontWeight: "400",
//           lineHeight: 26,
//           letterSpacing: 0.09,
//           wordWrap: "break-word",
//         }}
//       >
//         Station Pick Up
//       </div>
//     </div>
//   </div>
//   <div
//     style={{
//       alignSelf: "stretch",
//       height: 55,
//       paddingLeft: 16,
//       paddingRight: 16,
//       paddingTop: 12,
//       paddingBottom: 12,
//       border: "1px #D9D9D9 solid",
//       justifyContent: "space-between",
//       alignItems: "center",
//       display: "inline-flex",
//     }}
//   >
//     <div
//       style={{
//         color: "#473838",
//         fontSize: 18,
//         fontFamily: "Kanit",
//         fontWeight: "400",
//         lineHeight: 26,
//         letterSpacing: 0.09,
//         wordWrap: "break-word",
//       }}
//     >
//       Subtotal
//     </div>
//     <div
//       style={{
//         textAlign: "center",
//         color: "#473838",
//         fontSize: 24,
//         fontFamily: "Kanit",
//         fontWeight: "700",
//         lineHeight: 32,
//         letterSpacing: 0.12,
//         wordWrap: "break-word",
//       }}
//     >
//       $186
//     </div>
//   </div>
// </div>
// <div
//   style={{
//     alignSelf: "stretch",
//     height: 50,
//     paddingLeft: 16,
//     paddingRight: 16,
//     paddingTop: 12,
//     paddingBottom: 12,
//     background: "#ED8174",
//     justifyContent: "center",
//     alignItems: "center",
//     gap: 8,
//     display: "inline-flex",
//   }}
// >
//   <div
//     style={{
//       flex: "1 1 0",
//       textAlign: "center",
//       color: "white",
//       fontSize: 18,
//       fontFamily: "Kanit",
//       fontWeight: "400",
//       lineHeight: 26,
//       letterSpacing: 0.09,
//       wordWrap: "break-word",
//     }}
//   >
//     Checkout
//   </div>
// </div>
// </div>
// </div>
// </div>
// </div>
