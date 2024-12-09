
import './ProductCard.css'

const ProductCard=({img,alt,name,newprice,oldprice})=>{

    return(
      <div>
      <div className='product-card'>
        <div className="product-image">
          <img src={img} alt={alt}/>
        </div>
       <div className="product-info">
        <p className='category'>CATEGORY</p>
        <p className='product-name'>{name}</p>
        <div className="product-price">
          <p className='new-price'>${newprice}</p>
          <p className='old-price'>${oldprice}</p>
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