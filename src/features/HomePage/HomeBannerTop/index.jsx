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
      imgUrl: "/banner-1.png",
    },
    {
      id: 2,
      imgUrl: "/banner-2.png",
    },
    {
      id: 3,
      imgUrl: "/banner-3.png",
    },
    {
      id: 4,
      imgUrl: "/banner-4.png",
    },
    {
      id: 5,
      imgUrl: "/banner-5.png",
    },
    {
      id: 6,
      imgUrl: "/banner-6.png",
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
              src="banner-top-sale50.png"
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default HomeBannerTop;
