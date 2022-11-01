import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/system";
import { Button, TextField, Typography } from "@mui/material";

FilterByPrice.propTypes = {
  onChange: PropTypes.func,
};

function FilterByPrice({ onChange = null }) {
  const [values, setValues] = useState({
    salePrice_gte: 0,
    salePrice_lte: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("ok");
    if (onChange) onChange(values);
  };

  return (
    <Box>
      <Typography fontSize="14px" fontWeight="bold" sx={{ padding: "12px 0" }}>
        Giá
      </Typography>

      <Box
        sx={{
          marginBottom: "14px",
          span: { marginX: "10px" },
        }}
      >
        <Typography
          sx={{ fontSize: "12px", marginTop: "4px", paddingBottom: "8px" }}
        >
          Chọn khoảng giá
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <TextField
            name="salePrice_gte"
            value={values.salePrice_gte}
            onChange={handleChange}
            variant="standard"
          />
          <span>-</span>
          <TextField
            name="salePrice_lte"
            value={values.salePrice_lte}
            onChange={handleChange}
            variant="standard"
          />
        </Box>
      </Box>
      <Button onClick={handleSubmit} variant="outlined" color="primary">
        Áp dụng
      </Button>
    </Box>
  );
}

export default FilterByPrice;
