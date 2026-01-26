import { useState } from "react";
import Search from "../Components/Base/Search";
import AllProducts from "../Components/Product/AllProducts";
import CategorySelect from "../Components/Product/CategorySelect";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  return (
    <div>
      <Search />
      <CategorySelect
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <AllProducts selectedCategory={selectedCategory} />
    </div>
  );
};

export default Products;
