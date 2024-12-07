import ProductCard from "../ProductCard/ProductCard.jsx";
import './MainLayout.css';

function Layout(){

    return(
      <div>
        <div>header</div>
        <div className="body">
            <ProductCard/>
        </div>
        <div>footer</div>
      </div>  
    )
}

export default Layout;