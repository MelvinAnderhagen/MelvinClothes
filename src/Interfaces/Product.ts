export interface Product {
  id: number;
  title?: string;
  price: number;
  description?: string;
  category?: string;
  image: string;
  rating: Rating;
}

interface Rating {
  rate: number;
  count: number;
}

// id -> integer
// title -> string
// price -> number <float>
// description -> string
// category	-> string
// image -> string (URL)
