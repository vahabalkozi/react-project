import "./CartPage.css";
const CartPageItem = ({ img, name, price, onclick }) => {
  return (
    <div>
      <div className="product-container">
        <div className="cart">
          <div className="item-image">
            <img src={img} />
          </div>
          <div className="item-info">
            <div className="item-name">
              <p>{name}</p>
            </div>
            <div className="item-quantity">
              <p>Quantity :1</p>
            </div>
            <div className="delete-item">
              <button onClick={onclick}>
                Delete
                <i className="fa fa-trash-alt"></i>
              </button>
            </div>
          </div>
          <div className="item-price">
            <p>${price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartPageItem;
