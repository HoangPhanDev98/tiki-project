import React from "react";
import PropTypes from "prop-types";
import { Paper } from "@mui/material";
import { Box } from "@mui/system";

HomeDeal.propTypes = {};

function HomeDeal(props) {
  return (
    <Paper elevation={0} sx={{ padding: "16px 16px 8px", display: "flex" }}>
      <Box>
        <Box component="img" src="giasoc.svg"></Box>
        <Box component="img" src="dealFlashIcon.svg" width="20px"></Box>
        <Box component="img" src="homnay.svg"></Box>
      </Box>
      <Box>
        <Box component="span">00</Box>
        <Box component="span">00</Box>
        <Box component="span">00</Box>
      </Box>
    </Paper>
  );
}

export default HomeDeal;
