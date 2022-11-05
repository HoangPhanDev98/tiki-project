import { CheckCircle, ThumbUpOffAltOutlined } from "@mui/icons-material";
import { Button, Grid, Paper, Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CheckIcon from "@mui/icons-material/Check";

ProductReviews.propTypes = {};

function ProductReviews(props) {
  return (
    <Paper elevation={0}>
      <Typography
        sx={{
          fontSize: { xs: "14px", md: "20px" },
          textAlign: { xs: "center", md: "left" },
        }}
        padding="8px 16px"
        fontWeight="400"
      >
        Đánh Giá - Nhận Xét Từ Khách Hàng
      </Typography>
      <Box sx={{ padding: { xs: "0 60px", md: "0 48px" } }}>
        <Grid container>
          <Grid item xs={12} md={4}>
            <Box
              display="flex"
              alignItems="center"
              sx={{ justifyContent: { xs: "center", md: "flex-start" } }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "20px", md: "32px" },
                  paddingRight: { xs: "8px", md: "16px" },
                }}
                fontWeight="700"
              >
                4.9
              </Typography>
              <Box>
                <Rating
                  value={5}
                  sx={{ fontSize: { xs: "14px", md: "24px" } }}
                  readOnly
                />
                <Typography
                  sx={{
                    fontSize: { xs: "10px", md: "13px" },
                  }}
                  color="#808089"
                >
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
                    justifyContent: { xs: "center" },
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
                <Rating
                  value={5}
                  sx={{
                    fontSize: { xs: "14px", md: "20px" },
                  }}
                  readOnly
                />
                <Box id="progress-bar"></Box>
                <Typography
                  sx={{
                    fontSize: { xs: "10px", md: "11px" },
                  }}
                  color="#808089"
                >
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
                <Rating
                  value={4}
                  sx={{
                    fontSize: { xs: "14px", md: "20px" },
                  }}
                  readOnly
                />
                <Box id="progress-bar"></Box>
                <Typography
                  sx={{
                    fontSize: { xs: "10px", md: "11px" },
                  }}
                  color="#808089"
                >
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
                <Rating
                  value={3}
                  sx={{
                    fontSize: { xs: "14px", md: "20px" },
                  }}
                  readOnly
                />
                <Box id="progress-bar"></Box>
                <Typography
                  sx={{
                    fontSize: { xs: "10px", md: "11px" },
                  }}
                  color="#808089"
                >
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
                <Rating
                  value={2}
                  sx={{
                    fontSize: { xs: "14px", md: "20px" },
                  }}
                  readOnly
                />
                <Box id="progress-bar"></Box>
                <Typography
                  sx={{
                    fontSize: { xs: "10px", md: "11px" },
                  }}
                  color="#808089"
                >
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
                <Rating
                  value={1}
                  sx={{
                    fontSize: { xs: "14px", md: "20px" },
                  }}
                  readOnly
                />
                <Box id="progress-bar"></Box>
                <Typography
                  sx={{
                    fontSize: { xs: "10px", md: "11px" },
                  }}
                  color="#808089"
                >
                  0
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            md={8}
            sx={{
              display: { xs: "none", md: "block" },
              paddingLeft: { md: "20px" },
            }}
          >
            <Box display="flex">
              <Box>
                <Typography>Đánh giá của khách đã mua hàng</Typography>
              </Box>
              <Box></Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{ padding: { xs: "10px", md: "20px 48px" } }}
        borderTop="1px solid rgb(242,242,242)"
      >
        <Grid container>
          <Grid item xs={4}>
            <Box display="flex">
              <Box
                sx={{
                  "#user-avatar": {
                    position: "relative",
                    width: { xs: "30px", md: "48px" },
                    height: { xs: "30px", md: "48px" },
                    backgroundColor: "#f2f2f2",
                    borderRadius: "50%",
                  },
                  "#user-name": {
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    fontSize: { xs: "10px", md: "14px" },
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
                    fontSize: { xs: "13px", md: "15px" },
                    fontWeight: "700",
                    lineHeight: { xs: "18px", md: "24px" },
                    color: "#242424",
                  }}
                >
                  Nguyễn Thị Vân Anh
                </Typography>
                <Typography
                  sx={{
                    paddingTop: { xs: "5px", md: "0px" },
                    fontSize: { xs: "11px", md: "13px" },
                    color: "#808089",
                  }}
                >
                  Đã tham gia 2 năm
                </Typography>
              </Box>
            </Box>
            <Box
              marginTop="12px"
              display="flex"
              alignItems="center"
              sx={{
                img: { width: { xs: "16px", md: "20px" }, marginRight: "8px" },
              }}
            >
              <img src="https://imagedelivery.net/0zXr_E37UKCFiaGSBm0NrA/8a1a4ba5-4794-49d4-b7c5-a6531d106500/public" />
              <Typography
                sx={{ fontSize: { xs: "11px", md: "13px" }, color: "#808089" }}
              >
                Đã viết: 48 Đánh giá
              </Typography>
            </Box>
            <Box
              marginTop="12px"
              display="flex"
              alignItems="center"
              sx={{
                img: { width: { xs: "16px", md: "20px" }, marginRight: "8px" },
              }}
            >
              <img src="https://imagedelivery.net/0zXr_E37UKCFiaGSBm0NrA/b9d93c22-c9ac-4baa-d6fd-8686dabaaa00/public" />
              <Typography
                sx={{ fontSize: { xs: "11px", md: "13px" }, color: "#808089" }}
              >
                Đã nhận: 0 Lượt cảm ơn
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={8} sx={{ paddingLeft: { xs: "10px", md: "0px" } }}>
            <Box>
              <Box display="flex" alignItems="center">
                <Rating
                  value={5}
                  sx={{ fontSize: { xs: "14px", md: "20px" } }}
                  readOnly
                />
                <Typography
                  sx={{
                    fontSize: { xs: "13px", md: "15px" },
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
                <CheckCircle sx={{ fontSize: { xs: "11px", md: "13px" } }} />
                <Typography
                  marginLeft="5px"
                  sx={{ fontSize: { xs: "11px", md: "13px" } }}
                >
                  Đã mua hàng
                </Typography>
              </Box>
            </Box>

            <Box>
              <Typography
                marginBottom="8px"
                sx={{ fontSize: { xs: "12px", md: "13px" }, color: "#242424" }}
              >
                Hài lòng. Dáng đẹp chuẩn form nhưng mình cao nên hơi cộc một
                chút
              </Typography>

              <Box display="flex" alignItems="center" marginBottom="8px">
                <CheckIcon
                  fontSize="13px"
                  sx={{
                    display: { xs: "none", md: "block" },

                    color: "#00ab56",
                  }}
                />
                <Typography
                  sx={{
                    marginLeft: { xs: "0", md: "7px" },
                    fontSize: { xs: "12px", md: "13px" },
                  }}
                  color="#808089"
                >
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
                <Typography
                  sx={{ fontSize: { xs: "12px", md: "13px" } }}
                  component="span"
                >
                  Màu: Kem
                </Typography>
                <span> - </span>
                <Typography
                  sx={{ fontSize: { xs: "12px", md: "13px" } }}
                  component="span"
                >
                  Kích thước: XL
                </Typography>
              </Box>
              <Box
                marginBottom="16px"
                sx={{
                  color: "#808089",
                }}
              >
                <Typography
                  sx={{ fontSize: { xs: "12px", md: "13px" } }}
                  component="span"
                >
                  Đánh giá vào 3 tháng trước
                </Typography>
                <span> - </span>
                <Typography
                  sx={{ fontSize: { xs: "12px", md: "13px" } }}
                  component="span"
                >
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
                  padding: { xs: "6px", md: "8px" },
                  minWidth: "100px",
                  flexDirection: "row",
                  fontSize: { xs: "12px", md: "14px" },
                  textTransform: "none",
                }}
                color="primary"
              >
                <ThumbUpOffAltOutlined
                  sx={{
                    fontSize: { xs: "12px", md: "14px" },
                    marginRight: { xs: "4px", md: "8px" },
                  }}
                />
                Hữu ích
              </Button>
              <Button
                size="large"
                sx={{
                  padding: { xs: "6px", md: "8px" },
                  minWidth: "100px",
                  fontSize: { xs: "12px", md: "14px" },
                  textTransform: "none",
                }}
                color="primary"
              >
                Bình luận
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{ padding: { xs: "10px", md: "20px 48px" } }}
        borderTop="1px solid rgb(242,242,242)"
      >
        <Grid container>
          <Grid item xs={4}>
            <Box display="flex">
              <Box
                sx={{
                  "#user-avatar": {
                    position: "relative",
                    width: { xs: "30px", md: "48px" },
                    height: { xs: "30px", md: "48px" },
                    backgroundColor: "#f2f2f2",
                    borderRadius: "50%",
                  },
                  "#user-name": {
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    fontSize: { xs: "10px", md: "14px" },
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
                    fontSize: { xs: "13px", md: "15px" },
                    fontWeight: "700",
                    lineHeight: { xs: "18px", md: "24px" },
                    color: "#242424",
                  }}
                >
                  Nguyễn Thị Vân Anh
                </Typography>
                <Typography
                  sx={{
                    paddingTop: { xs: "5px", md: "0px" },
                    fontSize: { xs: "11px", md: "13px" },
                    color: "#808089",
                  }}
                >
                  Đã tham gia 2 năm
                </Typography>
              </Box>
            </Box>
            <Box
              marginTop="12px"
              display="flex"
              alignItems="center"
              sx={{
                img: { width: { xs: "16px", md: "20px" }, marginRight: "8px" },
              }}
            >
              <img src="https://imagedelivery.net/0zXr_E37UKCFiaGSBm0NrA/8a1a4ba5-4794-49d4-b7c5-a6531d106500/public" />
              <Typography
                sx={{ fontSize: { xs: "11px", md: "13px" }, color: "#808089" }}
              >
                Đã viết: 48 Đánh giá
              </Typography>
            </Box>
            <Box
              marginTop="12px"
              display="flex"
              alignItems="center"
              sx={{
                img: { width: { xs: "16px", md: "20px" }, marginRight: "8px" },
              }}
            >
              <img src="https://imagedelivery.net/0zXr_E37UKCFiaGSBm0NrA/b9d93c22-c9ac-4baa-d6fd-8686dabaaa00/public" />
              <Typography
                sx={{ fontSize: { xs: "11px", md: "13px" }, color: "#808089" }}
              >
                Đã nhận: 0 Lượt cảm ơn
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={8} sx={{ paddingLeft: { xs: "10px", md: "0px" } }}>
            <Box>
              <Box display="flex" alignItems="center">
                <Rating
                  value={5}
                  sx={{ fontSize: { xs: "14px", md: "20px" } }}
                  readOnly
                />
                <Typography
                  sx={{
                    fontSize: { xs: "13px", md: "15px" },
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
                <CheckCircle sx={{ fontSize: { xs: "11px", md: "13px" } }} />
                <Typography
                  marginLeft="5px"
                  sx={{ fontSize: { xs: "11px", md: "13px" } }}
                >
                  Đã mua hàng
                </Typography>
              </Box>
            </Box>

            <Box>
              <Typography
                marginBottom="8px"
                sx={{ fontSize: { xs: "12px", md: "13px" }, color: "#242424" }}
              >
                Hài lòng. Dáng đẹp chuẩn form nhưng mình cao nên hơi cộc một
                chút
              </Typography>

              <Box display="flex" alignItems="center" marginBottom="8px">
                <CheckIcon
                  fontSize="13px"
                  sx={{
                    display: { xs: "none", md: "block" },

                    color: "#00ab56",
                  }}
                />
                <Typography
                  sx={{
                    marginLeft: { xs: "0", md: "7px" },
                    fontSize: { xs: "12px", md: "13px" },
                  }}
                  color="#808089"
                >
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
                <Typography
                  sx={{ fontSize: { xs: "12px", md: "13px" } }}
                  component="span"
                >
                  Màu: Kem
                </Typography>
                <span> - </span>
                <Typography
                  sx={{ fontSize: { xs: "12px", md: "13px" } }}
                  component="span"
                >
                  Kích thước: XL
                </Typography>
              </Box>
              <Box
                marginBottom="16px"
                sx={{
                  color: "#808089",
                }}
              >
                <Typography
                  sx={{ fontSize: { xs: "12px", md: "13px" } }}
                  component="span"
                >
                  Đánh giá vào 3 tháng trước
                </Typography>
                <span> - </span>
                <Typography
                  sx={{ fontSize: { xs: "12px", md: "13px" } }}
                  component="span"
                >
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
                  padding: { xs: "6px", md: "8px" },
                  minWidth: "100px",
                  flexDirection: "row",
                  fontSize: { xs: "12px", md: "14px" },
                  textTransform: "none",
                }}
                color="primary"
              >
                <ThumbUpOffAltOutlined
                  sx={{
                    fontSize: { xs: "12px", md: "14px" },
                    marginRight: { xs: "4px", md: "8px" },
                  }}
                />
                Hữu ích
              </Button>
              <Button
                size="large"
                sx={{
                  padding: { xs: "6px", md: "8px" },
                  minWidth: "100px",
                  fontSize: { xs: "12px", md: "14px" },
                  textTransform: "none",
                }}
                color="primary"
              >
                Bình luận
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{ padding: { xs: "10px", md: "20px 48px" } }}
        borderTop="1px solid rgb(242,242,242)"
      >
        <Grid container>
          <Grid item xs={4}>
            <Box display="flex">
              <Box
                sx={{
                  "#user-avatar": {
                    position: "relative",
                    width: { xs: "30px", md: "48px" },
                    height: { xs: "30px", md: "48px" },
                    backgroundColor: "#f2f2f2",
                    borderRadius: "50%",
                  },
                  "#user-name": {
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    fontSize: { xs: "10px", md: "14px" },
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
                    fontSize: { xs: "13px", md: "15px" },
                    fontWeight: "700",
                    lineHeight: { xs: "18px", md: "24px" },
                    color: "#242424",
                  }}
                >
                  Nguyễn Thị Vân Anh
                </Typography>
                <Typography
                  sx={{
                    paddingTop: { xs: "5px", md: "0px" },
                    fontSize: { xs: "11px", md: "13px" },
                    color: "#808089",
                  }}
                >
                  Đã tham gia 2 năm
                </Typography>
              </Box>
            </Box>
            <Box
              marginTop="12px"
              display="flex"
              alignItems="center"
              sx={{
                img: { width: { xs: "16px", md: "20px" }, marginRight: "8px" },
              }}
            >
              <img src="https://imagedelivery.net/0zXr_E37UKCFiaGSBm0NrA/8a1a4ba5-4794-49d4-b7c5-a6531d106500/public" />
              <Typography
                sx={{ fontSize: { xs: "11px", md: "13px" }, color: "#808089" }}
              >
                Đã viết: 48 Đánh giá
              </Typography>
            </Box>
            <Box
              marginTop="12px"
              display="flex"
              alignItems="center"
              sx={{
                img: { width: { xs: "16px", md: "20px" }, marginRight: "8px" },
              }}
            >
              <img src="https://imagedelivery.net/0zXr_E37UKCFiaGSBm0NrA/b9d93c22-c9ac-4baa-d6fd-8686dabaaa00/public" />
              <Typography
                sx={{ fontSize: { xs: "11px", md: "13px" }, color: "#808089" }}
              >
                Đã nhận: 0 Lượt cảm ơn
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={8} sx={{ paddingLeft: { xs: "10px", md: "0px" } }}>
            <Box>
              <Box display="flex" alignItems="center">
                <Rating
                  value={5}
                  sx={{ fontSize: { xs: "14px", md: "20px" } }}
                  readOnly
                />
                <Typography
                  sx={{
                    fontSize: { xs: "13px", md: "15px" },
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
                <CheckCircle sx={{ fontSize: { xs: "11px", md: "13px" } }} />
                <Typography
                  marginLeft="5px"
                  sx={{ fontSize: { xs: "11px", md: "13px" } }}
                >
                  Đã mua hàng
                </Typography>
              </Box>
            </Box>

            <Box>
              <Typography
                marginBottom="8px"
                sx={{ fontSize: { xs: "12px", md: "13px" }, color: "#242424" }}
              >
                Hài lòng. Dáng đẹp chuẩn form nhưng mình cao nên hơi cộc một
                chút
              </Typography>

              <Box display="flex" alignItems="center" marginBottom="8px">
                <CheckIcon
                  fontSize="13px"
                  sx={{
                    display: { xs: "none", md: "block" },

                    color: "#00ab56",
                  }}
                />
                <Typography
                  sx={{
                    marginLeft: { xs: "0", md: "7px" },
                    fontSize: { xs: "12px", md: "13px" },
                  }}
                  color="#808089"
                >
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
                <Typography
                  sx={{ fontSize: { xs: "12px", md: "13px" } }}
                  component="span"
                >
                  Màu: Kem
                </Typography>
                <span> - </span>
                <Typography
                  sx={{ fontSize: { xs: "12px", md: "13px" } }}
                  component="span"
                >
                  Kích thước: XL
                </Typography>
              </Box>
              <Box
                marginBottom="16px"
                sx={{
                  color: "#808089",
                }}
              >
                <Typography
                  sx={{ fontSize: { xs: "12px", md: "13px" } }}
                  component="span"
                >
                  Đánh giá vào 3 tháng trước
                </Typography>
                <span> - </span>
                <Typography
                  sx={{ fontSize: { xs: "12px", md: "13px" } }}
                  component="span"
                >
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
                  padding: { xs: "6px", md: "8px" },
                  minWidth: "100px",
                  flexDirection: "row",
                  fontSize: { xs: "12px", md: "14px" },
                  textTransform: "none",
                }}
                color="primary"
              >
                <ThumbUpOffAltOutlined
                  sx={{
                    fontSize: { xs: "12px", md: "14px" },
                    marginRight: { xs: "4px", md: "8px" },
                  }}
                />
                Hữu ích
              </Button>
              <Button
                size="large"
                sx={{
                  padding: { xs: "6px", md: "8px" },
                  minWidth: "100px",
                  fontSize: { xs: "12px", md: "14px" },
                  textTransform: "none",
                }}
                color="primary"
              >
                Bình luận
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
}

export default ProductReviews;
