import { useState, useEffect } from "react";
import FetchProduct from "../../FetchFunction/FetchProduct/FetchProduct.jsx";
import "./ProductCard.css";
import { ProductCard } from "./ProductCard.jsx";
import { useCategoryContext } from "../CategoryContext/CategoryContext.jsx";

const ProductCards = () => {
  const [products, setProducts] = useState([]);
  const { checkedId } = useCategoryContext();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    const loadProducts = async () => {
      setIsLoading(true);

      try {
        const data = await FetchProduct(checkedId);
        setProducts(data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };
    loadProducts();
  }, [checkedId]);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error:{error}</p>;
  }

  return (
    <div className="product-carts">
      {products?.map((product) => (
        <ProductCard
          key={product._id}
          newprice={Math.floor(product.price)}
          img={product.images[0]}
          name={product.name.substring(0, 20) + `..`}
          category={product.category.name}
          description={product.description.substring(0, 60) + `...`}
          stock={product.stock}
        />
      ))}
    </div>
  );
};

export default ProductCards;
