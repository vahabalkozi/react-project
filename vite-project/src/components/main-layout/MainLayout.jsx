import ProductCards from "../ProductCard/ProductCards.jsx";
import TopSelling from "../TopSellingProduct/TopSelling.jsx";
import CategoryiesList from "../Categories/Categories.jsx";
import "./MainLayout.css";
import Brands from "../Brands/Brands.jsx";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import { CategoryProvider } from "../CategoryContext/CategoryContext.jsx";

function Layout() {
  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div className="main">
        <div className="container">
          <CategoryProvider>
            <div className="left-filters">
              <CategoryiesList />
              <Brands />
              <TopSelling />
            </div>
            <div className="product-carts-box">
              <ProductCards />
            </div>
          </CategoryProvider>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
