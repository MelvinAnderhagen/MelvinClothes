import useProductsFetch from "../../Hooks/useProductsFetch";
import CircularProgress from "@mui/material/CircularProgress";
import ProductCard from "./ProductCard";

const AllProducts = () => {
  const { products, error, loading } = useProductsFetch();

  if (loading) return <CircularProgress color="inherit" />;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="productsContainer">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  );
};

export default AllProducts;
