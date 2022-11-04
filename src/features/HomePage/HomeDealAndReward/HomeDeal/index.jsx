import { Grid, Paper, Skeleton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import productApi from "../../../../api/productApi";
import {
  STATIC_HOST,
  THUMBNAIL_PLACEHOLDER,
} from "../../../../constants/index";
import { formatPrice } from "../../../../utils/index";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";
import { useNavigate } from "react-router-dom";

// import required modules

HomeDeal.propTypes = {};

function HomeDeal(props) {
  const navigate = useNavigate();
  const [productsSale, setProductsSale] = useState([]);
  const [loading, setLoading] = useState(true);

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
      setLoading(false);
    })();
  }, []);

  const handleProductSaleClick = (productId) => {
    navigate(`/san-pham/${productId}`);
  };
  return (
    <Paper elevation={0} sx={{ marginBottom: "10px" }}>
      <Box
        sx={{ display: "flex", alignItems: "center", padding: "16px 16px 8px" }}
      >
        <Box>
          <Box
            component="img"
            sx={{ width: { xs: "80px", md: "100%" } }}
            src="giasoc.svg"
          ></Box>
          <Box
            component="img"
            src="dealFlashIcon.svg"
            sx={{ width: { xs: "18px", md: "20px" } }}
          ></Box>
          <Box
            component="img"
            sx={{ width: { xs: "100px", md: "100%" } }}
            src="homnay.svg"
          ></Box>
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
      {loading ? (
        <Skeleton variant="rectangular" width={740} height={320} />
      ) : (
        <Grid container sx={{ display: "flex", marginTop: "10px" }}>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            breakpoints={{
              "@0.00": {
                slidesPerView: 3,
                spaceBetween: 0,
              },
              "@0.75": {
                slidesPerView: 3,
                spaceBetween: 0,
              },
              "@1.00": {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              "@1.50": {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            className="mySwiper"
          >
            {productsSale.map((product) => (
              <SwiperSlide key={product.id}>
                <Grid
                  item
                  xs={6}
                  sx={{ padding: "6px", cursor: "pointer" }}
                  key={product.id}
                  onClick={() => handleProductSaleClick(product.id)}
                >
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
                      flexDirection: { xs: "column", md: "row" },
                      color: "red",
                      alignItems: { xs: "center", md: "flex-end" },
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
                      fontSize: { xs: "8px", md: "11px" },
                      textAlign: "center",
                      background: "rgb(255, 170, 175)",
                      padding: { xs: "3px 4px", md: "3px 0" },
                      borderRadius: "20px",
                      color: "white",
                      position: "relative",
                      marginY: "11px",
                      "&::before": {
                        content: '""',
                        width: { xs: "8px", md: "17px" },
                        height: { xs: "8px", md: "17px" },
                        position: { xs: "relative", md: "absolute" },
                        background: "red",
                        top: "0",
                        left: "0",
                        borderRadius: "50%",
                      },
                    }}
                  >
                    Vừa mở bán
                  </Box>
                </Grid>
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>
      )}
    </Paper>
  );
}

export default HomeDeal;
