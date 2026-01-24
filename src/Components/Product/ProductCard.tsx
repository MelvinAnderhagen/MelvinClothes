import type { Product } from "../../Interfaces/Product";

const ProductCard = (props: Product) => {
  const { title, price, image } = props;
  return (
    <div className="productCard">
      <h2 className="productTitle">{title}</h2>
      <img className="productImage" src={image} alt={title} />
      <p className="productPrice">Price: ${price}</p>
    </div>
  );
};

export default ProductCard;
