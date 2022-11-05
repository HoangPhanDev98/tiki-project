import { yupResolver } from "@hookform/resolvers/yup";
import { Button, LinearProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import InputField from "../../../../components/form-control/InputField";
import PasswordField from "../../../../components/form-control/PasswordField";
import PropTypes from "prop-types";

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

function RegisterForm(props) {
  const schema = yup.object().shape({
    fullName: yup
      .string()
      .required("Vui lòng điền họ và tên")
      .test("Bao gồm 2 từ", "Điền chính xác họ và tên", (value) => {
        return value.split(" ").length >= 2;
      }),
    email: yup
      .string()
      .required("Vui lòng điền email")
      .email("Vui lòng điền chính xác email"),
    password: yup
      .string()
      .required("Vui lòng điền mật khẩu")
      .min(6, "Mật khẩu có ít nhất 6 kí tự"),
    retypePassword: yup
      .string()
      .required("Vui lòng điền lại mật khẩu")
      .oneOf([yup.ref("password")], "Mật khẩu không chính xác"),
  });

  const form = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      retypePassword: "",
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
            name="fullName"
            placeholder="Họ và tên"
            form={form}
          ></InputField>
          <InputField name="email" placeholder="Email" form={form}></InputField>
          <PasswordField
            name="password"
            placeholder="Mật khẩu"
            form={form}
          ></PasswordField>
          <PasswordField
            name="retypePassword"
            placeholder="Nhập lại mật khẩu"
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
            Tạo tài khoản
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

export default RegisterForm;
