import React from "react";
import PropTypes from "prop-types";
import { Button, Grid, Paper, Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { formatPrice } from "../../../utils";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import QuantityField from "../../../components/form-control/QuantityField";

ProductInfo.propTypes = {
  product: PropTypes.object.isRequired,
  onSubmit: PropTypes.func,
};

function ProductInfo({ product = {}, onSubmit = null }) {
  const schema = yup.object().shape({
    quantity: yup
      .number()
      .required("Please enter quantity")
      .min(1, "Minimum value is 1")
      .typeError("Please enter a number"),
  });

  const form = useForm({
    defaultValues: {
      quantity: 1,
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (values) => {
    if (onSubmit) await onSubmit(values);
  };

  return (
    <Paper
      elevation={0}
      sx={{ borderLeft: "1px solid #f2f2f2", height: "100%" }}
    >
      <Box sx={{ padding: "16px 28px 16px 16px" }}>
        <Typography
          fontSize="13px"
          sx={{ span: { color: "#0d5cb6", cursor: "pointer" } }}
        >
          Thương hiệu:
          <span> HPV</span>
        </Typography>
        <Typography
          fontSize="24px"
          lineHeight="32px"
          fontWeight="300"
          sx={{ marginBottom: "4px", textTransform: "capitalize" }}
        >
          {product.name} - Hàng Chính Hãng HPV
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginTop: "4px",
            fontSize: "15px",
            color: "#787878",
          }}
        >
          <Rating value={5} size="small" color="#fdd836" readOnly />
          <Box component="span" sx={{ marginLeft: "8px" }}>
            (Xem 690 đánh giá)
          </Box>
          <Box component="span" sx={{ marginX: "8px" }}>
            |
          </Box>
          <Box component="span">Đã bán 2174</Box>
        </Box>
      </Box>
      <Box sx={{ padding: "16px 0 24px 16px" }}>
        <Grid container>
          <Grid item lg={8} paddingLeft="12px">
            <Box padding="16px 12px" sx={{ backgroundColor: "#fafafa" }}>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <Typography
                  fontSize="32px"
                  paddingRight="8px"
                  color="#ff424e"
                  lineHeight="40px"
                  fontWeight="500"
                >
                  {formatPrice(product.salePrice)}
                </Typography>
                <Typography
                  fontSize="14px"
                  sx={{ textDecoration: "line-through" }}
                >
                  {formatPrice(product.originalPrice)}
                </Typography>
                <Typography
                  color="#ff424e"
                  fontWeight="600"
                  sx={{ margin: "4px 0 0 3px", paddingX: "4px" }}
                >{`-${product.promotionPercent}%`}</Typography>
              </Box>
              <Box display="flex" marginTop="10px">
                <Box
                  sx={{
                    padding: "4px 8px",
                    display: "inline-block",
                    border: "0.5px solid #c6bcf8",
                    borderRadius: "4px 0 0 4px",
                    backgroundColor: "rgb(242, 240, 254)",
                    color: "rgb(64, 45, 161)",
                  }}
                >
                  <img height="16px" src="../../../astra-icon.png" />

                  <Typography
                    display="inline-block"
                    marginLeft="4px"
                    fontSize="14px"
                  >
                    Thưởng 23,20 ASA (~ {formatPrice(7238)})
                  </Typography>
                </Box>
                <Box marginTop="1px" sx={{ cursor: "pointer" }}>
                  <img width="75px" height="100%" src="../../../astra+.png" />
                </Box>
              </Box>
            </Box>
            <hr></hr>
            <Box paddingY={1}>
              <Typography fontSize="15px">Số Lượng</Typography>
              <form onSubmit={form.handleSubmit(handleSubmit)}>
                <QuantityField name="quantity" lable="Quantity" form={form} />

                <Box
                  display="flex"
                  sx={{
                    justifyContent: "space-between",
                  }}
                >
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    sx={{
                      paddingY: "0",
                      minWidth: "250px",
                      maxWidth: "300px",
                      backgroundColor: "#ff3945",
                    }}
                  >
                    Chọn Mua
                  </Button>

                  <Button
                    variant="outlined"
                    size="large"
                    sx={{
                      paddingY: "0",
                      minWidth: "250px",
                      maxWidth: "300px",
                      display: "flex",
                      flexDirection: "column",
                      fontSize: "15px",
                    }}
                    color="primary"
                  >
                    Mua trước trả sau
                    <Typography component="span" fontSize="11px">
                      Lãi suất 0%
                    </Typography>
                  </Button>
                </Box>
              </form>
            </Box>
          </Grid>
          <Grid item lg={4}>
            b
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
}

export default ProductInfo;
