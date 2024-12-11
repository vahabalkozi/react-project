import ProductCard from "../ProductCard/ProductCard.jsx";
import TopSelling  from "../TopSellingProduct/TopSelling.jsx";
import Filter  from  "../TopFilter/TopFilter.jsx";
import CategoryiesList from "../Categories/Categories.jsx";
import './MainLayout.css';

function Layout(){

    return(
      <div>
        <div className="header">header</div>
        <div className="main">
        <div className="container">
        <div className="left-filters">
           <CategoryiesList/>
           <TopSelling/>
         </div>
         <div className="products">
          <div className="filter-box">
            <Filter/>
          </div>
         <div className="product-carts">
            <ProductCard
            img="../../public/image/kb4.webp"
            alt="laptop"
            name="lenovo laptap model X6"
            newprice="980"
            oldprice="990"
            />
            <ProductCard
             img="../../public/image/i8.webp"
             alt="headphone"
             name="Headphone model G3"
             newprice="770"
             oldprice="800"
            />
            <ProductCard
             img="../../public/image/k1.webp"
             alt="laptop"
             name="Del laptap model Y7"
             newprice="820"
             oldprice="850"
            />
            <ProductCard
             img="../../public/image/ib2.webp"
             alt="tablet"
             name="Samsung tablet model G6"
             newprice="520"
             oldprice="560"
            />
            <ProductCard
             img="../../public/image/i4.webp"
             alt="headphone"
             name="Headphone model X6"
             newprice="280"
             oldprice="310"
            />
            <ProductCard
             img="../../public/image/k6.webp"
             alt="laptop"
             name="lenovo laptap model X456"
             newprice="880"
             oldprice="920"
            />
            <ProductCard
             img="../../public/image/i9.webp"
             alt="mobile"
             name="Honor model X3"
             newprice="330"
             oldprice="350"
            />
            <ProductCard
             img="../../public/image/k7.webp"
             alt="laptop"
             name="hp laptap model U567"
             newprice="950"
             oldprice="980"
            />
            <ProductCard
             img="../../public/image/i6.webp"
             alt="watch"
             name="Apple watch model A23"
             newprice="650"
             oldprice="670"
            />
         </div>
         </div>
        </div>
        </div>
        <div className="footer">footer</div>
      </div>  
    )
}

export default Layout;