import { yupResolver } from "@hookform/resolvers/yup";
import { LockOutlined } from "@mui/icons-material";
import { Avatar, Box, LinearProgress, Typography } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Button from "@mui/material/Button";
import InputField from "../../../../components/form-control/InputField";
import PasswordField from "../../../../components/form-control/PasswordField";

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};

function LoginForm(props) {
  const schema = yup
    .object()
    .shape({
      identifier: yup
        .string()
        .required("Vui lòng điền email")
        .email("Vui lòng điền chính xác email"),

      password: yup.string().required("Vui lòng nhập mật khẩu"),
    })
    .required();

  const form = useForm({
    defaultValues: {
      identifier: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      await onSubmit(values);
    }
  };

  const { isSubmitting } = form.formState;
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Box
        sx={{
          padding: "40px",
          width: "500px",
          "&>form>button": { marginTop: "10px" },
        }}
      >
        {isSubmitting && <LinearProgress />}

        <Typography
          component="h3"
          variant="h5"
          fontWeight="bold"
          sx={{ marginY: "10px" }}
        >
          Xin chào,
        </Typography>
        <Typography component="h5" variant="h7">
          Đăng nhập hoặc Đăng ký
        </Typography>

        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <InputField
            name="identifier"
            placeholder="Email"
            form={form}
          ></InputField>
          <PasswordField
            name="password"
            placeholder="Mật khẩu"
            form={form}
          ></PasswordField>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            size="large"
            disabled={isSubmitting}
          >
            Đăng Nhập
          </Button>
        </form>
      </Box>
      <Box
        sx={{
          width: "300px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          background:
            "linear-gradient(136deg, rgb(240, 248, 255) -1%, rgb(219, 238, 255) 85%)",
        }}
      >
        <Box
          component="img"
          src="https://imagedelivery.net/0zXr_E37UKCFiaGSBm0NrA/66dd9188-a7fa-45cb-dfd6-c33775dfd700/public"
          width="209px"
        ></Box>
        <Box sx={{ marginTop: "15px", textAlign: "center", color: "#0B74E5" }}>
          <Typography sx={{ fontSize: "17px" }}>Mua sắm tại Tiki</Typography>
          <Typography sx={{ fontSize: "13px" }}>
            Siêu ưu đãi mỗi ngày
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default LoginForm;
