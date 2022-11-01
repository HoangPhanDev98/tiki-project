import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import PropTypes from "prop-types";
import React from "react";
import Product from "./Product";

ProductList.propTypes = {
  productList: PropTypes.array.isRequired,
};

function ProductList({ productList }) {
  return (
    <Box>
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
    </Box>
  );
}

export default ProductList;
