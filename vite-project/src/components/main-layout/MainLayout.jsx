import { useState } from "react";
import ProductCards from "../ProductCard/ProductCards.jsx";
import TopSelling from "../TopSellingProduct/TopSelling.jsx";
import CategoryiesList from "../Categories/Categories.jsx";
import "./MainLayout.css";
import Brands from "../Brands/Brands.jsx";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import { CategoryProvider } from "../CategoryContext/CategoryContext.jsx";

function Layout() {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (text) => {
    setSearchText(text);
  };
  return (
    <div>
      <CategoryProvider>
        <div className="header">
          <Header onSearch={handleSearch} />
        </div>
        <div className="main">
          <div className="container">
            <div className="left-filters">
              <CategoryiesList />
              <Brands />
              <TopSelling />
            </div>
            <div className="product-carts-box">
              <ProductCards searchText={searchText} />
            </div>
          </div>
        </div>
      </CategoryProvider>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
