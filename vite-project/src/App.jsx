import React from "react";
import Layout from "./components/HomePage/main-layout/MainLayout.jsx";
import { Routes, Route } from "react-router-dom";
import ProductInformation from "./components/productPage/ProductPage.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="product/:id" element={<ProductInformation />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
