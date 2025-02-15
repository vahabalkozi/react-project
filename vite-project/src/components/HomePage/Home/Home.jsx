import "./Home.css";
import { CategoryProvider } from "../CategoryContext/CategoryContext";
import Brands from "../Brands/Brands.jsx";
import CategoryiesList from "../Categories/Categories.jsx";
import TopSelling from "../TopSellingProduct/TopSelling.jsx";
import ProductCards from "../ProductCard/ProductCards.jsx";
const Home = ({ queryText }) => {
  return (
    <div>
      <div className="container">
        <div className="left-filters">
          <CategoryiesList />
          <Brands />
          <TopSelling />
        </div>
        <div className="product-carts-box">
          <ProductCards searchText={queryText} />
        </div>
      </div>
    </div>
  );
};
export default Home;
