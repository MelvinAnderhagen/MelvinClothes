import { useParams } from "react-router-dom";
import useProductFetch from "../../Hooks/useProductFetch";
import { CircularProgress } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useState } from "react";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const productId = id ? parseInt(id, 10) : undefined;
  const { product, loading, error } = useProductFetch(productId);
  const [favorite, setFavorite] = useState<boolean>(false);

  if (loading) return <CircularProgress color="inherit" />;
  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div className="product-detail">
      <div onClick={() => setFavorite((prev) => !prev)}>
        {favorite ? <FavoriteBorderIcon /> : <FavoriteIcon />}
      </div>
      <div className="productDetailsLeft">
        <img
          className="productDetailsImage"
          src={product.image}
          alt={product.title}
        />
      </div>
      <div className="productDetailsRight">
        <h1 className="productDetailsTitle">{product.title}</h1>
        <p className="description">{product.description}</p>
        <p className="price">${product.price}</p>
        <button className="productDetailsBtn">BUY NOW</button>
      </div>
    </div>
  );
};

export default ProductDetails;
