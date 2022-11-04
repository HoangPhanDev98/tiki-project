import React, { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import categoryApi from "../../../api/categoryApi";
import { Box } from "@mui/system";
import { Container, Paper, Skeleton } from "@mui/material";
import { Link } from "react-router-dom";

CategoryTabBar.propTypes = {
  categoryList: PropTypes.array.isRequired,
  loading: PropTypes.bool,
};

function CategoryTabBar({ categoryList, loading = false }) {
  return (
    <Paper elevation={0} sx={{ display: { xs: "none", md: "block" } }}>
      <Container component="ul">
        {loading ? (
          <Skeleton variant="rectangular" width={1270} height={46} />
        ) : (
          <Box display="flex" justifyContent="space-around" paddingY="15px">
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
        )}
      </Container>
    </Paper>
  );
}

export default CategoryTabBar;
