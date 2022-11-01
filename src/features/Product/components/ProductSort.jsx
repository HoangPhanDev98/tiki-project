import React from "react";
import PropTypes from "prop-types";
import { Pagination, Paper, Tab, Tabs } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import queryString from "query-string";

ProductSort.propTypes = {
  currentSort: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  pagination: PropTypes.object,
  queryParams: PropTypes.object,
};

function ProductSort({
  currentSort = {},
  onChange = null,
  pagination = {},
  queryParams = {},
}) {
  const navigate = useNavigate();
  const handleSortChange = (event, newValue) => {
    if (onChange) onChange(newValue);
  };

  const handlePageChange = (e, page) => {
    const filters = {
      ...queryParams,
      _page: page,
    };

    navigate({
      pathname: location.pathname,
      search: queryString.stringify(filters),
    });
  };

  return (
    <Box sx={{ paddingX: "8px" }}>
      <Paper
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Tabs
          value={currentSort}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleSortChange}
          sx={{
            paddingLeft: "15px",
            paddingBottom: "15px",
            borderBottom: "1px solid #f2f2f2",
            button: {
              color: "#242424",
              fontWeight: "400",
              textTransform: "none",
            },
            "button:hover": {
              color: "#0b74e5",
              fontWeight: "500",
            },
          }}
        >
          <Tab label="Giá thấp đến cao" value="salePrice:ASC" />
          <Tab label="Giá cao xuống thấp" value="salePrice:DESC" />
        </Tabs>

        <Box sx={{ padding: "0 15px 15px 0" }}>
          <Pagination
            count={Math.ceil(pagination.total / pagination.limit)}
            page={pagination.page}
            color="primary"
            onChange={handlePageChange}
          />
        </Box>
      </Paper>
    </Box>
  );
}

export default ProductSort;
