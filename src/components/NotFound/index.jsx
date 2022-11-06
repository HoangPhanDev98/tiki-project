import { Box, Typography } from "@mui/material";
import React from "react";
import { Grid } from "@mui/material";

NotFound.propTypes = {};

function NotFound(props) {
  return (
    <Grid
      container
      sx={{
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#eee",
      }}
    >
      <Grid
        item
        xs={12}
        display="flex"
        sx={{
          flexDirection: "column",
          justifyContent: "center",
        }}
        alignItems="flex-end"
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            width: "100vw",
          }}
        >
          <Box
            component="img"
            sx={{ width: { xs: "100px", sm: "219px" } }}
            src="https://salt.tikicdn.com/assets/img/404/super.png"
          ></Box>
          <Box
            component="img"
            sx={{
              width: { xs: "100px", sm: "212px" },
            }}
            src="https://salt.tikicdn.com/assets/img/404/404.png"
          ></Box>
        </Box>
        <Typography
          fontWeight="700"
          marginBottom="27px"
          sx={{
            width: "100vw",
            paddingTop: "30px",
            color: "#333",
            textAlign: "center",
            fontSize: { xs: "14px", sm: "22px" },
          }}
        >
          Xin lỗi, trang bạn đang tìm kiếm không tồn tại!
        </Typography>
      </Grid>
    </Grid>
  );
}

export default NotFound;
