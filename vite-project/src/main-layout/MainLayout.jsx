import ProductCards from "../ProductCard/ProductCard.jsx";
import TopSelling from "../TopSellingProduct/TopSelling.jsx";
import Filter from "../TopFilter/TopFilter.jsx";
import CategoryiesList from "../Categories/Categories.jsx";
import "./MainLayout.css";
import Brands from "../Brands/Brand.jsx";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Pagination from "../Pagination/Paginatio.jsx";

function Layout() {
  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div className="main">
        <div className="container">
          <div className="left-filters">
            <CategoryiesList />
            <Brands />
            <TopSelling />
          </div>
          <div className="products">
            <div className="filter-box">
              <Filter />
            </div>
            <div className="product-cart">
              <ProductCards />
            </div>
            <div className="pagination-bar">
              <Pagination />
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
