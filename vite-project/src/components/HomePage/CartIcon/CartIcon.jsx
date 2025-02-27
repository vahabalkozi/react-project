import "./CartIcon.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../Contexts/CartContext/CartContext";

const CartIcon = () => {
  const { totalItem } = useContext(CartContext);
  return (
    <div className="icons">
      <div className="heart-icon">
        <span className="item-in-liked">0</span>
        <a href="#">
          <i className="fa fa-heart"></i>
          <p>Your Wishlist</p>
        </a>
      </div>
      <div className="cart-icon">
        <span className="item-in-cart">{totalItem}</span>
        <Link to="/cart">
          <i className="fas fa-shopping-cart"></i>
          <p>Your Cart</p>
        </Link>
      </div>
    </div>
  );
};

export default CartIcon;
