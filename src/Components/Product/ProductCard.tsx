import { useNavigate } from "react-router-dom";
import type { Product } from "../../Interfaces/Product";

const ProductCard = (props: Product) => {
  const navigate = useNavigate();
  const { id, title, price, image } = props;

  return (
    <div className="productCard" onClick={() => navigate(`/product/${id}`)}>
      <img className="productImage" src={image} alt={title} />
      <p className="productPrice">Price: ${price}</p>
      <button className="productWheelButton">Buy</button>
    </div>
  );
};

export default ProductCard;
