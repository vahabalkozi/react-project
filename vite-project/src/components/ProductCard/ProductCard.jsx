import "./ProductCard.css";
export const ProductCard = ({
  img,
  alt,
  name,
  newprice,
  stock,
  category,
  description,
  rating = 0,
}) => {
  const filledStars = Math.floor(rating);
  const emptyStars = 5 - filledStars;
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
              <i className="fa fa-heart"></i>
            </button>
            <button className="share">
              <i className="fa fa-exchange"></i>
            </button>
            <button className="view">
              <i className="fa fa-eye"></i>
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
