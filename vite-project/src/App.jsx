import React from "react";
import Layout from "./components/MainLayout/MainLayout.jsx";
import { Routes, Route } from "react-router-dom";
import ProductInformation from "./components/ProductPage/ProductPage.jsx";
import CartPage from "./components/CartPage/CartPage.jsx";
import Home from "./components/HomePage/Home/Home.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="product/:id" element={<ProductInformation />} />
          <Route path="/cart" element={<CartPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
