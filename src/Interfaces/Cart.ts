import type { Product } from "./Product";

interface CartProduct {
  productId: number;
  quantity: number;
}

export interface CartResponse {
  id: number;
  userId: number;
  date: string;
  products: CartProduct[];
}

export interface CartItemUI extends Product {
  quantity: number;
}
