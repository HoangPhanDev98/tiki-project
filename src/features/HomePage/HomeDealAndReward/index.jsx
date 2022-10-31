import React from "react";
import PropTypes from "prop-types";
import { Box, Grid } from "@mui/material";
import CarouselBanner from "../../../components/CarouselBanner";
import HomeDeal from "./HomeDeal";

HomeDealAndRewards.propTypes = {};

function HomeDealAndRewards(props) {
  const imgList = [
    {
      imgUrl:
        "https://salt.tikicdn.com/cache/w750/ts/upload/ac/19/68/3cc24576300d4f7cb5b38a10a57a84d4.png.webp",
    },
    {
      imgUrl:
        "https://salt.tikicdn.com/cache/w750/ts/upload/87/35/2b/2ef313d86930e4bcb51b476e674386d9.png.webp",
    },
    {
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
          <CarouselBanner imgList={imgList} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default HomeDealAndRewards;
