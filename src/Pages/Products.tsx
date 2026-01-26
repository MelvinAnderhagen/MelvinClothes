import { useState } from "react";
import AllProducts from "../Components/Product/AllProducts";
import CategorySelect from "../Components/Filters/CategorySelect";
import PriceSelect from "../Components/Filters/PriceSelect";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedPrice, setSelectedPrice] = useState<string>("");

  return (
    <div>
      <div className="filterProducts">
        <PriceSelect
          selectedPrice={selectedPrice}
          onPriceChange={setSelectedPrice}
        />
        <CategorySelect
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
      </div>
      <AllProducts
        selectedCategory={selectedCategory}
        selectedPrice={selectedPrice}
      />
    </div>
  );
};

export default Products;
