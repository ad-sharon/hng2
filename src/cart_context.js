import React, { createContext, useContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = sessionStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [cartCount, setCartCount] = useState(() => {
    const savedCart = sessionStorage.getItem("cart");
    return savedCart
      ? JSON.parse(savedCart).reduce((acc, item) => acc + item.quantity, 0)
      : 0;
  });

  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(cart));
    const newCount = cart.reduce((acc, item) => acc + item.quantity, 0);
    setCartCount(newCount);
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(
        (item) => item.unique_id === product.unique_id
      );

      if (existingProduct) {
        return prevCart.map((item) =>
          item.unique_id === product.unique_id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) =>
      prevCart.filter((product) => product.unique_id !== productId)
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, cartCount, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
