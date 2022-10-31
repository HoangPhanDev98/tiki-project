import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CategoryTabBar from "./CategoryTabBar";
import HomeBannerTop from "./HomeBannerTop";
import HomeDealAndReward from "./HomeDealAndReward";

HomeFeature.propTypes = {};

function HomeFeature(props) {
  return (
    <Box>
      <CategoryTabBar />

      <HomeBannerTop />

      <HomeDealAndReward />
    </Box>
  );
}

export default HomeFeature;
