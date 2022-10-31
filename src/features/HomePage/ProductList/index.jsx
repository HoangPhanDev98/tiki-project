import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import productApi from "../../../api/productApi";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from "../../../constants";

ProductList.propTypes = {};

function ProductList(props) {
  const [productList, setProductList] = useState([]);

  const params = {
    _page: 1,
    _limit: 30,
  };

  useEffect(() => {
    (async () => {
      try {
        const { data } = await productApi.getAll(params);
        setProductList(data);
        console.log(data);
      } catch (error) {
        console.log("Failed to fetch product list: ", error);
      }
    })();
  }, []);
  return (
    <Box sx={{ width: "1270px", margin: "0 auto" }}>
      <Grid container>
        {productList.map((product) => (
          <Grid item xs={12} sm={4} md={3} lg={2} key={product.id}>
            <Box padding={1}>
              <img
                width="100%"
                src={
                  product.thumbnail
                    ? `${STATIC_HOST}${product.thumbnail?.url}`
                    : THUMBNAIL_PLACEHOLDER
                }
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProductList;
