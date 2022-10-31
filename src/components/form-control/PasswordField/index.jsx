import { Visibility, VisibilityOff } from "@mui/icons-material";
import { FormHelperText } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";

import PropTypes from "prop-types";
import React, { useState } from "react";
import { Controller } from "react-hook-form";

PasswordField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  placeholder: PropTypes.string,
  disable: PropTypes.bool,
};

function PasswordField(props) {
  const { form, name, placeholder } = props;
  const { control } = form;

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <Controller
        name={name}
        control={control}
        render={({
          field: { onChange, onBlur, value, name },
          fieldState: { invalid, isTouched, error },
        }) => (
          <>
            <FormControl
              error={isTouched && invalid}
              margin="normal"
              variant="outlined"
              fullWidth
            >
              <OutlinedInput
                id={name}
                error={invalid}
                type={showPassword ? "text" : "password"}
                placeholder={placeholder}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={toggleShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                value={value}
                onBlur={onBlur}
                onChange={onChange}
              />
            </FormControl>
            <FormHelperText error={invalid}>{error?.message}</FormHelperText>
          </>
        )}
      />
    </div>
  );
}

export default PasswordField;
