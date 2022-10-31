import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import productApi from "../../../../api/productApi";
import { formatPrice } from "../../../../utils/index";
import {
  STATIC_HOST,
  THUMBNAIL_PLACEHOLDER,
} from "../../../../constants/index";

HomeDeal.propTypes = {};

function HomeDeal(props) {
  const [productsSale, setProductsSale] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await productApi.getAll({
          _page: 1,
          _limit: 5,
          isPromotion: true,
        });
        setProductsSale(data);
      } catch (error) {
        console.log("Failed to get product: ", error);
      }
    })();
  }, []);
  return (
    <Paper elevation={0}>
      <Box
        sx={{ display: "flex", alignItems: "center", padding: "16px 16px 8px" }}
      >
        <Box>
          <Box component="img" src="giasoc.svg"></Box>
          <Box component="img" src="dealFlashIcon.svg" width="20px"></Box>
          <Box component="img" src="homnay.svg"></Box>
        </Box>
        <Box
          sx={{
            span: {
              backgroundColor: "#ff424e",
              margin: "0 4px",
              padding: "3px",
              fontSize: "15px",
              lineHeight: "15px",
              fontWeight: "bold",
              color: "white",
              borderRadius: "5px",
            },
          }}
        >
          <Box component="span">00</Box>
          <Box component="span">00</Box>
          <Box component="span">00</Box>
        </Box>
      </Box>

      <Box sx={{ display: "flex", marginTop: "10px" }}>
        {productsSale.map((product) => (
          <Box sx={{ padding: "6px" }} key={product.id}>
            <Box
              component="img"
              width="100%"
              src={
                product.thumbnail
                  ? `${STATIC_HOST}${product.thumbnail?.url}`
                  : THUMBNAIL_PLACEHOLDER
              }
            />
            <Box
              sx={{
                display: "flex",
                color: "red",
                alignItems: "flex-end",
                marginTop: "20px",
              }}
            >
              <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
                {formatPrice(product.salePrice)}
              </Typography>
              <Typography
                sx={{
                  fontSize: "13px",
                  paddingLeft: "7px",
                  fontWeight: "bold",
                }}
              >
                -{product.promotionPercent}%
              </Typography>
            </Box>
            <Box
              component="span"
              sx={{
                display: "block",
                fontSize: "11px",
                textAlign: "center",
                background: "rgb(255, 170, 175)",
                padding: "3px 0",
                borderRadius: "20px",
                color: "white",
                position: "relative",
                marginY: "11px",
                "&::before": {
                  content: '""',
                  width: "17px",
                  height: "17px",
                  position: "absolute",
                  background: "red",
                  top: "0",
                  left: "0",
                  borderRadius: "50%",
                },
              }}
            >
              Vừa mở bán
            </Box>
          </Box>
        ))}
      </Box>
    </Paper>
  );
}

export default HomeDeal;
