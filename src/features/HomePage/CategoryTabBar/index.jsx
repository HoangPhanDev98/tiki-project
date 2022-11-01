import React, { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import categoryApi from "../../../api/categoryApi";
import { Box } from "@mui/system";
import { Paper } from "@mui/material";
import { Link } from "react-router-dom";

CategoryTabBar.propTypes = {
  categoryList: PropTypes.array.isRequired,
};

function CategoryTabBar({ categoryList }) {
  return (
    <Paper elevation={0}>
      <Box
        component="ul"
        sx={{
          display: "flex",
          width: "1270px",
          margin: "0 auto",
          padding: "15px 0",
          justifyContent: "space-around",
        }}
      >
        {categoryList.map((category) => (
          <Box
            component="li"
            key={category.id}
            sx={{ a: { textDecoration: "none", color: "#333" } }}
          >
            <Link to={`san-pham?&category.id=${category.id}`}>
              {category.name}
            </Link>
          </Box>
        ))}
      </Box>
    </Paper>
  );
}

export default CategoryTabBar;
