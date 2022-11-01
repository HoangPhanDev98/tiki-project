import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import categoryApi from "../../../../api/categoryApi";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

FilterByCategory.propTypes = {
  onChange: PropTypes.func,
};

function FilterByCategory({ onChange = null }) {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await categoryApi.getAll();
        setCategoryList(data);
      } catch (error) {
        console.log("Failter to fetch category list: ", error);
      }
    })();
  }, []);

  const handleCategoryClick = (category) => {
    if (!onChange) return;
    onChange(category.id);
  };

  return (
    <Box>
      <Typography fontSize="14px" fontWeight="bold" sx={{ padding: "12px 0" }}>
        Danh Mục Sản Phẩm
      </Typography>
      {categoryList.map((category) => (
        <Box
          key={category.id}
          onClick={() => handleCategoryClick(category)}
          sx={{ cursor: "pointer" }}
        >
          <Typography
            fontSize="12px"
            sx={{ color: "#38383d", paddingBottom: "12px" }}
          >
            {category.name}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

export default FilterByCategory;
