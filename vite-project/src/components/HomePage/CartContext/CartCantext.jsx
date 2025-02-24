import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalItem, setTotalItem] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
    setTotalItem(savedCart.length);
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
    setTotalItem(cart.length);
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const exists = prevCart.find((item) => item._id === product._id);
      if (!exists) {
        setMessage(
          <span>
            <i className="fas fa-check-circle"></i> The Product Add ToThe Cart.
          </span>
        );
        setTimeout(() => setMessage(""), 3000);
        return [...prevCart, product];
      } else {
        setMessage(
          <span>
            <i className="fas fa-exclamation-triangle"></i>
            This Product Is In The Shopping Cart.
          </span>
        );
        setTimeout(() => setMessage(""), 3000);
        return prevCart;
      }
    });
  };

  const calcuteTotalPrice = () => {
    return cart.reduce((sum, item) => sum + item.price, 0);
  };

  const removeProductInCart = (id) => {
    const updatedCart = cart.filter((item) => item._id !== id);
    setCart(updatedCart);
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        totalItem,
        addToCart,
        message,
        calcuteTotalPrice,
        removeProductInCart,
        setCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
