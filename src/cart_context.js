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
            ? { ...item, quantity: item.quantity }
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

  const increaseQuantity = (unique_id) => {
    const updatedCart = cart.map((item) =>
      item.unique_id === unique_id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    setCart(updatedCart);
  };

  const decreaseQuantity = (unique_id) => {
    const updatedCart = cart.map((item) =>
      item.unique_id === unique_id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart);
  };

  const calculateTotalPrice = () => {
    return cart.reduce(
      (acc, item) => acc + item.current_price[0].NGN[0] * item.quantity,
      0
    );
  };

  const totalPrice = calculateTotalPrice();

  return (
    <CartContext.Provider
      value={{
        cart,
        cartCount,
        totalPrice,
        increaseQuantity,
        decreaseQuantity,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
