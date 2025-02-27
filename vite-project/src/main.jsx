import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import CartProvider from "./Contexts/CartContext/CartContext.jsx";
import SearchProvider from "./Contexts/SearchContext/SearchContext.jsx";
import { CategoryProvider } from "./Contexts/CategoryContext/CategoryContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <CategoryProvider>
        <CartProvider>
          <SearchProvider>
            <App />
          </SearchProvider>
        </CartProvider>
      </CategoryProvider>
    </BrowserRouter>
  </StrictMode>
);
