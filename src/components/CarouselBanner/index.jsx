import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import PropTypes from "prop-types";

CarouselBanner.propType = {
  imgList: PropTypes.array.isRequired,
};

function CarouselBanner({ imgList }) {
  return (
    <Carousel
      navButtonsProps={{
        // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
        style: {
          backgroundColor: "#333",
          borderRadius: "50%",
        },
      }}
      indicators={false}
      swipe={false}
    >
      {imgList.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Paper sx={{ img: { borderRadius: "10px" } }}>
      <img width="100%" height="100%" src={props.item.imgUrl} />
    </Paper>
  );
}

export default CarouselBanner;
