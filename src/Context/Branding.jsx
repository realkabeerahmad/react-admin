// BrandingContext.js
import React, { createContext, useContext } from "react";
import branding from "../json/branding";

const BrandingContext = createContext(branding);

export const useBranding = () => useContext(BrandingContext);

export const BrandingProvider = ({ children }) => (
  <BrandingContext.Provider value={branding}>
    {children}
  </BrandingContext.Provider>
);
