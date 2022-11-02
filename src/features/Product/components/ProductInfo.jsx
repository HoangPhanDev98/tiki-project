import { yupResolver } from "@hookform/resolvers/yup";
import StarIcon from "@mui/icons-material/Star";
import { Button, Grid, Paper, Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";
import PropTypes from "prop-types";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import QuantityField from "../../../components/form-control/QuantityField";
import { formatPrice } from "../../../utils";

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
      sx={{
        borderLeft: "1px solid #f2f2f2",
        height: "100%",
        paddingRight: "24px",
      }}
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
          <Grid item lg={8} paddingX="12px">
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
                      "&:hover": {
                        backgroundColor: "#d43e47",
                      },
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
            <Box
              borderRadius="4px"
              boxShadow="rgb(242 242 242) 1px 1px 0px 0px inset, rgb(242 242 242) -1px -1px 0px 0px inset"
            >
              <Box display="flex" alignItems="center" padding="8px 12px">
                <Box component="img" src="/hpd-icon.webp" width="44px" />
                <Typography
                  fontWeight="bold"
                  fontSize="15px"
                  lineHeight="16px"
                  marginLeft="8px"
                  marginTop="2px"
                >
                  HPD
                </Typography>
              </Box>
              <Box display="flex" justifyContent="space-around">
                <Box textAlign="center">
                  <Typography
                    display="flex"
                    alignItems="center"
                    fontSize="15px"
                    sx={{
                      svg: {
                        fontSize: "14px",
                        color: "#ffc120",
                      },
                    }}
                  >
                    <Typography fontWeight="bold" paddingRight="5px">
                      4.4 / 5
                    </Typography>
                    <StarIcon width="14px" />
                  </Typography>
                  <Typography fontSize="11px" color="#787878">
                    9.3k+
                  </Typography>
                </Box>
                <Box textAlign="center">
                  <Typography fontWeight="bold">855</Typography>
                  <Typography fontSize="11px" color="#787878">
                    Theo dõi
                  </Typography>
                </Box>
                <Box textAlign="center">
                  <Typography fontWeight="bold">64%</Typography>
                  <Typography fontSize="11px" color="#787878">
                    Phản hồi Chat
                  </Typography>
                </Box>
              </Box>
              <Box
                display="flex"
                justifyContent="space-around"
                paddingY="12px"
                sx={{
                  button: {
                    padding: "6px 12px",
                    fontSize: "13px",
                    fontWeight: "500",
                    textTransform: "none",
                    color: "#0d5cb6",
                  },
                  img: {
                    width: "20px",
                  },
                }}
              >
                <Button variant="outlined" size="large" color="primary">
                  <Box component="img" src="/shop-icon.png" />
                  <Box component="span" paddingLeft="5px">
                    Xem Shop
                  </Box>
                </Button>
                <Button variant="outlined" size="large" color="primary">
                  <Box component="img" src="/increase-icon.png" />
                  <Box component="span" paddingLeft="5px">
                    Theo dõi
                  </Box>
                </Button>
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                padding="8px 12px"
                borderTop="1px solid rgb(242, 242, 242)"
                borderBottom="1px solid rgb(242, 242, 242)"
              >
                <Typography fontSize="13px" color="#787878">
                  Hướng dẫn bảo hành
                </Typography>
                <Typography
                  fontSize="13px"
                  color="#0d5cb6"
                  sx={{ cursor: "pointer" }}
                >
                  Xem chi tiết
                </Typography>
              </Box>
              <Grid
                container
                display="flex"
                justifyContent="space-around"
                padding="8px 4px"
                textAlign="center"
                sx={{
                  div: { paddingX: "2px" },
                  "div > img": { width: "32px", marginBottom: "4px" },
                  "div  > p": { fontSize: "13px" },
                }}
              >
                <Grid item xs={4}>
                  <Box component="img" src="/hoan-tien-icon.png" />
                  <Typography>
                    Hoàn tiền
                    <Typography fontSize="inherit" fontWeight="700">
                      111%
                    </Typography>
                    nếu hàng giả
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Box component="img" src="/hoan-tien-icon.png" />
                  <Typography>Mở hộp kiểm tra nhận hàng</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Box component="img" src="/hoan-tien-icon.png" />
                  <Typography>
                    Đổi trả trong
                    <Typography fontSize="inherit" fontWeight="700">
                      7 ngày
                    </Typography>
                    nếu sp lỗi
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
}

export default ProductInfo;
