import { Grid } from "@mui/material";
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
        "https://salt.tikicdn.com/cache/w1080/ts/banner/96/42/fe/78d6d0fb07a8281ea27ff2e092558dae.png.webp",
    },
    {
      id: 2,
      imgUrl:
        "https://salt.tikicdn.com/cache/w1080/ts/banner/0a/d7/02/8a47a56274a5ff6e8294ff0d9f05eb5a.png.webp",
    },
    {
      id: 3,
      imgUrl:
        "https://salt.tikicdn.com/cache/w1080/ts/banner/47/00/08/58c473083d078f14d09e6bf1d6ddef12.png.webp",
    },
    {
      id: 4,
      imgUrl:
        "https://salt.tikicdn.com/cache/w1080/ts/banner/ca/77/bb/11b604231a8e08da0aa5dfa451c25c90.png.webp",
    },
    {
      id: 5,
      imgUrl:
        "https://salt.tikicdn.com/cache/w1080/ts/banner/8a/fe/36/9bf2fa69c8151b8c8bef7a67bfbff7e5.png.webp",
    },
  ];

  return (
    <Box sx={{ width: "1270px", margin: "0 auto" }}>
      <Grid container>
        <Grid item xs={8} sx={{ height: "285px" }}>
          <Swiper
            navigation={true}
            pagination={true}
            modules={[Pagination, Navigation]}
            color="white"
          >
            {imgList.map((img) => (
              <SwiperSlide key={img.id}>
                <img src={img.imgUrl} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>
        <Grid item xs={4} sx={{ width: "calc(100% - 10px)" }}>
          <Box component="a" href="/" sx={{ height: "285px" }}>
            <Box
              component="img"
              width="100%"
              sx={{ borderRadius: "10px" }}
              src="banner-top-sale50.webp"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default HomeBannerTop;
