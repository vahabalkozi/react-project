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

const TopSelling = () => {
  return (
    <div>
      <section className="top-selling">
        <div className="title">
          <h2>TOP SELLING</h2>
        </div>
        <div className="top-selling-products">
          <TopSellingProduct
            img="../../public/image/k1.webp"
            name="Del laptop model Y7"
            alt="laptop"
            newprice="820"
            oldprice="850"
          />
          <TopSellingProduct
            img="../../public/image/ib2.webp"
            name="Samsung tablet model G6"
            alt="tablet"
            newprice="520"
            oldprice="560"
          />
          <TopSellingProduct
            img="../../public/image/i9.webp"
            name="Honor model X3"
            alt="mobile"
            newprice="330"
            oldprice="350"
          />
        </div>
      </section>
    </div>
  );
};

export default TopSelling;
