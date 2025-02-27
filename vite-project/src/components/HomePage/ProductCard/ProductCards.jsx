import { useState, useEffect, useContext } from "react";
import FetchProduct from "../../../api/products/products.js";
import "./ProductCard.css";
import { ProductCard } from "./ProductCard.jsx";
import { useCategoryContext } from "../../../Contexts/CategoryContext/CategoryContext.jsx";
import Pagination from "../Pagination/Pagination.jsx";
import Filter from "../TopFilter/TopFilter.jsx";
import { CartContext } from "../../../Contexts/CartContext/CartContext.jsx";
import { SearchContext } from "../../../Contexts/SearchContext/SearchContext.jsx";

const ProductCards = () => {
  const [products, setProducts] = useState([]);
  const { checkedId } = useCategoryContext();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(undefined);
  const [pagination, setPagination] = useState({ totalItems: 0 });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [viewMode, setViewMode] = useState("grid");
  const { addToCart, message } = useContext(CartContext);
  const { searchQuery } = useContext(SearchContext);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const loadProducts = async () => {
    setIsLoading(true);

    try {
      const data = await FetchProduct(
        checkedId,
        currentPage,
        itemsPerPage,
        searchQuery
      );
      setProducts(data.products);
      setPagination(data.pagination);
      setIsLoading(false);
      scrollToTop();
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, [checkedId, currentPage, itemsPerPage, searchQuery]);

  useEffect(() => {
    setCurrentPage(1);
  }, [checkedId, searchQuery]);

  if (isLoading) {
    return (
      <div className="loader-box">
        <span className="loader"></span>
      </div>
    );
  }
  if (error) {
    return <p className="error">Error:{error}</p>;
  }
  if (pagination.totalPages === 0) {
    return (
      <div className="no-product">
        <p>
          "No products found. Please try refining your search or explore other
          categories"
        </p>
      </div>
    );
  }

  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(Number(event.target.value));
    setCurrentPage(1);
  };

  const endItem = Math.min(currentPage * itemsPerPage, pagination.totalItems);

  return (
    <div>
      {message && (
        <div className="cart-message">
          <p className="message">{message}</p>
        </div>
      )}
      <Filter
        itemPerPage={itemsPerPage}
        onchange={handleItemsPerPageChange}
        onChangeViewMode={(mode) => setViewMode(mode)}
        viewmode={viewMode}
      />

      <div className={`product-carts ${viewMode}`}>
        {products?.map((product) => (
          <ProductCard
            key={product._id}
            id={product._id}
            price={Math.ceil(product.price)}
            img={product.images[1]}
            name={product.name}
            category={product.category.name}
            description={
              viewMode === "grid"
                ? product.description.substring(0, 60) + `...`
                : product.description
            }
            stock={product.stock}
            rating={product.rating}
            onclick={() => addToCart(product)}
          />
        ))}
      </div>
      <div className="pagination-information">
        <div className="amount-per-page">
          <p>
            SHOWING <span>{currentPage}</span>-<span>{endItem}</span> OF{" "}
            <span>{pagination.totalItems}</span> PRODUCTS
          </p>
        </div>
        <div className="pagination">
          <Pagination
            currentPage={currentPage}
            totalPages={pagination.totalPages}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
