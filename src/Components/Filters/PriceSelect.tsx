import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

interface PriceSelectProps {
  selectedPrice: string;
  onPriceChange: (price: string) => void;
}

const PriceSelect = ({ selectedPrice, onPriceChange }: PriceSelectProps) => {
  const priceRanges = [
    { value: "0-25", label: "$0 - $25" },
    { value: "25-50", label: "$25 - $50" },
    { value: "50-100", label: "$50 - $100" },
    { value: "100+", label: "$100+" },
  ];

  const handleChange = (event: any) => {
    onPriceChange(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="price-select-label">Price Range</InputLabel>
        <Select
          labelId="price-select-label"
          id="price-select"
          value={selectedPrice}
          onChange={handleChange}
          autoWidth
          label="Price Range"
        >
          <MenuItem value="">
            <em>All Prices</em>
          </MenuItem>
          {priceRanges.map((range) => (
            <MenuItem key={range.value} value={range.value}>
              {range.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default PriceSelect;
