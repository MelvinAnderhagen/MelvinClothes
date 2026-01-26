import useProductsFetch from "../../Hooks/useProductsFetch";
import CircularProgress from "@mui/material/CircularProgress";
import ProductCard from "./ProductCard";

interface AllProductsProps {
  selectedCategory: string;
}

const AllProducts = ({ selectedCategory }: AllProductsProps) => {
  const { products, error, loading } = useProductsFetch();

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  if (loading) return <CircularProgress color="inherit" />;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="productsContainer">
      {filteredProducts.map((product) => (
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
