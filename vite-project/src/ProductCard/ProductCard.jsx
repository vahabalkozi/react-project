import { useState, useEffect } from "react";
import FetchProduct from "../FetchProduct/FetchProduct.jsx";
import "./ProductCard.css";

export const ProductCard = ({
  img,
  alt,
  name,
  newprice,
  stock,
  category,
  description,
}) => {
  return (
    <div>
      <div className="product-card">
        <div className="product-image">
          <img src={img} alt={alt} />
        </div>
        <div className="product-info">
          <p className="category">{category}</p>
          <p className="product-name">{name}</p>
          <p className="description">{description}</p>
          <div className="product-price">
            <p className="new-price">${newprice}</p>
          </div>
          <p className="stock">
            {stock > 0 ? `stock:${stock}` : "out of stock"}
          </p>
          <div className="rating">
            <div className="stars">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </div>
          </div>
          <div className="actions">
            <button className="fevorite">
              <i className="fa fa-heart"></i>
            </button>
            <button className="share">
              <i className="fa fa-exchange"></i>
            </button>
            <button className="view">
              <i className="fa fa-eye"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductCards = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    const loadProducts = async () => {
      setIsLoading(true);

      try {
        const data = await FetchProduct();
        setProducts(data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };
    loadProducts();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error:{error}</p>;
  }

  return (
    <div className="product-carts">
      {products?.map((product, index) => (
        <ProductCard
          key={product.id || index}
          newprice={Math.floor(product.price)}
          img={product.images[1]}
          name={product.name}
          category={product.category.name}
          description={product.description.substring(0, 60) + `...`}
          stock={product.stock}
        />
      ))}
      ;
    </div>
  );
};

export default ProductCards;
