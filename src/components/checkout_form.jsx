import React from "react";
import "../hover_product.css";
import visa from "../assets/images/visa_card.png";
const CheckoutForm = () => {
  return (
    <div
      width={{ base: "80%", xl: "548" }}
      style={{
        height: 414,
        top: 857,
        left: 446,
        gap: 16,
        display: "flex",
        flexDirection: "column",
        margin: "auto",
        position: "absolute",
      }}
    >
      <div
        style={{
          backgroundColor: "#EEE4E3",
          height: 56,
          padding: "12px 16px",
          letterSpacing: 0.09,
          fontFamily: "Kanit",
          fontWeight: 400,
          size: "24px",
          color: "#473838",
          whiteSpace: "nowrap",
        }}
      >
        Delivery
      </div>

      <div
        width={{ base: "80%", xl: "548" }}
        style={{
          height: 342,
          gap: 22,
          display: "flex",
          flexDirection: "column",
          fontFamily: "Kanit",
          size: 18,
          fontWeight: 400,
          letterspacing: 0.005,
          color: "#B2A6A6",
        }}
      >
        <input
          style={{
            padding: "12px 16px",
            width: "100%",
            height: 50,
            border: "1px solid #d9d9d9",
          }}
          placeholder="First Name"
        ></input>
        <input
          style={{
            padding: "12px 16px",
            width: "100%",
            height: 50,
            border: "1px solid #d9d9d9",
          }}
          placeholder="Last Name"
        ></input>
        <input
          style={{
            padding: "12px 16px",
            width: "100%",
            height: 50,
            border: "1px solid #d9d9d9",
          }}
          placeholder="Email"
        ></input>
        <input
          style={{
            width: "100%",
            padding: "12px 16px",
            height: 50,
            border: "1px solid #d9d9d9",
          }}
          placeholder="Phone"
        ></input>
        <input
          style={{
            width: "100%",
            padding: "12px 16px",
            height: 50,
            border: "1px solid #d9d9d9",
          }}
          placeholder="Address"
        ></input>
      </div>

      <div
        style={{
          width: 554,
          height: 386,
          top: 1319,
          left: 446,
          gap: 24,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            width: 554,
            height: 90,
            gap: 8,
            letterSpacing: 0.09,
            fontFamily: "Kanit",
            fontWeight: 400,
            color: "#473838",
            display: "flex",
            flexDirection: "column",
            whiteSpace: "nowrap",
          }}
        >
          <div
            style={{
              backgroundColor: "#EEE4E3",
              width: 554,
              height: 56,
              padding: "12px 16px",
              letterSpacing: 0.09,
              size: "24px",
            }}
          >
            Payment
          </div>

          <div
            style={{
              width: 554,
              height: 26,
              size: "18px",
            }}
          >
            Choose your payment method
          </div>
        </div>

        <div
          style={{
            width: 554,
            height: 178,
            gap: 8,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <label
            style={{
              alignContent: "center",
              width: "100%",
              height: 54,
              border: "6px solid #eee4e3",
            }}
          >
            <input type="radio" />
            <div
              style={{
                width: "97%",
                display: "flex",
                position: "relative",
                top: -30,
                left: 25,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              Credit Card
              <img style={{ width: 137.4, height: 30 }} src={visa} />
            </div>
          </label>

          <input
            style={{
              padding: "12px 16px",
              width: "100%",
              height: 50,
              border: "1px solid #d9d9d9",
            }}
            placeholder="Card Number"
          ></input>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <input
              style={{
                width: 264,
                padding: "12px 16px",
                height: 50,
                border: "1px solid #d9d9d9",
              }}
              placeholder="CVV"
            ></input>
            <input
              style={{
                width: 264,
                padding: "12px 16px",
                height: 50,
                border: "1px solid #d9d9d9",
              }}
              placeholder="Expiry Date"
            ></input>
          </div>
        </div>

        <label
          style={{
            width: "554",
            height: 54,
            border: "6px solid #eee4e3",
          }}
        >
          <input type="radio" />
          Transfer
        </label>
      </div>

      <div
        style={{
          width: 554,
          height: 50,
          top: 1790,
          left: 446,
          gap: 8,
          backgroundColor: "#ED8174",
          padding: "12px 16px",
        }}
      >
        <p
          style={{
            width: 292,
            height: 26,
            letterSpacing: 0.09,
            textAlign: "center",
            fontFamily: "Kanit",
            fontWeight: 400,
            margin: "auto",
            size: "18px",
            color: "#fff",
          }}
        >
          Pay Now
        </p>
      </div>
    </div>
  );
};

export default CheckoutForm;
