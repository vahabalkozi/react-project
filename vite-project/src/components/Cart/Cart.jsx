import "./Cart.css";

const CartIcon = () => {
  return (
    <div className="icons">
      <div className="icon">
        <a href="#">
          <i className="fa fa-heart"></i>
          <p>Your Wishlist</p>
        </a>
      </div>
      <div className="icon">
        <a href="#">
          <i className="fas fa-shopping-cart"></i>
          <p>Your Cart</p>
        </a>
      </div>
    </div>
  );
};

export default CartIcon;
