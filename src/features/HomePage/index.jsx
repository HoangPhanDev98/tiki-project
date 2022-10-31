import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CategoryTabBar from "./CategoryTabBar";
import HomeBannerTop from "./HomeBannerTop";
import HomeBrand from "./HomeBrand";
import HomeDealAndReward from "./HomeDealAndReward";
import ProductList from "./ProductList";

HomeFeature.propTypes = {};

function HomeFeature(props) {
  return (
    <Box>
      <CategoryTabBar />

      <HomeBannerTop />

      <HomeDealAndReward />

      <HomeBrand />

      <ProductList />
    </Box>
  );
}

export default HomeFeature;
