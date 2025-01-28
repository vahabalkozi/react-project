import { useState, useEffect } from "react";
import FetchProduct from "../../FetchFunction/FetchProduct/FetchProduct.jsx";
import "./ProductCard.css";
import { ProductCard } from "./ProductCard.jsx";
import { useCategoryContext } from "../CategoryContext/CategoryContext.jsx";
import Pagination from "../Pagination/Pagination.jsx";
import Filter from "../TopFilter/TopFilter.jsx";

const ProductCards = () => {
  const [products, setProducts] = useState([]);
  const { checkedId } = useCategoryContext();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(undefined);
  const [pagination, setPagination] = useState({ totalItems: 0 });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [viewMode, setViewMode] = useState("grid");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const loadProducts = async () => {
    setIsLoading(true);

    try {
      const data = await FetchProduct(checkedId, currentPage, itemsPerPage);
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
  }, [checkedId, currentPage, itemsPerPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [checkedId]);

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

  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(Number(event.target.value));
    setCurrentPage(1);
  };

  const endItem = Math.min(currentPage * itemsPerPage, pagination.totalItems);

  return (
    <div>
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
            newprice={Math.floor(product.price)}
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
