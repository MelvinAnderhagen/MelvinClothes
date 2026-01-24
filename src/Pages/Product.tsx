import { useParams } from "react-router-dom";
import useProductFetch from "../Hooks/useProductFetch";

const Product = () => {
  const { id } = useParams<{ id: string }>();
  const productId = id ? parseInt(id, 10) : undefined;
  const { product, loading, error } = useProductFetch(productId);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.title} />
      <h1>{product.title}</h1>
      <p className="price">${product.price}</p>
      <p className="category">{product.category}</p>
      <p className="description">{product.description}</p>
    </div>
  );
};

export default Product;
