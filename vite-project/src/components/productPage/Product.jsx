import "./Product.css";

const ProductPage = ({
  name,
  stock,
  img,
  price,
  category,
  description,
  rating = 0,
}) => {
  const fillStar = Math.floor(rating);
  const emptyStar = 5 - fillStar;
  return (
    <div>
      <div className="product-container">
        <div className="single-product-cart">
          <div className="product-image">
            <img src={img} alt="" />
          </div>
          <div className="product-information">
            <h2 className="product-name">{name}</h2>
            <div className="rating">
              <div className="rating-star">
                {[...Array(fillStar)].map((_, index) => (
                  <i key={`filled-${index}`} className="fa fa-star filled"></i>
                ))}
                {[...Array(emptyStar)].map((_, index) => (
                  <i key={`empty-${index}`} className="fa fa-star"></i>
                ))}
              </div>
              <div className="review">
                <p>10 Review(s) | Add your review</p>
              </div>
            </div>
            <div className="product-price">
              <p className="price">${price}</p>
              <p className={`stock ${stock === 0 ? "out-of-stock" : ""}`}>
                {stock > 0 ? "IN STOCK" : "Out of stock"}
              </p>
            </div>
            <div className="product-description">
              <p className="description">{description}</p>
            </div>
            <div className="product-size">
              <div className="size">
                <p>SIZE</p>
                <div className="select-box">
                  <select name="" id="">
                    <option value="X">X</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                  </select>
                </div>
              </div>
              <div className="color">
                <p>COLOR</p>
                <div className="select-box">
                  <select name="" id="">
                    <option value="RED">RED</option>
                    <option value="GREEN">GREEN</option>
                    <option value="YELLOW">YELLOW</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="product-qty">
              <div className="qty">
                <p>QTY</p>
                <input type="number" defaultValue={1} min={1} max={5} />
              </div>
              <div className="add-to-card">
                <button className="add-card-button">Add to Cart</button>
              </div>
            </div>
            <div className="add-to-wishlist-compare">
              <div className="wishlist">
                <a href="#">
                  <i className="fa fa-heart"></i>
                  ADD TO WISHLIST
                </a>
              </div>
              <div className="compare">
                <a href="#">
                  <i className="fa fa-exchange"></i>
                  ADD TO COMPARE
                </a>
              </div>
            </div>
            <div className="category">
              <p>
                CATEGORY: <a href="#">{category}</a>
              </p>
            </div>
            <div className="share">
              <p>SHARE:</p>
              <div className="share-icons">
                <i className="fab fa-facebook"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-google"></i>
                <i className="fa fa-envelope"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductPage;
