import React, { useState } from "react";
import "../hover_product.css";
import visa from "../assets/images/visa_card.png";
import { Link, Navigate } from "react-router-dom";

const CheckoutForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCvv] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [errors, setErrors] = useState({});

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      return <Navigate to="/success" />;
    } else {
      setErrors(errors);
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!firstName) {
      errors.firstName = "First name is required";
    }
    if (!lastName) {
      errors.lastName = "Last name is required";
    }
    if (!email) {
      errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      errors.email = "Invalid email address";
    }
    if (!phone) {
      errors.phone = "Phone number is required";
    }
    if (!address) {
      errors.address = "Address is required";
    }
    if (selectedOption === "creditCard") {
      if (!cardNumber) {
        errors.cardNumber = "Card number is required";
      } else if (!/^[0-9]{13,16}$/.test(cardNumber)) {
        errors.cardNumber = "Invalid card number";
      }
      if (!cvv) {
        errors.cvv = "CVV is required";
      } else if (!/^[0-9]{3,4}$/.test(cvv)) {
        errors.cvv = "Invalid CVV";
      }
      if (!expiryDate) {
        errors.expiryDate = "Expiry date is required";
      } else if (!/^(0[1-9]|1[0-2])\/[0-9]{2}$/.test(expiryDate)) {
        errors.expiryDate = "Invalid expiry date";
      }
    }
    return errors;
  };

  return (
    <div
      width={{ base: "100%", xl: "548" }}
      margin={{ base: "0", xl: "auto" }}
      style={{
        height: 414,
        top: 857,
        left: 446,
        gap: 16,
        display: "flex",
        flexDirection: "column",
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
        width={{ base: "100%", xl: "548" }}
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
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        {errors.firstName && (
          <div style={{ color: "red" }}>{errors.firstName}</div>
        )}
        <input
          style={{
            padding: "12px 16px",
            width: "100%",
            height: 50,
            border: "1px solid #d9d9d9",
          }}
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        {errors.lastName && (
          <div style={{ color: "red" }}>{errors.lastName}</div>
        )}
        <input
          style={{
            padding: "12px 16px",
            width: "100%",
            height: 50,
            border: "1px solid #d9d9d9",
          }}
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
        <input
          style={{
            width: "100%",
            padding: "12px 16px",
            height: 50,
            border: "1px solid #d9d9d9",
          }}
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        {errors.phone && <div style={{ color: "red" }}>{errors.phone}</div>}
        <input
          style={{
            width: "100%",
            padding: "12px 16px",
            height: 50,
            border: "1px solid #d9d9d9",
          }}
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        {errors.address && <div style={{ color: "red" }}>{errors.address}</div>}
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
              <input
                name="pay"
                onChange={handleOptionChange}
                type="radio"
                value="creditCard"
              />
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

            {selectedOption === "creditCard" && (
              <>
                <input
                  style={{
                    padding: "12px 16px",
                    width: "100%",
                    height: 50,
                    border: "1px solid #d9d9d9",
                  }}
                  placeholder="Card Number"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                />
                {errors.cardNumber && (
                  <div style={{ color: "red" }}>{errors.cardNumber}</div>
                )}
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <input
                    style={{
                      width: 264,
                      padding: "12px 16px",
                      height: 50,
                      border: "1px solid #d9d9d9",
                    }}
                    placeholder="CVV"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                  />
                  {errors.cvv && (
                    <div style={{ color: "red" }}>{errors.cvv}</div>
                  )}
                  <input
                    style={{
                      width: 264,
                      padding: "12px 16px",
                      height: 50,
                      border: "1px solid #d9d9d9",
                    }}
                    placeholder="Expiry Date"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                  />
                </div>
              </>
            )}

            <label
              style={{
                width: "554",
                height: 54,
                border: "6px solid #eee4e3",
              }}
            >
              <input
                name="pay"
                onChange={handleOptionChange}
                type="radio"
                value="transfer"
              />
              Transfer
            </label>

            <div
              style={{
                width: 554,
                height: 50,
                top: 1790,
                left: 446,
                textAlign: "center",
                gap: 8,
                backgroundColor: "#ED8174",
                padding: "12px 16px",
              }}
            >
              <Link to="/success">
                <button
                  style={{
                    width: 292,
                    height: 26,
                    letterSpacing: 0.09,
                    fontFamily: "Kanit",
                    fontWeight: 400,
                    size: "18px",
                    color: "#fff",
                    cursor: "pointer",
                  }}
                  onClick={handleSubmit}
                >
                  Pay Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
