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
          marginBottom: "15px",
          justifyContent: "space-between",
          img: {
            borderRadius: "10px",
            paddingRight: "5px",
          },
        }}
      >
        <Grid item xs={6} md={3} component="a">
          <img width="100%" src="homebrand-img-1.png" />
        </Grid>
        <Grid item xs={6} md={3} component="a">
          <img width="100%" src="homebrand-img-2.png" />
        </Grid>
        <Grid item xs={6} md={3} component="a">
          <img width="100%" src="homebrand-img-3.png" />
        </Grid>
        <Grid item xs={6} md={3} component="a">
          <img width="100%" src="homebrand-img-4.png" />
        </Grid>
      </Grid>
    </Container>
  );
}

export default HomeBrand;
