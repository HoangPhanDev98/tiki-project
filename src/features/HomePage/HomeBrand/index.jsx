import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";

HomeBrand.propTypes = {};

function HomeBrand(props) {
  return (
    <Box
      sx={{
        width: "1270px",
        margin: "0 auto",
        display: "flex",
        marginY: "20px",
        justifyContent: "space-between",
        img: {
          borderRadius: "10px",
        },
      }}
    >
      <Box component="a">
        <img width="100%" height="168px" src="homebrand-img-1.png" />
      </Box>
      <Box component="a">
        <img width="100%" height="168px" src="homebrand-img-2.png" />
      </Box>
      <Box component="a">
        <img width="100%" height="168px" src="homebrand-img-3.png" />
      </Box>
    </Box>
  );
}

export default HomeBrand;
