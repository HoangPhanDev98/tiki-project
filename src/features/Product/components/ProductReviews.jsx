import { CheckCircle, ThumbUpOffAltOutlined } from "@mui/icons-material";
import { Button, Grid, Paper, Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CheckIcon from "@mui/icons-material/Check";

ProductReviews.propTypes = {};

function ProductReviews(props) {
  return (
    <Paper elevation={0}>
      <Typography fontSize="20px" padding="8px 16px" fontWeight="400">
        Đánh Giá - Nhận Xét Từ Khách Hàng
      </Typography>
      <Box padding="0 48px">
        <Grid container>
          <Grid item xs={4}>
            <Box display="flex" alignItems="center">
              <Typography fontSize="32px" fontWeight="700" paddingRight="16px">
                4.9
              </Typography>
              <Box>
                <Rating value={5} size="medium" readOnly />
                <Typography fontSize="13px" color="#808089">
                  692 Nhận xét
                </Typography>
              </Box>
            </Box>
            <Box paddingY="12px">
              <Box
                display="flex"
                alignItems="center"
                sx={{
                  "#progress-bar": {
                    marginX: "10px",
                    height: "6px",
                    width: "150px",
                    backgroundColor: "#f5f5fa",
                    borderRadius: "5px",
                    position: "relative",
                    "&::before": {
                      content: "''",
                      height: "inherit",
                      width: "90%",
                      backgroundColor: "#808089",
                      position: "absolute",
                      borderRadius: "inherit",
                    },
                  },
                }}
              >
                <Rating value={5} size="small" readOnly />
                <Box id="progress-bar"></Box>
                <Typography fontSize="11px" color="#808089">
                  497
                </Typography>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                sx={{
                  "#progress-bar": {
                    marginX: "10px",
                    height: "6px",
                    width: "150px",
                    backgroundColor: "#f5f5fa",
                    borderRadius: "5px",
                    position: "relative",
                    "&::before": {
                      content: "''",
                      height: "inherit",
                      width: "18%",
                      backgroundColor: "#808089",
                      position: "absolute",
                      borderRadius: "inherit",
                    },
                  },
                }}
              >
                <Rating value={4} size="small" readOnly />
                <Box id="progress-bar"></Box>
                <Typography fontSize="11px" color="#808089">
                  127
                </Typography>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                sx={{
                  "#progress-bar": {
                    marginX: "10px",
                    height: "6px",
                    width: "150px",
                    backgroundColor: "#f5f5fa",
                    borderRadius: "5px",
                    position: "relative",
                    "&::before": {
                      content: "''",
                      height: "inherit",
                      width: "3%",
                      backgroundColor: "#808089",
                      position: "absolute",
                      borderRadius: "inherit",
                    },
                  },
                }}
              >
                <Rating value={3} size="small" readOnly />
                <Box id="progress-bar"></Box>
                <Typography fontSize="11px" color="#808089">
                  23
                </Typography>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                sx={{
                  "#progress-bar": {
                    marginX: "10px",
                    height: "6px",
                    width: "150px",
                    backgroundColor: "#f5f5fa",
                    borderRadius: "5px",
                    position: "relative",
                    "&::before": {
                      content: "''",
                      height: "inherit",
                      width: "0%",
                      backgroundColor: "#808089",
                      position: "absolute",
                      borderRadius: "inherit",
                    },
                  },
                }}
              >
                <Rating value={2} size="small" readOnly />
                <Box id="progress-bar"></Box>
                <Typography fontSize="11px" color="#808089">
                  0
                </Typography>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                sx={{
                  "#progress-bar": {
                    marginX: "10px",
                    height: "6px",
                    width: "150px",
                    backgroundColor: "#f5f5fa",
                    borderRadius: "5px",
                    position: "relative",
                    "&::before": {
                      content: "''",
                      height: "inherit",
                      width: "0%",
                      backgroundColor: "#808089",
                      position: "absolute",
                      borderRadius: "inherit",
                    },
                  },
                }}
              >
                <Rating value={1} size="small" readOnly />
                <Box id="progress-bar"></Box>
                <Typography fontSize="11px" color="#808089">
                  0
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={8}>
            <Box display="flex">
              <Box>
                <Typography>Đánh giá của khách đã mua hàng</Typography>
              </Box>
              <Box></Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box padding="20px 48px" borderTop="1px solid rgb(242,242,242)">
        <Grid container>
          <Grid item xs={4}>
            <Box display="flex">
              <Box
                sx={{
                  "#user-avatar": {
                    position: "relative",
                    width: "48px",
                    height: "48px",
                    backgroundColor: "#f2f2f2",
                    borderRadius: "50%",
                  },
                  "#user-name": {
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    fontSize: "14px",
                    fontWeight: "500",
                  },
                }}
              >
                <Box id="user-avatar">
                  <Typography id="user-name" component="span">
                    VA
                  </Typography>
                </Box>
              </Box>
              <Box paddingLeft="12px">
                <Typography
                  sx={{
                    fontSize: "15px",
                    fontWeight: "700",
                    lineHeight: "24px",
                    color: "#242424",
                  }}
                >
                  Nguyễn Thị Vân Anh
                </Typography>
                <Typography sx={{ fontSize: "13px", color: "#808089" }}>
                  Đã tham gia 2 năm
                </Typography>
              </Box>
            </Box>
            <Box
              marginTop="12px"
              display="flex"
              alignItems="center"
              sx={{ img: { width: "20px", marginRight: "8px" } }}
            >
              <img src="/post-icon.png" />
              <Typography sx={{ fontSize: "13px", color: "#808089" }}>
                Đã viết: 48 Đánh giá
              </Typography>
            </Box>
            <Box
              marginTop="12px"
              display="flex"
              alignItems="center"
              sx={{ img: { width: "20px", marginRight: "8px" } }}
            >
              <img src="/like-icon.png" />
              <Typography sx={{ fontSize: "13px", color: "#808089" }}>
                Đã nhận: 0 Lượt cảm ơn
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={8}>
            <Box>
              <Box display="flex" alignItems="center">
                <Rating value={5} readOnly />
                <Typography
                  fontSize="15px"
                  sx={{
                    color: "#242424",
                    marginLeft: "12px",
                    fontWeight: "700",
                  }}
                >
                  Cực kì hài lòng
                </Typography>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                color="#00ab56"
                marginBottom="16px"
              >
                <CheckCircle fontSize="13" />
                <Typography marginLeft="5px" fontSize="13px">
                  Đã mua hàng
                </Typography>
              </Box>
            </Box>

            <Box>
              <Typography marginBottom="8px" fontSize="13px" color="#242424">
                Hài lòng. Dáng đẹp chuẩn form nhưng mình cao nên hơi cộc một
                chút
              </Typography>

              <Box display="flex" alignItems="center" marginBottom="8px">
                <CheckIcon fontSize="13px" sx={{ color: "#00ab56" }} />
                <Typography marginLeft="7px" fontSize="13px" color="#808089">
                  Đúng với mô tả/ hình ảnh, đường may đẹp, chắc chắn, Kiểu dáng
                  đẹp, Màu sắc đẹp
                </Typography>
              </Box>

              <Box
                marginBottom="2px"
                sx={{
                  color: "#808089",
                }}
              >
                <Typography fontSize="13px" component="span">
                  Màu: Kem
                </Typography>
                <span> - </span>
                <Typography fontSize="13px" component="span">
                  Kích thước: XL
                </Typography>
              </Box>
              <Box
                marginBottom="16px"
                sx={{
                  color: "#808089",
                }}
              >
                <Typography fontSize="13px" component="span">
                  Đánh giá vào 3 tháng trước
                </Typography>
                <span> - </span>
                <Typography fontSize="13px" component="span">
                  Đã dùng 1 giờ
                </Typography>
              </Box>
            </Box>

            <Box display="flex">
              <Button
                variant="outlined"
                size="large"
                sx={{
                  display: "flex",
                  padding: "8px 16px",
                  minWidth: "100px",
                  flexDirection: "row",
                  fontSize: "14px",
                  textTransform: "none",
                }}
                color="primary"
              >
                <ThumbUpOffAltOutlined
                  fontSize="14px"
                  sx={{ marginRight: "8px" }}
                />
                Hữu ích
              </Button>
              <Button
                size="large"
                sx={{
                  padding: "8px 16px",
                  minWidth: "100px",
                  fontSize: "14px",
                  textTransform: "none",
                }}
                color="primary"
              >
                Bình luận
              </Button>
              <Button
                size="large"
                sx={{
                  padding: "8px 16px",
                  minWidth: "100px",
                  fontSize: "14px",
                  textTransform: "none",
                }}
                color="primary"
              >
                Chia sẻ
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box padding="20px 48px" borderTop="1px solid rgb(242,242,242)">
        <Grid container>
          <Grid item xs={4}>
            <Box display="flex">
              <Box
                sx={{
                  "#user-avatar": {
                    position: "relative",
                    width: "48px",
                    height: "48px",
                    backgroundColor: "#f2f2f2",
                    borderRadius: "50%",
                  },
                  "#user-name": {
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    fontSize: "14px",
                    fontWeight: "500",
                  },
                }}
              >
                <Box id="user-avatar">
                  <Typography id="user-name" component="span">
                    OL
                  </Typography>
                </Box>
              </Box>
              <Box paddingLeft="12px">
                <Typography
                  sx={{
                    fontSize: "15px",
                    fontWeight: "700",
                    lineHeight: "24px",
                    color: "#242424",
                  }}
                >
                  Oanh Lương
                </Typography>
                <Typography sx={{ fontSize: "13px", color: "#808089" }}>
                  Đã tham gia 3 năm
                </Typography>
              </Box>
            </Box>
            <Box
              marginTop="12px"
              display="flex"
              alignItems="center"
              sx={{ img: { width: "20px", marginRight: "8px" } }}
            >
              <img src="/post-icon.png" />
              <Typography sx={{ fontSize: "13px", color: "#808089" }}>
                Đã viết: 7 Đánh giá
              </Typography>
            </Box>
            <Box
              marginTop="12px"
              display="flex"
              alignItems="center"
              sx={{ img: { width: "20px", marginRight: "8px" } }}
            >
              <img src="/like-icon.png" />
              <Typography sx={{ fontSize: "13px", color: "#808089" }}>
                Đã nhận: 1 Lượt cảm ơn
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={8}>
            <Box>
              <Box display="flex" alignItems="center">
                <Rating value={5} readOnly />
                <Typography
                  fontSize="15px"
                  sx={{
                    color: "#242424",
                    marginLeft: "12px",
                    fontWeight: "700",
                  }}
                >
                  Cực kì hài lòng
                </Typography>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                color="#00ab56"
                marginBottom="16px"
              >
                <CheckCircle fontSize="13" />
                <Typography marginLeft="5px" fontSize="13px">
                  Đã mua hàng
                </Typography>
              </Box>
            </Box>

            <Box>
              <Typography marginBottom="8px" fontSize="13px" color="#242424">
                Váy đẹp chuẩn size
              </Typography>

              <Box
                sx={{
                  maxWidth: "152px",
                  marginBottom: "5px",
                  img: { borderRadius: "5px" },
                }}
              >
                <img width="100%" src="/feedback.jpeg" />
              </Box>

              <Box display="flex" alignItems="center" marginBottom="8px">
                <CheckIcon fontSize="13px" sx={{ color: "#00ab56" }} />
                <Typography marginLeft="7px" fontSize="13px" color="#808089">
                  Đường may đẹp, chắc chắn
                </Typography>
              </Box>

              <Box
                marginBottom="2px"
                sx={{
                  color: "#808089",
                }}
              >
                <Typography fontSize="13px" component="span">
                  Màu: Kem
                </Typography>
                <span> - </span>
                <Typography fontSize="13px" component="span">
                  Kích thước: M
                </Typography>
              </Box>
              <Box
                marginBottom="16px"
                sx={{
                  color: "#808089",
                }}
              >
                <Typography fontSize="13px" component="span">
                  Đánh giá vào 1 tháng trước
                </Typography>
                <span> - </span>
                <Typography fontSize="13px" component="span">
                  Đã dùng 28 phút
                </Typography>
              </Box>
            </Box>

            <Box display="flex">
              <Button
                variant="outlined"
                size="large"
                sx={{
                  display: "flex",
                  padding: "8px 16px",
                  minWidth: "100px",
                  flexDirection: "row",
                  fontSize: "14px",
                  textTransform: "none",
                }}
                color="primary"
              >
                <ThumbUpOffAltOutlined
                  fontSize="14px"
                  sx={{ marginRight: "8px" }}
                />
                Hữu ích
              </Button>
              <Button
                size="large"
                sx={{
                  padding: "8px 16px",
                  minWidth: "100px",
                  fontSize: "14px",
                  textTransform: "none",
                }}
                color="primary"
              >
                Bình luận
              </Button>
              <Button
                size="large"
                sx={{
                  padding: "8px 16px",
                  minWidth: "100px",
                  fontSize: "14px",
                  textTransform: "none",
                }}
                color="primary"
              >
                Chia sẻ
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box padding="20px 48px" borderTop="1px solid rgb(242,242,242)">
        <Grid container>
          <Grid item xs={4}>
            <Box display="flex">
              <Box
                sx={{
                  "#user-avatar": {
                    position: "relative",
                    width: "48px",
                    height: "48px",
                    backgroundColor: "#f2f2f2",
                    borderRadius: "50%",
                  },
                  "#user-name": {
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    fontSize: "14px",
                    fontWeight: "500",
                  },
                }}
              >
                <Box id="user-avatar">
                  <Typography id="user-name" component="span">
                    NP
                  </Typography>
                </Box>
              </Box>
              <Box paddingLeft="12px">
                <Typography
                  sx={{
                    fontSize: "15px",
                    fontWeight: "700",
                    lineHeight: "24px",
                    color: "#242424",
                  }}
                >
                  Ngoc Phuong
                </Typography>
                <Typography sx={{ fontSize: "13px", color: "#808089" }}>
                  Đã tham gia 4 năm
                </Typography>
              </Box>
            </Box>
            <Box
              marginTop="12px"
              display="flex"
              alignItems="center"
              sx={{ img: { width: "20px", marginRight: "8px" } }}
            >
              <img src="/post-icon.png" />
              <Typography sx={{ fontSize: "13px", color: "#808089" }}>
                Đã viết: 97 Đánh giá
              </Typography>
            </Box>
            <Box
              marginTop="12px"
              display="flex"
              alignItems="center"
              sx={{ img: { width: "20px", marginRight: "8px" } }}
            >
              <img src="/like-icon.png" />
              <Typography sx={{ fontSize: "13px", color: "#808089" }}>
                Đã nhận: 2 Lượt cảm ơn
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={8}>
            <Box>
              <Box display="flex" alignItems="center">
                <Rating value={5} readOnly />
                <Typography
                  fontSize="15px"
                  sx={{
                    color: "#242424",
                    marginLeft: "12px",
                    fontWeight: "700",
                  }}
                >
                  Cực kì hài lòng
                </Typography>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                color="#00ab56"
                marginBottom="16px"
              >
                <CheckCircle fontSize="13" />
                <Typography marginLeft="5px" fontSize="13px">
                  Đã mua hàng
                </Typography>
              </Box>
            </Box>

            <Box>
              <Typography marginBottom="8px" fontSize="13px" color="#242424">
                ok, mặc vừa ý, đẹp
              </Typography>

              <Box
                marginBottom="2px"
                sx={{
                  color: "#808089",
                }}
              >
                <Typography fontSize="13px" component="span">
                  Màu: Kem
                </Typography>
                <span> - </span>
                <Typography fontSize="13px" component="span">
                  Kích thước: M
                </Typography>
              </Box>
              <Box
                marginBottom="16px"
                sx={{
                  color: "#808089",
                }}
              >
                <Typography fontSize="13px" component="span">
                  Đánh giá vào 2 tháng trước
                </Typography>
                <span> - </span>
                <Typography fontSize="13px" component="span">
                  Đã dùng 1 giờ
                </Typography>
              </Box>
            </Box>

            <Box display="flex">
              <Button
                variant="outlined"
                size="large"
                sx={{
                  display: "flex",
                  padding: "8px 16px",
                  minWidth: "100px",
                  flexDirection: "row",
                  fontSize: "14px",
                  textTransform: "none",
                }}
                color="primary"
              >
                <ThumbUpOffAltOutlined
                  fontSize="14px"
                  sx={{ marginRight: "8px" }}
                />
                Hữu ích
              </Button>
              <Button
                size="large"
                sx={{
                  padding: "8px 16px",
                  minWidth: "100px",
                  fontSize: "14px",
                  textTransform: "none",
                }}
                color="primary"
              >
                Bình luận
              </Button>
              <Button
                size="large"
                sx={{
                  padding: "8px 16px",
                  minWidth: "100px",
                  fontSize: "14px",
                  textTransform: "none",
                }}
                color="primary"
              >
                Chia sẻ
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
}

export default ProductReviews;
