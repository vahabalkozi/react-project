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
          <div className="add-to-cart">
            <button className="add-cart-button">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};
