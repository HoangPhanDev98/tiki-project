import { MenuOutlined, PersonOutlineOutlined } from "@mui/icons-material";
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
  const cartItemsCount = useSelector(cartItemsCountSelector);
  const handleOpenRegister = () => {
    setOpen(true);
  };

  const handleOpenUserMenu = (e) => {
    setAnchorElUser(e.currentTarget);
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

  const handleLogoClick = () => {
    navigate("/");
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
                item
                xs={6}
                sx={{
                  display: { xs: "flex", md: "none" },
                  color: "white",
                  alignContent: "center",
                  img: { width: "90px" },
                }}
              >
                <img src="https://salt.tikicdn.com/ts/brickv2og/db/eb/7c/a926af0ba3dc2802148bfc39563180c2.png" />
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
                      cursor: "pointer",
                      width: { xs: "50px", md: "60px" },
                      height: { xs: "33.3px", md: "40px" },
                      display: "block",
                      "&>img": { width: "100%", height: "100%" },
                    }}
                  >
                    <img
                      src="https://imagedelivery.net/0zXr_E37UKCFiaGSBm0NrA/6be3f2bd-a49f-4b22-f07a-d0b23e69f500/public"
                      alt="Tiki"
                      onClick={handleLogoClick}
                    />
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
                          lg: "13px",
                        },
                        "&::placeholder": {
                          fontSize: {
                            md: "12px",
                            lg: "13px",
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
                <img
                  src="https://imagedelivery.net/0zXr_E37UKCFiaGSBm0NrA/65bf894d-41ea-48ca-c72b-907116e38a00/public"
                  alt="User Icon"
                />
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
                    onClick={handleOpenRegister}
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
                      ????ng Nh???p / ????ng K??
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
                        T??i kho???n
                      </Box>
                      <Box
                        component="img"
                        src="https://imagedelivery.net/0zXr_E37UKCFiaGSBm0NrA/81301a91-7e8f-42c3-f32d-53ea75b85300/public"
                        sx={{
                          width: { xs: "10px", lg: "16px" },
                          height: { xs: "10px", lg: "16px" },
                        }}
                      />
                    </Box>
                  </Box>
                )}

                {isLoggedIn && (
                  <Box onClick={handleOpenUserMenu}>
                    <Typography variant="h7">Ch??o, Ho??ng</Typography>
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
                        src="https://imagedelivery.net/0zXr_E37UKCFiaGSBm0NrA/c45dc758-9ab2-4b55-cbb9-8b0fb01ac300/public"
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
                      Gi??? h??ng
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
                  src="https://imagedelivery.net/0zXr_E37UKCFiaGSBm0NrA/0bfd6e00-4c5b-4436-4270-e32ded890e00/public"
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
                  paddingLeft: { md: "0px", lg: "12px" },
                  a: {
                    display: "block",
                    fontSize: { md: "10px", lg: "11px" },
                    lineHeight: "16px",
                    color: "white",
                    marginRight: { md: "8px", lg: "12px" },
                  },
                }}
              >
                <Box component="a">tr??i c??y</Box>
                <Box component="a">th???t, tr???ng</Box>
                <Box component="a">rau c??? qu???</Box>
                <Box component="a">s???a, b??, ph?? mai</Box>
                <Box component="a">h???i s???n</Box>
                <Box component="a">g???o, m?? ??n li???n</Box>
                <Box component="a">????? u???ng, bia r?????u</Box>
                <Box component="a">b??nh k???o</Box>
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
              <Box component="span">B??n h??ng c??ng Tiki</Box>
            </Grid>
          </Grid>
        </Box>
      </Container>

      <Menu
        keepMounted
        anchorEl={anchorElUser}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
        sx={{
          zIndex: "99999",
        }}
      >
        <MenuItem onClick={handleCloseUserMenu}>Th??ng tin t??i kho???n</MenuItem>
        <MenuItem onClick={handleLogoutClick}>????ng xu???t</MenuItem>
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
                  B???n ???? c?? t??i kho???n? ????ng nh???p t???i ????y
                </Button>
              </Box>
            </>
          )}

          {mode === MODE.LOGIN && (
            <>
              <Login closeDialog={handleClose} />
              <Box textAlign="center">
                <Button color="primary" onClick={() => setMode(MODE.REGISTER)}>
                  B???n ch??a c?? t??i kho???n? ????ng k?? t???i ????y
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
