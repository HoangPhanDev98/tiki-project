import React from "react";
import PropTypes from "prop-types";
import { Checkbox, FormControlLabel, Typography } from "@mui/material";
import { Box } from "@mui/system";

FilterByService.propTypes = {
  filters: PropTypes.object,
  onChange: PropTypes.func,
};

function FilterByService({ filters = {}, onChange = null }) {
  const handleChange = (e) => {
    if (!onChange) return;

    const { name, checked } = e.target;
    onChange({ [name]: checked });
  };

  return (
    <Box>
      <Typography fontSize="14px" fontWeight="bold" sx={{ padding: "12px 0" }}>
        Dịch Vụ
      </Typography>

      <Box
        sx={{
          ".MuiTypography-root": {
            fontSize: "12px",
          },
        }}
      >
        {[
          { value: "isPromotion", label: "Khuyến mãi" },
          { value: "isFreeShip", label: "Miễn phí giao hàng" },
        ].map((service) => (
          <Box key={service.value}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={Boolean(filters[service.value])}
                  onChange={handleChange}
                  name={service.value}
                  color="primary"
                />
              }
              label={service.label}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default FilterByService;
