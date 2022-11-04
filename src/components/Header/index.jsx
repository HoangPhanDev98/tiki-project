import { MenuOutlined } from "@mui/icons-material";
import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  Grid,
  Link,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Login from "../../features/Auth/components/Login";
import Register from "../../features/Auth/components/Register";
import { logout } from "../../features/Auth/userSlice";
import { cartItemsCountSelector } from "../../features/Cart/selectors";
import SearchForm from "../form-control/SearchForm";

Header.propTypes = {};

const MODE = {
  LOGIN: "login",
  REGISTER: "register",
};

function Header(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState(MODE.LOGIN);
  const loggedInUser = useSelector((state) => state.user.current);
  const isLoggedIn = !!loggedInUser.id;
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const cartItemsCount = useSelector(cartItemsCountSelector);

  const handleOpenNavMenu = (e) => {
    setAnchorElNav(e.currentTarget);
  };

  const handleOpenUserMenu = (e) => {
    setAnchorElUser(e.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogoutClick = () => {
    const action = logout();
    dispatch(action);
    setAnchorEl(null);
  };

  const handleCartClick = () => {
    navigate("/gio-hang");
  };

  return (
    <Box
      sx={{
        background: "#1a94ff",
        position: { xs: "fixed", md: "relative" },
        width: "100%",
        zIndex: "9999",
      }}
    >
      <Container
        sx={{
          position: "relative",
          zIndex: "999",
        }}
      >
        {/* Top */}
        <Box>
          <Grid
            container
            sx={{
              display: "flex",
              padding: { xs: "10px 0", md: "16px 0px 10px" },
              height: "auto",
              position: "relative",
              zIndex: "2",
              alignItems: "center",
            }}
          >
            <Grid
              item
              xs={8}
              md={9}
              lg={9}
              xl={9}
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Grid
                xs={6}
                sx={{
                  display: { xs: "flex", md: "none" },
                  color: "white",
                  alignContent: "center",
                }}
              >
                <MenuOutlined
                  sx={{ cursor: "pointer" }}
                  onClick={handleOpenNavMenu}
                />
              </Grid>
              <Grid
                item
                xs={6}
                md={3}
                lg={3}
                xl={3}
                sx={{
                  display: { xs: "block", md: "flex" },
                  alignItems: "flex-center",
                  marginRight: { xs: "0", lg: "16px" },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: { xs: "center", md: "space-between" },
                  }}
                >
                  <Link
                    sx={{
                      width: { xs: "50px", md: "60px" },
                      height: { xs: "33.3px", md: "40px" },
                      display: "block",
                      "&>img": { width: "100%", height: "100%" },
                    }}
                    href="/"
                  >
                    <img src="logo-tiki.png" alt="Tiki" />
                  </Link>
                </Box>
              </Grid>

              <Grid
                item
                md={9}
                lg={9}
                xl={9}
                sx={{ display: { xs: "none", md: "block" } }}
              >
                <Box
                  sx={{
                    width: "100%",
                    position: "relative",
                    // boxShadow: "rgb(98 98 98 / 50%) 0px 1px 2px 0px",
                    ".css-1d3z3hw-MuiOutlinedInput-notchedOutline, .css-igs3ac":
                      {
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
                        maxWidth: "100%",
                        padding: "0 12px",
                        height: "40px",
                        fontSize: {
                          md: "12px",
                          lg: "16px",
                        },
                        "&::placeholder": {
                          fontSize: {
                            md: "12px",
                            lg: "16px",
                          },
                        },
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
              </Grid>
            </Grid>

            <Grid
              item
              xs={4}
              md={3}
              lg={3}
              xl={3}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <Grid
                item
                xl={6}
                sx={{
                  cursor: "pointer",
                  margin: "0 0 0 16px",
                  alignItems: "center",
                  display: { xs: "none", md: "flex" },
                  color: "rgb(255,255,255)",
                  fontSize: { md: "11px", lg: "12px" },
                  position: "relative",
                  width: { md: "100%", lg: "162px" },
                  "&>img": {
                    width: { md: "24px", lg: "32px" },
                    height: { md: "24px", lg: "32px" },
                    marginRight: { md: "4px", lg: "8px" },
                    borderRadius: "2px",
                  },
                }}
              >
                <img src="user-icon.png" alt="User Icon" />
                {!isLoggedIn && (
                  <Box
                    component="span"
                    sx={{
                      color: "white",
                      fontWeight: "400",
                      whiteSpace: "nowrap",
                      display: "flex",
                      flexDirection: "column",
                    }}
                    onClick={handleOpenUserMenu}
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
                        sx={{
                          width: { xs: "10px", lg: "16px" },
                          height: { xs: "10px", lg: "16px" },
                        }}
                      />
                    </Box>
                  </Box>
                )}

                {isLoggedIn && (
                  <Box onClick={handleUserClick}>
                    <Typography variant="h7">Chào, Hoàng</Typography>
                  </Box>
                )}
              </Grid>

              <Grid
                item
                xl={6}
                sx={{ position: "relative" }}
                onClick={handleCartClick}
              >
                <Link>
                  <Box
                    sx={{
                      alignItems: "flex-end",
                      width: { xs: "0", md: "40px", lg: "94px" },
                      display: "flex",
                      cursor: "pointer",
                      marginLeft: { xs: "10px", lg: "16px" },
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
                        sx={{
                          width: "32px",
                          height: "32px",
                        }}
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
                        {cartItemsCount}
                      </Box>
                    </Box>
                    <Box
                      component="span"
                      sx={{
                        display: { xs: "none", lg: "block" },
                        color: "#fff",
                        fontSize: "12px",
                      }}
                    >
                      Giỏ hàng
                    </Box>
                  </Box>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Box>

        {/* Bottom */}
        <Box
          sx={{
            position: "relative",
            zIndex: "1",
            display: { xs: "none", md: "block" },
          }}
        >
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Grid md={9} lg={9} xl={9} item display="flex">
              <Grid md={3} lg={3} item component="a">
                <Box
                  component="img"
                  src="astra-rewards.png"
                  alt="astra-rewards"
                  height="18px"
                  width="129px"
                ></Box>
              </Grid>
              <Grid
                md={9}
                lg={9}
                item
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  paddingLeft: { md: "0px", xl: "12px" },
                  a: {
                    display: "block",
                    fontSize: { md: "10px", lg: "11px" },
                    lineHeight: "16px",
                    color: "white",
                    marginRight: { md: "8px", lg: "12px" },
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
              </Grid>
            </Grid>

            <Grid
              md={3}
              lg={3}
              item
              component="a"
              sx={{
                color: "white",
                fontSize: "12px",
                marginBottom: "12px",
                height: "22px",
                borderRadius: "10px",
                padding: "0 8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
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
            </Grid>
          </Grid>
        </Box>
      </Container>

      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: "block", md: "none", zIndex: "999999" },
        }}
      >
        <MenuItem onClick={handleCloseNavMenu}>Tìm kiếm</MenuItem>
        <MenuItem onClick={handleCloseNavMenu}>Đăng Nhập / Đăng Ký</MenuItem>
      </Menu>

      <Menu
        keepMounted
        anchorEl={anchorElUser}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
        sx={{
          zIndex: "99999",
        }}
      >
        <MenuItem onClick={handleCloseUserMenu}>Thông tin tài khoản</MenuItem>
        <MenuItem onClick={handleLogoutClick}>Đăng xuất</MenuItem>
      </Menu>

      <Dialog
        open={open}
        onClose={handleClose}
        sx={{
          ".css-1t1j96h-MuiPaper-root-MuiDialog-paper": {
            maxWidth: "800px",
            "&>div": { padding: "0" },
          },
        }}
      >
        <DialogContent>
          {mode === MODE.REGISTER && (
            <>
              <Register closeDialog={handleClose} />
              <Box textAlign="center">
                <Button color="primary" onClick={() => setMode(MODE.LOGIN)}>
                  Bạn đã có tài khoản? Đăng nhập tại đây
                </Button>
              </Box>
            </>
          )}

          {mode === MODE.LOGIN && (
            <>
              <Login closeDialog={handleClose} />
              <Box textAlign="center">
                <Button color="primary" onClick={() => setMode(MODE.REGISTER)}>
                  Bạn chưa có tài khoản? Đăng ký tại đây
                </Button>
              </Box>
            </>
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
}

export default Header;
