import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";

HomeBannerTop.propTypes = {};

function HomeBannerTop(props) {
  const imgList = [
    {
      id: 1,
      imgUrl:
        "https://imagedelivery.net/0zXr_E37UKCFiaGSBm0NrA/7a8c224b-8932-4ec3-e6f7-52df4cb1ec00/public",
    },
    {
      id: 2,
      imgUrl:
        "https://imagedelivery.net/0zXr_E37UKCFiaGSBm0NrA/65065b09-4746-4e8d-b19b-29dfa415e500/public",
    },
    {
      id: 3,
      imgUrl:
        "https://imagedelivery.net/0zXr_E37UKCFiaGSBm0NrA/593478e8-460e-4f87-57cc-508914c59800/public",
    },
    {
      id: 4,
      imgUrl:
        "https://imagedelivery.net/0zXr_E37UKCFiaGSBm0NrA/ca3715f6-7970-448a-e81b-12854d25a600/public",
    },
    {
      id: 5,
      imgUrl:
        "https://imagedelivery.net/0zXr_E37UKCFiaGSBm0NrA/cd389c5c-ce65-4502-b7c6-c60b0e657200/public",
    },
    {
      id: 6,
      imgUrl:
        "https://imagedelivery.net/0zXr_E37UKCFiaGSBm0NrA/a0c5ffb0-86aa-4be9-f8cd-6a3622a36900/public",
    },
  ];

  return (
    <Container sx={{ padding: { xs: "0", md: "15px 15px 0 15px" } }}>
      <Grid container sx={{ paddingTop: { xs: "58px", md: "0" } }}>
        <Grid
          item
          xs={12}
          md={8}
          sx={{ borderRadius: "10px", overflow: "hidden" }}
        >
          <Swiper
            navigation={true}
            pagination={true}
            modules={[Pagination, Navigation]}
          >
            {imgList.map((img) => (
              <SwiperSlide key={img.id}>
                <img src={img.imgUrl} className="swiper-lazy" />
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            paddingLeft: { md: "6px" },
            width: "calc(100% - 10px)",
            marginTop: { xs: "5px", md: "0" },
          }}
        >
          <Box component="a" href="/">
            <Box
              component="img"
              width="100%"
              sx={{ borderRadius: "10px" }}
              src="https://imagedelivery.net/0zXr_E37UKCFiaGSBm0NrA/61009224-d642-447d-1ab9-ba6a3939e200/public"
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default HomeBannerTop;
