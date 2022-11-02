import { CircularProgress, Paper } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import categoryApi from "../../api/categoryApi";
import CategoryTabBar from "./CategoryTabBar";
import HomeBannerTop from "./HomeBannerTop";
import HomeBrand from "./HomeBrand";
import HomeDealAndReward from "./HomeDealAndReward";
import ProductList from "./ProductList";

HomeFeature.propTypes = {};

function HomeFeature(props) {
  const [categoryList, setCategoryList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const data = await categoryApi.getAll();
        setCategoryList(data);
      } catch (error) {
        console.log("Failed to get category list: ", error);
      }
      setLoading(false);
    })();
  }, []);

  return (
    <Box>
      <CategoryTabBar loading={loading} categoryList={categoryList} />

      <HomeBannerTop />

      <HomeDealAndReward />

      <HomeBrand />

      <ProductList categoryList={categoryList} />
    </Box>
  );
}

export default HomeFeature;
