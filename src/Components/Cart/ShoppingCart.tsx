import { CircularProgress } from "@mui/material";
import type { CartItemUI } from "../../Interfaces/Cart";

type cartProps = {
  loading: boolean;
  items: CartItemUI[];
};

const ShoppingCart = ({ loading, items }: cartProps) => {
  return (
    <div className="cart-left">
      <h2>Your Shopping Cart</h2>

      {loading ? (
        <CircularProgress color="inherit" />
      ) : (
        items?.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.title} />

            <div className="item-info">
              <h3>{item.title}</h3>
              <p>${item.price.toFixed(2)}</p>
              <span>Qty: {item.quantity}</span>
            </div>

            <div className="item-total">
              ${(item.price * item.quantity).toFixed(2)}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ShoppingCart;
