import { Container, Grid } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import HomeDeal from "./HomeDeal";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import "./styles.css";

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
    <Container
      sx={{
        padding: { xs: "0", md: "15px" },
        marginTop: { xs: "2px", md: "0" },
      }}
    >
      <Grid container sx={{ display: "flex", alignItems: "stretch" }}>
        <Grid
          item
          xs={12}
          md={7}
          sx={{ background: "white", borderRadius: "10px", overflow: "hidden" }}
        >
          <HomeDeal />
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
          sx={{
            paddingLeft: { md: "8px" },
            "&>div>div>div>img": { borderRadius: "10px" },
          }}
        >
          <Swiper pagination={true} modules={[Pagination]} color="white">
            {imgList.map((img) => (
              <SwiperSlide key={img.id}>
                <img src={img.imgUrl} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default HomeDealAndRewards;
