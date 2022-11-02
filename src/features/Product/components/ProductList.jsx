import { Grid, Skeleton } from "@mui/material";
import { Box } from "@mui/system";
import PropTypes from "prop-types";
import React from "react";
import Product from "./Product";

ProductList.propTypes = {
  productList: PropTypes.array.isRequired,
  loading: PropTypes.bool,
};

function ProductList({ productList, loading = true }) {
  return (
    <Box>
      {loading ? (
        <Grid container>
          {Array.from(new Array(12)).map((x, index) => (
            <Grid
              item
              xs={6}
              sm={6}
              md={4}
              lg={3}
              key={index}
              sx={{ padding: "0 8px 8px" }}
            >
              <Skeleton variant="rectangular" width={257} height={358} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Grid container>
          {productList.map((product) => (
            <Grid
              item
              xs={6}
              sm={6}
              md={4}
              lg={3}
              key={product.id}
              sx={{ padding: "0 8px 8px" }}
            >
              <Product product={product} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}

export default ProductList;
