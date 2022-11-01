import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import FilterByCategory from "./Filters/FilterByCategory";
import FilterByService from "./Filters/FilterByService";
import FilterByPrice from "./Filters/FilterByPrice";

ProductFilters.propTypes = {
  filters: PropTypes.object,
  onChange: PropTypes.func,
};

function ProductFilters({ filters = {}, onChange = null }) {
  const handleCategoryChange = (newCategoryId) => {
    if (!onChange) return;

    const newFilters = {
      ...filters,
      "category.id": newCategoryId,
    };
    console.log("okkk");

    onChange(newFilters);
  };

  const handlePriceChange = (values) => {
    console.log("ok");
    if (onChange) onChange(values);
  };

  const handleServiceChange = (values) => {
    if (onChange) onChange(values);
  };

  return (
    <Box>
      <FilterByCategory onChange={handleCategoryChange} />
      <hr color="#f1f1f1"></hr>
      <FilterByService filters={filters} onChange={handleServiceChange} />
      <hr color="#f1f1f1"></hr>
      <FilterByPrice onChange={handlePriceChange} />
    </Box>
  );
}

export default ProductFilters;
