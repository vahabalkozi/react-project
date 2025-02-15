import "./ProductCard.css";
import { useNavigate } from "react-router-dom";
export const ProductCard = ({
  id,
  img,
  name,
  price,
  stock,
  category,
  description,
  rating = 0,
}) => {
  const navigate = useNavigate();

  const filledStars = Math.floor(rating);
  const emptyStars = 5 - filledStars;

  const handleCardClick = () => {
    navigate(`/product/${id}`);
  };
  return (
    <div>
      <div className="product-card" onClick={handleCardClick}>
        <div className="product-image">
          <img src={img} />
        </div>
        <div className="product-info">
          <p className="category">{category}</p>
          <p className="product-name">{name}</p>
          <p className="description">{description}</p>
          <div className="product-price">
            <p className="price">${price}</p>
          </div>
          <p className={`stock ${stock === 0 ? "out-of-stock" : ""}`}>
            <i className="fa fa-check-circle"></i>
            {stock > 0 ? `Stock: ${stock}` : "Out of Stock"}
          </p>
          <div className="rating">
            <div className="stars">
              {[...Array(filledStars)].map((_, index) => (
                <i key={`filled-${index}`} className="fa fa-star filled"></i>
              ))}

              {[...Array(emptyStars)].map((_, index) => (
                <i key={`empty-${index}`} className="fa fa-star"></i>
              ))}
            </div>
          </div>
          <div className="actions">
            <button className="fevorite">
              <i className="fas fa-heart"></i>
            </button>
            <button className="share">
              <i className="fas fa-exchange"></i>
            </button>
            <button className="view">
              <i className="fas fa-eye"></i>
            </button>
          </div>
          <div className="add-to-cart">
            <button className="add-cart-button">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};
