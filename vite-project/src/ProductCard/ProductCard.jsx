
import './ProductCard.css'

const ProductCard=()=>{

    return(
      <div>
      <div className='product-card'>
        <div className="product-image">
          <img src="./image/kb4.webp" alt="laptop"  className='image'/>
        </div>
       <div className="product-info">
        <p className='category'>CATEGORY</p>
        <p className='product-name'>PRODUCT NAME GOES HERE</p>
        <div className="product-price">
          <p className='new-price'>$980.00</p>
          <p className='old-price'>$990.00</p>
        </div>
        <div className="rating">
          <div className="stars">
            <i className='fa fa-star'></i>
            <i className='fa fa-star'></i>
            <i className='fa fa-star'></i>
            <i className='fa fa-star'></i>
            <i className='fa fa-star'></i>
          </div>
        </div>
         <div className="actions">
          <button className='fevorite'><i className='fa fa-heart'></i></button>
          <button className='share'><i className='fa fa-exchange'></i></button>
          <button className='view'><i className='fa fa-eye'></i></button>
         </div>
       </div>
     </div>
    </div>
    );
  }
  
  
 export default ProductCard;