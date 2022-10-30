import React from "react";
import PropTypes from "prop-types";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Avatar, Button, Typography } from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import InputField from "../InputField";
import { Box } from "@mui/system";

RegisterForm.propTypes = {};

function RegisterForm(props) {
  const schema = yup.object().shape({});
  const form = useForm({
    defaultValues: {},
    reValidateMode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box
      sx={{
        display: "flex",
        background: "rgb(248,248,248)",
        borderRadius: "20px",
      }}
    >
      <Box sx={{ width: "500px" }}>
        <Typography component="h3" variant="h5">
          Create An Account
        </Typography>

        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <InputField
            name="fullName"
            label="Full Name"
            form={form}
          ></InputField>
          <InputField name="email" label="Email" form={form}></InputField>
          {/* <PasswordField name="password" label="Password" form={form}></PasswordField> */}
          {/* <PasswordField name="retypePassword" label="Retype Password" form={form}></PasswordField> */}

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            size="large"
          >
            Create an account
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
        <Box component="img" src="register-img.png" width="209px"></Box>
        <Typography>Mua sắm tại Tiki</Typography>
      </Box>
    </Box>
  );
}

export default RegisterForm;
