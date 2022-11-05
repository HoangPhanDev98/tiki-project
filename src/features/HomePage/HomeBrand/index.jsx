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
          <img
            width="100%"
            src="https://imagedelivery.net/0zXr_E37UKCFiaGSBm0NrA/97252f46-cd3a-4ce7-977f-848c365de500/public"
          />
        </Grid>
        <Grid item xs={6} md={3} component="a">
          <img
            width="100%"
            src="https://imagedelivery.net/0zXr_E37UKCFiaGSBm0NrA/1077f75f-0cb5-409e-c3ec-982c34b29700/public"
          />
        </Grid>
        <Grid item xs={6} md={3} component="a">
          <img
            width="100%"
            src="https://imagedelivery.net/0zXr_E37UKCFiaGSBm0NrA/0091c977-9da0-47dc-676c-a4763bde5e00/public"
          />
        </Grid>
        <Grid item xs={6} md={3} component="a">
          <img
            width="100%"
            src="https://imagedelivery.net/0zXr_E37UKCFiaGSBm0NrA/5b707cb9-4a6c-4241-838d-26f88409f400/public"
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default HomeBrand;
