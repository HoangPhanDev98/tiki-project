import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";

CheckoutFeature.propTypes = {};

function CheckoutFeature(props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <Box
      sx={{
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box textAlign="center">
        <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/checkout/tiki-mascot-congrat.svg" />
        <Typography sx={{ margin: "15px 30px" }}>
          Đặt hàng thành công
        </Typography>
        <Button
          onClick={handleClick}
          variant="contained"
          sx={{
            background: "#fdd835",
            color: "rgb(74, 74, 74)",
            "&:hover": { background: "#fdce03" },
          }}
        >
          Quay về trang chủ
        </Button>
      </Box>
    </Box>
  );
}

export default CheckoutFeature;
