import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { cartItemsCountSelector, cartTotalSelector } from "./selectors";
import { Box } from "@mui/system";
import { Button, Grid, Paper, Typography } from "@mui/material";
import { DeleteOutline } from "@mui/icons-material";
import { formatPrice } from "../../utils";
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from "../../constants/index";

CartFeature.propTypes = {};

function CartFeature(props) {
  const cartItemTotal = useSelector(cartItemsCountSelector);
  const cartTotal = useSelector(cartTotalSelector);
  const productDetail = useSelector((state) => state.cart.cartItems);

  return (
    <Box sx={{ width: "1270px", margin: "0 auto" }}>
      <Box marginY="20px">
        <Typography fontSize="20px" fontWeight="500">
          Giỏ hàng
        </Typography>
      </Box>

      <Grid container>
        <Grid item xs={8}>
          <Paper
            elevation={0}
            sx={{ padding: "9px 16px", marginBottom: "10px" }}
          >
            <Grid container sx={{ alignItems: "center" }}>
              <Grid item xs={5} fontSize="14px">
                {cartItemTotal} sản phẩm
              </Grid>
              <Grid item xs={3} fontSize="13px">
                Đơn giá
              </Grid>
              <Grid item xs={2} fontSize="13px">
                Số lượng
              </Grid>
              <Grid item xs={1} fontSize="13px">
                Thành tiền
              </Grid>
              <Grid item xs={1} fontSize="13px" textAlign="right"></Grid>
            </Grid>
          </Paper>

          {productDetail.map((product) => (
            <Paper key={product.id} elevation={0} sx={{ padding: "9px 16px" }}>
              {console.log(product)}
              <Grid container sx={{ alignItems: "center" }}>
                <Grid item xs={5} display="flex" alignItems="center">
                  <img
                    width="77.63px"
                    height="80px"
                    src={
                      product.thumbnail
                        ? `${STATIC_HOST}${product.thumbnail?.url}`
                        : THUMBNAIL_PLACEHOLDER
                    }
                  />
                  <Typography paddingLeft="10px" fontSize="14px">
                    {product.product.name}
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={3}
                  fontSize="13px"
                  fontWeight="bold"
                  color="#242424"
                >
                  {formatPrice(product.product.salePrice)}
                </Grid>
                <Grid item xs={2} fontSize="13px">
                  {product.quantity}
                </Grid>
                <Grid
                  item
                  xs={1}
                  fontSize="13px"
                  fontWeight="bold"
                  color="#ff424e"
                >
                  {formatPrice(product.product.salePrice * product.quantity)}
                </Grid>
                <Grid item xs={1} fontSize="13px" textAlign="right">
                  <DeleteOutline />
                </Grid>
              </Grid>
            </Paper>
          ))}
        </Grid>
        <Grid item xs={4} sx={{ paddingLeft: "20px" }}>
          <Paper sx={{ padding: "16px" }}>
            <Box
              display="flex"
              marginBottom="12px"
              justifyContent="space-between"
            >
              <Typography fontSize="16.38px" color="#808089">
                Giao tới
              </Typography>

              <Typography
                fontSize="14px"
                color="#0B74E5"
                sx={{ cursor: "pointer" }}
              >
                Thay đổi
              </Typography>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              sx={{
                "#line-spacing": {
                  marginX: "5px",
                  color: "#f2f2f2",
                },
              }}
            >
              <Typography fontSize="14px" color="#38383D" fontWeight="700">
                Phan Thanh Hoàng
              </Typography>
              <span id="line-spacing">|</span>
              <Typography fontSize="14px" color="#38383D" fontWeight="700">
                0379239222
              </Typography>
            </Box>
            <Box>
              <Typography
                component="span"
                sx={{
                  color: "#fc820a",
                  fontSize: "12px",
                  padding: "2px 6px",
                  marginRight: "4px",
                  backgroundColor: "#fff5eb",
                  borderRadius: "5px",
                }}
              >
                Văn phòng
              </Typography>
              <Typography component="span" fontSize="14px" color="#808089">
                59/11 Đường số 11, Phường Tăng Nhơn Phú A, Thành phố Thủ Đức, Hồ
                Chí Minh
              </Typography>
            </Box>
          </Paper>
          <Paper sx={{ marginY: "15px" }}>
            <Box padding="17px 20px">
              <Box display="flex" justifyContent="space-between">
                <Typography fontSize="14px" color="#333333">
                  Tạm tính
                </Typography>
                <Typography>{formatPrice(cartTotal)}</Typography>
              </Box>

              <Box display="flex" justifyContent="space-between">
                <Typography fontSize="14px" color="#333333">
                  Giảm giá
                </Typography>
                <Typography>{formatPrice(0)}</Typography>
              </Box>
            </Box>

            <Box padding="17px 20px" sx={{ borderTop: "1px solid #f2f2f2" }}>
              <Box display="flex" justifyContent="space-between">
                <Typography fontSize="14px" color="#333333">
                  Tổng tiền
                </Typography>
                <Typography fontSize="20px" color="#fe3834" fontWeight="400">
                  {formatPrice(cartTotal)}
                </Typography>
              </Box>
              <Typography textAlign="right" fontSize="12px" color="#333333">
                (Đã bao gồm VAT nếu có)
              </Typography>
            </Box>
          </Paper>

          <Button
            fullWidth
            variant="contained"
            size="large"
            sx={{
              backgroundColor: "#ff424e",
              "&:hover": { backgroundColor: "#d43e47" },
            }}
          >
            Mua Hàng ({cartItemTotal})
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default CartFeature;
