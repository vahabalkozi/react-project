import "./TopSelling.css";
export const TopSellingProduct = ({ img, alt, name, newprice, oldprice }) => {
  return (
    <div>
      <div className="top-selling-product">
        <div className="top-selling-product-image">
          <img src={img} alt={alt} />
        </div>
        <div className="top-selling-product-info">
          <p className="category">CATEGORY</p>
          <h3 className="name">{name}</h3>
          <div className="top-selling-product-price">
            <div className="newprice">${newprice}</div>
            <div className="oldprice">${oldprice}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
