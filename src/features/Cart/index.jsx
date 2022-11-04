import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { cartItemsCountSelector, cartTotalSelector } from "./selectors";
import { Box } from "@mui/system";
import { Button, Container, Grid, Paper, Typography } from "@mui/material";
import { DeleteOutline } from "@mui/icons-material";
import { formatPrice } from "../../utils";
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from "../../constants/index";

CartFeature.propTypes = {};

function CartFeature(props) {
  const cartItemTotal = useSelector(cartItemsCountSelector);
  const cartTotal = useSelector(cartTotalSelector);
  const productDetail = useSelector((state) => state.cart.cartItems);

  return (
    <Container sx={{ paddingX: { xs: "0" }, lg: "16px" }}>
      <Box
        sx={{
          marginY: "0",
          paddingTop: { xs: "60px", lg: "0" },
          lg: "0",
        }}
      >
        <Typography
          fontSize="20px"
          fontWeight="500"
          sx={{
            textAlign: { xs: "center" },
            paddingY: { xs: "20px" },
          }}
        >
          Giỏ hàng
        </Typography>
      </Box>

      <Grid
        container
        sx={{
          display: { xs: "flex" },
          flexDirection: { xs: "column-reverse", md: "row" },
        }}
      >
        <Grid
          item
          xs={12}
          sx={{
            display: { xs: "flex", sm: "none" },
            alignItems: "center",
            justifyContent: "space-around",
            position: "fixed",
            bottom: "0",
            left: "0",
            background: "white",
            height: "100px",
            width: "100%",
          }}
        >
          <Box>
            <Typography fontSize="13px">Tổng tiền</Typography>
            <Typography fontSize="20px" color="#ff424e">
              {formatPrice(cartTotal)}
            </Typography>
          </Box>
          <Button
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

        <Grid item xs={12} md={8}>
          <Paper
            elevation={0}
            sx={{
              padding: "9px 16px",
              marginBottom: { xs: "2px", sm: "10px" },
            }}
          >
            <Grid container sx={{ alignItems: "center" }}>
              <Grid item xs={3} lg={5} fontSize="14px">
                Sản phẩm
              </Grid>
              <Grid item xs={3} lg={2} fontSize="13px">
                Đơn giá
              </Grid>
              <Grid item xs={2} lg={2} fontSize="13px">
                Số lượng
              </Grid>
              <Grid item xs={3} lg={2} fontSize="13px">
                Thành tiền
              </Grid>
              <Grid item xs={1} lg={1} fontSize="13px" textAlign="right"></Grid>
            </Grid>
          </Paper>

          {productDetail.map((product) => (
            <Paper key={product.id} elevation={0} sx={{ padding: "9px 16px" }}>
              {console.log(product.product.thumbnail)}

              <Grid container sx={{ alignItems: "center" }}>
                <Grid item xs={3} lg={5} display="flex" alignItems="center">
                  <img
                    width="77.63px"
                    height="80px"
                    src={
                      product.product.thumbnail
                        ? `${STATIC_HOST}${product.product.thumbnail?.url}`
                        : THUMBNAIL_PLACEHOLDER
                    }
                  />
                  <Typography
                    paddingLeft="10px"
                    fontSize="14px"
                    sx={{ display: { xs: "none", lg: "inline-block" } }}
                  >
                    {product.product.name}
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={3}
                  lg={2}
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
                  xs={3}
                  lg={2}
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

        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          sx={{
            paddingLeft: { xs: "0", md: "20px" },
            marginBottom: { xs: "20px", sm: "0" },
          }}
        >
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
          <Paper sx={{ marginY: "15px", display: { xs: "none", sm: "block" } }}>
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

            <Button
              fullWidth
              variant="contained"
              size="large"
              sx={{
                backgroundColor: "#ff424e",
                "&:hover": { backgroundColor: "#d43e47" },
                display: { xs: "none", sm: "block" },
              }}
            >
              Mua Hàng ({cartItemTotal})
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default CartFeature;
