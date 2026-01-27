import { useNavigate } from "react-router-dom";
import useProductsFetchTake5 from "../../Hooks/useProductsFetchTake5";
import { CircularProgress } from "@mui/material";

const ProductWheel = () => {
  const { products, loading, error } = useProductsFetchTake5();
  const navigate = useNavigate();

  if (loading) return <CircularProgress color="inherit" />;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="productWheel">
      {products.map((product) => (
        <div key={product.id} className="productWheelItem">
          <img
            src={product.image}
            alt={product.title}
            className="productWheelImage"
            onClick={() => navigate(`/product/${product.id}`)}
          />
          <p className="productWheelPrice">${product.price}</p>
          <button className="productWheelButton">Buy</button>
        </div>
      ))}
    </div>
  );
};

export default ProductWheel;
