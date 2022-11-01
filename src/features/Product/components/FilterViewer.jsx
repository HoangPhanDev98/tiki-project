import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/system";
import { Chip, Paper } from "@mui/material";

FilterViewer.propTypes = {
  filters: PropTypes.object,
  onChange: PropTypes.func,
};

const FILTER_LIST = [
  {
    id: 1,
    getLabel: () => "Miễn phí giao hàng",
    isActive: (filters) => filters.isFreeShip,
    isVisible: (filters) => true,
    isRemovable: false,
    onRemove: () => {},
    onToggle: (filters) => {
      const newFilters = { ...filters };
      if (newFilters.isFreeShip) {
        delete newFilters.isFreeShip;
      } else {
        newFilters.isFreeShip = true;
      }

      return newFilters;
    },
  },
  {
    id: 2,
    getLabel: () => "Khuyến mãi",
    isActive: (filters) => filters.isPromotion,
    isVisible: (filters) => filters.isPromotion,
    isRemovable: true,
    onRemove: (filters) => {
      const newFilters = { ...filters };
      delete newFilters.isPromotion;

      return newFilters;
    },
    onToggle: null,
  },
  {
    id: 3,
    getLabel: (filters) =>
      `Từ ${filters.salePrice_gte} đến ${filters.salePrice_lte}`,
    isActive: (filters) => true,
    isVisible: (filters) =>
      Object.keys(filters).includes("salePrice_lte") &&
      Object.keys(filters).includes("salePrice_gte"),
    isRemovable: true,
    onRemove: (filters) => {
      const newFilters = { ...filters };
      delete newFilters.salePrice_gte;
      delete newFilters.salePrice_lte;

      return newFilters;
    },
    onToggle: null,
  },
  {
    id: 4,
    getLabel: (filters) => "Danh mục",
    isActive: (filters) => true,
    isVisible: (filters) => Object.keys(filters).includes("category.id"),
    isRemovable: true,
    onRemove: (filters) => {
      const newFilters = { ...filters };
      delete newFilters.category.id;

      return newFilters;
    },
    onToggle: (filters) => {},
  },
];

function FilterViewer({ filters = {}, onChange = null }) {
  const visibleFilters = useMemo(() => {
    return FILTER_LIST.filter((x) => x.isVisible(filters));
  }, [filters]);

  return (
    <Paper elevation={0} sx={{ marginX: "8px", marginBottom: "8px" }}>
      <Box
        component="ul"
        sx={[
          {
            display: "flex",
            flexFlow: "row wrap",
            listStyleType: "none",
            padding: "12px 0 12px 8px",
            borderBottom: "1px solid #cfcfcf",
            "& > li": {
              padding: 0,
              margin: "0 8px",
            },
          },
        ]}
      >
        {visibleFilters.map((x) => (
          <li key={x.id}>
            <Chip
              label={x.getLabel(filters)}
              color={x.isActive(filters) ? "primary" : "default"}
              clickable={!x.isRemovable}
              onClick={
                x.isRemovable
                  ? null
                  : () => {
                      if (!onChange) return;

                      const newFilters = x.onToggle(filters);
                      onChange(newFilters);
                    }
              }
              onDelete={
                x.isRemovable
                  ? () => {
                      if (!onChange) return;

                      const newFilters = x.onRemove(filters);
                      onChange(newFilters);
                    }
                  : null
              }
            />
          </li>
        ))}
      </Box>
    </Paper>
  );
}

export default FilterViewer;
