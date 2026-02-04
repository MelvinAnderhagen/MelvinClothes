import useCartFetch from "../Hooks/useCartFetch";
import Payment from "../Components/Cart/Payment";
import ShoppingCart from "../Components/Cart/ShoppingCart";
import ProductWheel from "../Components/Product/ProductWheel";

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
        <ShoppingCart loading={loading} items={items} />
        <Payment subtotal={subtotal} />
      </div>
      <div className="cartSuggestions">
        <h2 className="cartSuggestionsText">
          MAYBE YOU WOULD LIKE THESE ITEMS?
        </h2>
        <ProductWheel />
      </div>
    </div>
  );
};

export default Cart;
