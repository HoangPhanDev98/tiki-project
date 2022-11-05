import { Container, Grid, Paper } from "@mui/material";
import { Box } from "@mui/system";
import DOMPurify from "dompurify";
import { useSnackbar } from "notistack";
import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import useProductDetail from "../../../hooks/useProductDetails";
import { addToCart } from "../../Cart/cartSlice";
import ProductInfo from "../components/ProductInfo";
import ProductReviews from "../components/ProductReviews";
import ProductThumbnail from "../components/ProductThumbnail";

DetailPage.propTypes = {};

function DetailPage(props) {
  const { enqueueSnackbar } = useSnackbar();
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
    enqueueSnackbar(`Thêm giỏ hàng thành công ${quantity} ${product.name}`, {
      variant: "success",
    });
  };

  const safeDescription = DOMPurify.sanitize(product.description);

  return (
    <Container
      sx={{ padding: { xs: "0", md: "16px" }, paddingTop: { md: "0" } }}
    >
      <Grid
        container
        sx={{
          display: "flex",
          alignItems: "stretch",
          paddingTop: { sm: "23px", md: "0" },
        }}
      >
        <Grid item xs={12} sm={12} md={5} lg={4}>
          <ProductThumbnail product={product} />
        </Grid>
        <Grid item xs={12} sm={12} md={7} lg={8}>
          <ProductInfo onSubmit={handleAddToCartSubmit} product={product} />
        </Grid>
      </Grid>

      <Box marginTop="20px">
        <Paper
          sx={{
            padding: "20px",
            img: { width: "100%" },
            wordBreak: "break-word",
          }}
        >
          <div dangerouslySetInnerHTML={{ __html: safeDescription }}></div>
        </Paper>
      </Box>

      <Box marginTop="20px">
        <ProductReviews />
      </Box>
    </Container>
  );
}

export default DetailPage;
