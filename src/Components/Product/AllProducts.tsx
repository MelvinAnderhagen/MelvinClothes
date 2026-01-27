import useProductsFetch from "../../Hooks/useProductsFetch";
import CircularProgress from "@mui/material/CircularProgress";
import ProductCard from "./ProductCard";

interface AllProductsProps {
  selectedCategory: string;
  selectedPrice: string;
}

const AllProducts = ({ selectedCategory, selectedPrice }: AllProductsProps) => {
  const { products, error, loading } = useProductsFetch();

  const filterByPriceRange = (price: number, range: string): boolean => {
    if (!range) return true;

    if (range.endsWith("+")) {
      const minPrice = parseFloat(range.replace("+", ""));
      return price >= minPrice;
    }

    const [min, max] = range.split("-");
    const minPrice = parseFloat(min);
    const maxPrice = parseFloat(max);

    return price >= minPrice && price <= maxPrice;
  };

  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      !selectedCategory || product.category === selectedCategory;
    const priceMatch = filterByPriceRange(product.price, selectedPrice);
    return categoryMatch && priceMatch;
  });

  if (error) return <div>Error: {error}</div>;

  return (
    <div className="productsContainer">
      {loading ? (
        <CircularProgress color="inherit" />
      ) : (
        filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        ))
      )}
    </div>
  );
};

export default AllProducts;
