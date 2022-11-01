import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import ProductThumbnail from "../components/ProductThumbnail";
import { useParams } from "react-router-dom";
import useProductDetail from "../../../hooks/useProductDetails";
import ProductInfo from "../components/ProductInfo";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Cart/cartSlice";

DetailPage.propTypes = {};

function DetailPage(props) {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const { product } = useProductDetail(productId);

  const handleAddToCartSubmit = ({ quantity }) => {
    const action = addToCart({
      id: product.id,
      product,
      quantity,
    });
    dispatch(action);
  };

  return (
    <Box sx={{ width: "1270px", margin: "0 auto" }}>
      <Grid container sx={{ display: "flex", alignItems: "stretch" }}>
        <Grid item xs={12} sm={6} md={5} lg={4}>
          <ProductThumbnail product={product} />
        </Grid>
        <Grid item xs={12} sm={6} md={7} lg={8}>
          <ProductInfo onSubmit={handleAddToCartSubmit} product={product} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default DetailPage;
