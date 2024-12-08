import React from "react";
import { AppProvider } from "./Context/AppContext";
import CustomAlert from "./Components/CustomAlert/CustomAlert";
import TopNav from "./Components/TopNav/TopNav";
import branding from "./json/branding";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LOGIN from "./Pages/LOGIN/LOGIN";
import NOTFOUND from "./Pages/NOTFOUND";

const App = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <TopNav branding={branding} />
        <CustomAlert />
        <Routes>
          <Route path="/" element={<>Home</>} />
          <Route path="/demo" element={<>Home Deom</>} />
          <Route path="/demo1" element={<>Home Deom 1</>} />
          <Route path="/login" element={<LOGIN />} />
          <Route path="*" element={<NOTFOUND />} />
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
};

export default App;
