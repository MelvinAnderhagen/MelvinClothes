import ProductDetails from "../Components/Product/ProductDetails";
import ProductWheel from "../Components/Product/ProductWheel";

const Product = () => {
  return (
    <div className="productDetailsContainer">
      <ProductDetails />
      <h2 className="productsRecommend">OTHER PRODUCTS YOU MIGHT LIKE</h2>
      <ProductWheel />
    </div>
  );
};

export default Product;
