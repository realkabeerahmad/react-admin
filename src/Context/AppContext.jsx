// src/context/AppContext.js
import React, { createContext, useState, useEffect } from "react";

// Create the context
export const AppContext = createContext();

// Utility function to load from sessionStorage with fallback
const loadFromSessionStorage = (key, defaultValue) => {
  const savedValue = sessionStorage.getItem(key);
  return savedValue ? JSON.parse(savedValue) : defaultValue;
};

// Create the provider component
export const AppProvider = ({ children }) => {
  // State initialization with sessionStorage
  const [alert, setAlert] = useState("");
  const [severity, setSeverity] = useState("success");
  const [openAlert, setOpenAlert] = useState(false);

  const [Product, setProduct] = useState(loadFromSessionStorage("Product", {}));
  const [Products, setProducts] = useState(
    loadFromSessionStorage("Products", [])
  );

  const [pet, setPet] = useState(loadFromSessionStorage("pet", {}));
  const [login, setLogin] = useState(loadFromSessionStorage("login", false));
  const [user, setUser] = useState(
    loadFromSessionStorage("user", {
      firstName: "Kabeer",
      lastName: "Ahmad",
      image:
        "https://www.transparentpng.com/download/user/gray-user-profile-icon-png-fP8Q1P.png",
      role: "User",
    })
  );
  const [userDetails, setUserDetails] = useState(
    loadFromSessionStorage("userDetails", {})
  );
  const [cart, setCart] = useState(loadFromSessionStorage("cart", {}));

  // Save state to sessionStorage whenever it changes
  useEffect(() => {
    sessionStorage.setItem("Product", JSON.stringify(Product));
  }, [Product]);

  useEffect(() => {
    sessionStorage.setItem("Products", JSON.stringify(Products));
  }, [Products]);

  useEffect(() => {
    sessionStorage.setItem("pet", JSON.stringify(pet));
  }, [pet]);

  useEffect(() => {
    sessionStorage.setItem("login", JSON.stringify(login));
  }, [login]);

  useEffect(() => {
    sessionStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    sessionStorage.setItem("userDetails", JSON.stringify(userDetails));
  }, [userDetails]);

  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  if (openAlert === true) {
    setTimeout(() => {
      setOpenAlert(false);
    }, 5000);
  }

  return (
    <AppContext.Provider
      value={{
        alert,
        setAlert,
        severity,
        setSeverity,
        openAlert,
        setOpenAlert,
        Product,
        setProduct,
        Products,
        setProducts,
        pet,
        setPet,
        login,
        setLogin,
        user,
        setUser,
        userDetails,
        setUserDetails,
        cart,
        setCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
