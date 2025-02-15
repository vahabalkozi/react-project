import ProductPage from "./Product.jsx";
import { useEffect, useState } from "react";
import FetchProductInfo from "../../FetchFunction/FetchProductInfo/ProductInfo.jsx";
import { useParams } from "react-router-dom";
import "./Product.css";

const ProductInformation = () => {
  const { id } = useParams();
  const [product, setproduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    const loadProductInfo = async () => {
      setIsLoading(true);
      try {
        const data = await FetchProductInfo(id);
        setproduct(data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };
    loadProductInfo();
  }, [id]);

  if (error) {
    return <p>Error:{error}</p>;
  }
  if (!product || isLoading) {
    return (
      <div className="loader-box">
        <span className="loader"></span>
      </div>
    );
  }
  return (
    <div className="product">
      <ProductPage
        name={product?.name}
        img={product?.images[1]}
        description={product?.description}
        price={Math.floor(product?.price)}
        category={product?.category.name}
        rating={product.rating}
        stock={product.stock}
      />
    </div>
  );
};

export default ProductInformation;
