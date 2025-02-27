import CartPageItem from "./CartPageItem.jsx";
import { CartContext } from "../../Contexts/CartContext/CartContext.jsx";
import { useContext } from "react";
import "./CartPage.css";

const CartPage = () => {
  const { cart, calcuteTotalPrice, removeProductInCart, clearCart } =
    useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <p>
          <i className="fa fa-cart-arrow-down"></i>
          There Are No Product In The Shopping Cart.
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="product-container">
        <div className="cart-basket">
          <div className="cart-title">
            <h1>Shopping Basket</h1>
            <div className="delete-all">
              <button onClick={() => clearCart()}>Delete all items</button>
            </div>
          </div>
          <div className="cart-item">
            {cart.map((item) => (
              <CartPageItem
                key={item._id}
                name={item.name}
                img={item.images[1]}
                price={Math.ceil(item.price)}
                onclick={() => removeProductInCart(item._id)}
              />
            ))}
          </div>
          <div className="subtotal">
            <p>
              Subtotal Price: <span>${Math.ceil(calcuteTotalPrice())}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartPage;
