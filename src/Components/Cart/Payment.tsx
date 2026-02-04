type paymentProps = {
  subtotal: number;
};

const Payment = ({ subtotal }: paymentProps) => {
  return (
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
  );
};

export default Payment;
