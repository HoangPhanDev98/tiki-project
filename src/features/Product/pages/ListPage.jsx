import React, { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/system";
import { Container, Grid, Pagination, Paper, Typography } from "@mui/material";
import ProductFilters from "../components/ProductFilters";
import productApi from "../../../api/productApi";
import ProductList from "../components/ProductList";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import ProductSort from "../components/ProductSort";
import FilterViewer from "../components/FilterViewer";

ListPage.propTypes = {};

function ListPage(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  const [productList, setProductList] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 20,
    total: 5,
  });

  const queryParams = useMemo(() => {
    const params = queryString.parse(location.search);

    return {
      ...params,
      _page: Number.parseInt(params._page) || 1,
      _limit: Number.parseInt(params._limit) || 20,
      _sort: params._sort || "salePrice:ASC",
      isPromotion: params.isPromotion === "true",
      isFreeShip: params.isFreeShip === "true",
    };
  }, [location.search]);

  useEffect(() => {
    (async () => {
      try {
        const { data, pagination } = await productApi.getAll(queryParams);
        setProductList(data);
        setPagination(pagination);
      } catch (error) {
        console.log("Failed to get product list: ", error);
      }
      setLoading(false);
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

  const handleFiltersChange = (newFilters) => {
    const filters = {
      ...queryParams,
      ...newFilters,
    };

    navigate({
      pathname: location.pathname,
      search: queryString.stringify(filters),
    });
  };

  const handleSortChange = (newSort) => {
    const filters = {
      ...queryParams,
      _sort: newSort,
    };

    navigate({
      pathname: location.pathname,
      search: queryString.stringify(filters),
    });
  };

  const setNewFilters = (newFilters) => {
    navigate({
      pathname: location.pathname,
      search: queryString.stringify(newFilters),
    });
  };

  return (
    <Container sx={{ paddingX: { xs: "0", md: "16px" } }}>
      <Grid container>
        <Grid item sx={{ width: { xs: "100%", md: "200px" } }}>
          <Paper elevation={0} sx={{ padding: "0 16px 12px" }}>
            <ProductFilters
              filters={queryParams}
              onChange={handleFiltersChange}
            />
          </Paper>
        </Grid>
        <Grid item sx={{ flex: "1 1 0%" }}>
          <ProductSort
            currentSort={queryParams._sort}
            onChange={handleSortChange}
            pagination={pagination}
            queryParams={queryParams}
          />

          <FilterViewer filters={queryParams} onChange={setNewFilters} />

          <ProductList loading={loading} productList={productList} />

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
        </Grid>
      </Grid>
    </Container>
  );
}

export default ListPage;
