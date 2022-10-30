import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Link,
  TextField,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import { useState } from "react";
import Register from "../form-control/Register";
import SearchForm from "../form-control/SearchForm";

Header.propTypes = {};

function Header(props) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Box
        sx={{
          position: "relative",
          background: "#1a94ff",
          zIndex: "999",
        }}
      >
        {/* Top */}
        <Box sx={{ width: "1270px", margin: "0 auto", padding: "0 15px" }}>
          <Box
            sx={{
              display: "flex",
              padding: "16px 0px 10px",
              height: "auto",
              position: "relative",
              zIndex: "2",
              alignItems: "center",
            }}
          >
            <Box sx={{ display: "flex", flex: "1 1 0%", alignItems: "center" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  flexBasis: "190px",
                  flexShrink: "0",
                  marginRight: "16px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    flex: "1 1 0%",
                  }}
                >
                  <Link
                    sx={{
                      width: "60px",
                      height: "40px",
                      display: "block",
                      "&>img": { width: "100%", height: "100%" },
                    }}
                  >
                    <img src="logo-tiki.png" alt="Tiki" />
                  </Link>
                </Box>
              </Box>
              <Box
                sx={{
                  flex: "1 1 0%",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    position: "relative",
                    boxShadow: "rgb(98 98 98 / 50%) 0px 1px 2px 0px",
                    ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    },
                    ".css-md26zr-MuiInputBase-root-MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                      {
                        border: "none",
                      },
                    "&>form": {
                      display: "flex",
                      "&>div": { margin: "0" },
                      "&>div>div>input": {
                        backgroundColor: "white",
                        minWidth: "600px",
                        padding: "0 12px",
                        height: "40px",
                      },
                      "&>button": {
                        height: "40px",
                        padding: "0",
                        fontSize: "13px",
                        width: "120px",
                        backgroundColor: "#0d5cb6",
                        textTransform: "capitalize",
                      },
                    },
                  }}
                >
                  <SearchForm />
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <Box
                sx={{
                  cursor: "pointer",
                  margin: "0 0 0 16px",
                  alignItems: "center",
                  display: "flex",
                  color: "rgb(255,255,255)",
                  fontSize: "12px",
                  position: "relative",
                  width: "162px",
                  "&>img": {
                    width: "32px",
                    height: "32px",
                    marginRight: "8px",
                    borderRadius: "2px",
                  },
                }}
              >
                <img src="user-icon.png" alt="User Icon" />
                <Box
                  component="span"
                  sx={{
                    color: "white",
                    fontWeight: "400",
                    whiteSpace: "nowrap",
                    display: "flex",
                    flexDirection: "column",
                  }}
                  onClick={handleClickOpen}
                >
                  <Box
                    components="span"
                    sx={{
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                      display: "inline-block",
                      overflow: "hidden",
                      textTransform: "capitalize",
                      fontSize: "11px",
                      lineHeight: "16px",
                    }}
                  >
                    Đăng Nhập / Đăng Ký
                  </Box>
                  <Box
                    components="span"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      fontSize: "13px",
                      lineHeight: "20px",
                      minWidth: "120px",
                    }}
                  >
                    <Box
                      component="span"
                      sx={{
                        maxWidth: "104px",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                      }}
                    >
                      Tài khoản
                    </Box>
                    <Box
                      component="img"
                      src="arrow-icon.png"
                      sx={{ width: "16px", height: "16px" }}
                    />
                  </Box>
                </Box>
              </Box>

              <Box sx={{ position: "relative" }}>
                <Link>
                  <Box
                    sx={{
                      alignItems: "flex-end",
                      width: "94px",
                      display: "flex",
                      cursor: "pointer",
                      marginLeft: "16px",
                    }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        marginRight: "8px",
                        display: "flex",
                      }}
                    >
                      <Box
                        component="img"
                        src="cart-icon.png"
                        sx={{ width: "32px", height: "32px" }}
                      />
                      <Box
                        component="span"
                        sx={{
                          color: "rgb(36,36,36)",
                          background: "rgb(253,216,53)",
                          height: "20px",
                          left: "20px",
                          top: "-2px",
                          borderRadius: "40px",
                          display: "inline-block",
                          textAlign: "center",
                          lineHeight: "20px",
                          fontSize: "13px",
                          fontWeight: "500",
                          position: "absolute",
                          padding: "0 7px",
                        }}
                      >
                        0
                      </Box>
                    </Box>
                    <Box
                      component="span"
                      sx={{ color: "#fff", fontSize: "12px" }}
                    >
                      Giỏ hàng
                    </Box>
                  </Box>
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Bottom */}
        <Box sx={{ position: "relative", zIndex: "1" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "1270px",
              padding: "0 15px",
              margin: "0 auto",
            }}
          >
            <Box component="a" sx={{ position: "absolute" }}>
              <Box
                component="img"
                src="astra-rewards.png"
                alt="astra-rewards"
                height="18px"
                width="129px"
              ></Box>
            </Box>
            <Box
              sx={{
                marginLeft: "206px",
                display: "flex",
                alignItems: "flex-start",
                a: {
                  display: "block",
                  fontSize: "11px",
                  lineHeight: "16px",
                  color: "white",
                  marginRight: "12px",
                },
              }}
            >
              <Box component="a">trái cây</Box>
              <Box component="a">thịt, trứng</Box>
              <Box component="a">rau củ quả</Box>
              <Box component="a">sữa, bơ, phô mai</Box>
              <Box component="a">hải sản</Box>
              <Box component="a">gạo, mì ăn liền</Box>
              <Box component="a">đồ uống, bia rượu</Box>
              <Box component="a">bánh kẹo</Box>
            </Box>
            <Box
              component="a"
              sx={{
                color: "white",
                fontSize: "12px",
                marginBottom: "12px",
                height: "22px",
                borderRadius: "10px",
                backgroundColor: "rgb(255,255,255,0.25)",
                padding: "0 8px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                height="12px"
                width="12px"
                marginRight="4px"
                src="https://frontend.tikicdn.com/_desktop-next/static/img/icon-seller.svg"
              />
              <Box component="span">Bán hàng cùng Tiki</Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <Register />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Header;
