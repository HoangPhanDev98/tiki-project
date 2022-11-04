import React from "react";
import PropTypes from "prop-types";
import { Box, Container, Grid } from "@mui/material";

HomeBrand.propTypes = {};

function HomeBrand(props) {
  return (
    <Container sx={{ display: { xs: "none", md: "block" } }}>
      <Grid
        container
        sx={{
          display: "flex",
          marginY: "20px",
          justifyContent: "space-between",
          img: {
            borderRadius: "10px",
          },
        }}
      >
        <Grid item xs={12} md={3} component="a">
          <img width="100%" src="homebrand-img-1.png" />
        </Grid>
        <Grid item xs={12} md={6} component="a">
          <img width="100%" height="168px" src="homebrand-img-2.png" />
        </Grid>
        <Grid item xs={12} md={3} component="a">
          <img width="100%" height="168px" src="homebrand-img-3.png" />
        </Grid>
      </Grid>
    </Container>
  );
}

export default HomeBrand;
