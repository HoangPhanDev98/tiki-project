import React, { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import productApi from "../../../api/productApi";
import { Grid, Pagination, Paper, Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from "../../../constants";
import { formatPrice } from "../../../utils/index";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";

ProductList.propTypes = {
  categoryList: PropTypes.array.isRequired,
};

function ProductList({ categoryList }) {
  const [productList, setProductList] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 36,
    total: 10,
  });

  const queryParams = useMemo(() => {
    const params = queryString.parse(location.search);

    return {
      ...params,
      _page: Number.parseInt(params._page) || 1,
      _limit: Number.parseInt(params._limit) || 36,
    };
  }, [location.search]);

  useEffect(() => {
    (async () => {
      try {
        const { data, pagination } = await productApi.getAll(queryParams);
        setProductList(data);
        setPagination(pagination);
      } catch (error) {
        console.log("Failed to fetch product list: ", error);
      }
    })();
  }, [queryParams]);

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
    <Box sx={{ width: "1270px", margin: "0 auto" }}>
      <Paper elevation={0}>
        <Typography variant="h5" padding={2} marginBottom={1}>
          Gợi Ý Hôm Nay
        </Typography>
      </Paper>
      <Box
        sx={{
          display: "flex",
          marginBottom: "8px",
          alignItems: "center",
          marginLeft: "-5px",
          "&>div": {
            padding: "15px 20px",
            width: "calc((100% / 6) - 5px )",
            marginLeft: "5px",
            textAlign: "center",
            borderRadius: "5px",
            background: "white",
          },
        }}
      >
        {categoryList.map((category) => (
          <Box key={category.id}>
            <Typography>{category.name}</Typography>
          </Box>
        ))}
      </Box>
      <Paper>
        <Grid container>
          {productList.map((product) => (
            <Grid
              item
              xs={12}
              sm={4}
              md={3}
              lg={2}
              key={product.id}
              marginBottom="15px"
            >
              <Box padding={1}>
                <img
                  width="100%"
                  src={
                    product.thumbnail
                      ? `${STATIC_HOST}${product.thumbnail?.url}`
                      : THUMBNAIL_PLACEHOLDER
                  }
                />
                <Box>
                  <Typography
                    fontSize="13px"
                    sx={{ textTransform: "uppercase", marginY: "5px" }}
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
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box
          marginTop={3}
          paddingBottom={3}
          display="flex"
          justifyContent="center"
        >
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

export default ProductList;