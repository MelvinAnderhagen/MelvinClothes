import { CircularProgress } from "@mui/material";
import ProductWheel from "../Components/Product/ProductWheel";
import useCartFetch from "../Hooks/useCartFetch";

const Cart = () => {
  const { items, loading, error } = useCartFetch();

  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  if (error) return <div>Error: {error}</div>;

  return (
    <div className="cart-page">
      <div className="cart-container">
        {/* LEFT — PRODUCTS */}
        <div className="cart-left">
          <h2>Your Shopping Cart</h2>

          {loading ? (
            <CircularProgress color="inherit" />
          ) : (
            items.map((item) => (
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

        {/* RIGHT — CHECKOUT */}
        <div className="cart-right">
          <div className="summary-card">
            <h3>Order Summary</h3>

            <div className="summary-row">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="summary-row total">
              <span>Total</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <h4>Payment Method</h4>
            <div className="payment-options">
              <label>
                <input type="radio" name="payment" defaultChecked /> Card
              </label>
              <label>
                <input type="radio" name="payment" /> PayPal
              </label>
              <label>
                <input type="radio" name="payment" /> Apple Pay
              </label>
            </div>

            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
