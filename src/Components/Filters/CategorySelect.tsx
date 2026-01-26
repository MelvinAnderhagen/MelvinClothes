import {
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useMemo } from "react";
import useProductsFetch from "../../Hooks/useProductsFetch";

interface CategorySelectProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategorySelect = ({
  selectedCategory,
  onCategoryChange,
}: CategorySelectProps) => {
  const { products, loading } = useProductsFetch();

  const uniqueCategories = useMemo(() => {
    const categories = products
      .map((product) => product.category)
      .filter(
        (category): category is string =>
          category !== undefined && category !== null,
      );
    return Array.from(new Set(categories)).sort();
  }, [products]);

  const handleChange = (event: any) => {
    onCategoryChange(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="category-select-label">Category</InputLabel>
        <Select
          labelId="category-select-label"
          id="category-select"
          value={selectedCategory}
          onChange={handleChange}
          autoWidth
          label="Category"
        >
          <MenuItem value="">
            <em>All Categories</em>
          </MenuItem>
          {loading ? (
            <CircularProgress />
          ) : (
            uniqueCategories.map((category) => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))
          )}
        </Select>
      </FormControl>
    </div>
  );
};

export default CategorySelect;
