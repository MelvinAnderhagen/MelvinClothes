import { useEffect, useState } from "react";
import type { CartItemUI, CartResponse } from "../Interfaces/Cart";
import type { Product } from "../Interfaces/Product";

const useCartFetch = () => {
  const [items, setItems] = useState<Array<CartItemUI>>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchCart = async () => {
      setLoading(true);
      try {
        const cartRes = await fetch("https://fakestoreapi.com/carts/1");
        const cart: CartResponse = await cartRes.json();

        const productPromises = cart.products.map(async (p) => {
          const res = await fetch(
            `https://fakestoreapi.com/products/${p.productId}`,
          );
          const product: Product = await res.json();

          return {
            ...product,
            quantity: p.quantity,
          };
        });

        const fullItems = await Promise.all(productPromises);

        setItems(fullItems);
        setLoading(false);
      } catch (err: any) {
        setError(err.message);
        console.error(err);
        setLoading(false);
      }
    };

    fetchCart();
  }, []);

  return { items, loading, error };
};

export default useCartFetch;
