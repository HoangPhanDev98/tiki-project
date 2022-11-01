import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/system";
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from "../../../constants/common";
import { formatPrice } from "../../../utils";
import { Rating, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

Product.propTypes = {
  product: PropTypes.object.isRequired,
};

function Product({ product }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/san-pham/${product.id}`);
  };

  return (
    <Box onClick={handleClick} sx={{ cursor: "pointer", borderRadius: "20px" }}>
      <img
        width="100%"
        src={
          product.thumbnail
            ? `${STATIC_HOST}${product.thumbnail?.url}`
            : THUMBNAIL_PLACEHOLDER
        }
      />
      <Box
        sx={{
          background: "white",
          margin: "0",
          padding: "10px",
        }}
      >
        <Typography
          fontSize="13px"
          sx={{ textTransform: "uppercase", paddingY: "5px" }}
        >
          {product.name}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Rating value={5} size="small" readOnly />
          <Typography margin=" 0 5px">|</Typography>
          <Typography
            component="span"
            fontSize="12px"
            sx={{ color: "#827272" }}
          >
            Đã bán 100
          </Typography>
        </Box>
        {product.promotionPercent > 0 && (
          <Box>
            <Typography
              component="span"
              fontSize="16px"
              fontWeight="bold"
              sx={{ color: "red" }}
            >
              {formatPrice(product.salePrice)}
            </Typography>

            <Typography
              component="span"
              fontSize="12px"
              marginLeft="10px"
              sx={{ color: "red" }}
            >
              -{product.promotionPercent}%
            </Typography>
          </Box>
        )}
        {product.promotionPercent < 1 && (
          <Box>
            <Typography
              component="span"
              fontSize="16px"
              fontWeight="bold"
              sx={{ color: "#333" }}
            >
              {formatPrice(product.salePrice)}
            </Typography>
          </Box>
        )}
        {product.isFreeShip === true && (
          <Typography
            fontSize="12px"
            sx={{
              border: "1px solid #000",
              display: "inline-block",
              padding: "2px 4px",
              margin: "4px 0 2px",
              borderRadius: "4px",
              borderColor: "#1a94ff",
              color: "#1a94ff",
            }}
          >
            FreeShip
          </Typography>
        )}
      </Box>
    </Box>
  );
}

export default Product;
