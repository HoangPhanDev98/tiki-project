import React from "react";
import PropTypes from "prop-types";
import { Paper } from "@mui/material";
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from "../../../constants/common";
import { Box } from "@mui/system";
import ReactImageMagnify from "react-image-magnify";

ProductThumbnail.propTypes = {
  product: PropTypes.object.isRequired,
};

function ProductThumbnail({ product }) {
  const thumbnailUrl = product.thumbnail
    ? `${STATIC_HOST}${product.thumbnail?.url}`
    : THUMBNAIL_PLACEHOLDER;

  const handleClickImg = (e) => {
    const elementImg = e.target;
    if (elementImg.classList.contains("active")) {
      elementImg.classList.remove("active");
    } else {
      elementImg.classList.add("active");
    }
  };

  return (
    <Paper
      elevation={0}
      sx={{ padding: { xs: "22px 0 0 0", md: "16px" }, height: "100%" }}
    >
      <Box
        sx={{
          position: "relative",
          "&>div": { padding: { xs: "0 20px 20px 20px", md: "0" } },
        }}
      >
        <ReactImageMagnify
          style={{ zIndex: "99" }}
          {...{
            smallImage: {
              alt: `${product.name}`,
              isFluidWidth: true,
              src: `${thumbnailUrl}`,
            },
            largeImage: {
              height: 1800,
              width: 1200,
              src: `${thumbnailUrl}`,
            },
          }}
        />
        <Box
          onClick={handleClickImg}
          paddingTop={2}
          sx={{
            img: { paddingRight: "16px" },
          }}
        >
          <img src={thumbnailUrl} alt={product.name} width="20%" />
          <img src={thumbnailUrl} alt={product.name} width="20%" />
          <img src={thumbnailUrl} alt={product.name} width="20%" />
          <img src={thumbnailUrl} alt={product.name} width="20%" />
          <img src={thumbnailUrl} alt={product.name} width="20%" />
        </Box>
      </Box>
    </Paper>
  );
}

export default ProductThumbnail;
