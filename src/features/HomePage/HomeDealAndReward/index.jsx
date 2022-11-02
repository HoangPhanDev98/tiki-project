import { Box, Grid } from "@mui/material";
import React from "react";
import HomeDeal from "./HomeDeal";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";
import { Pagination, Navigation } from "swiper";

import { useNavigate } from "react-router-dom";

HomeDealAndRewards.propTypes = {};

function HomeDealAndRewards(props) {
  const imgList = [
    {
      id: 1,
      imgUrl:
        "https://salt.tikicdn.com/cache/w750/ts/upload/ac/19/68/3cc24576300d4f7cb5b38a10a57a84d4.png.webp",
    },
    {
      id: 2,
      imgUrl:
        "https://salt.tikicdn.com/cache/w750/ts/upload/87/35/2b/2ef313d86930e4bcb51b476e674386d9.png.webp",
    },
    {
      id: 3,
      imgUrl:
        "https://salt.tikicdn.com/cache/w750/ts/upload/c8/a7/96/c698f113eeda56010b6eacfc762df4ff.png.webp",
    },
  ];
  return (
    <Box sx={{ width: "1270px", margin: "0 auto" }}>
      <Grid container>
        <Grid item xs={7}>
          <HomeDeal />
        </Grid>
        <Grid item xs={5} height="300px">
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
      </Grid>
    </Box>
  );
}

export default HomeDealAndRewards;
