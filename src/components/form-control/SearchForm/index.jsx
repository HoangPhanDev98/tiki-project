import React from "react";
import PropTypes from "prop-types";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import InputField from "../InputField";
import { Button } from "@mui/material";
import { Box } from "@mui/system";

SearchForm.propTypes = {
  onSubmit: PropTypes.func,
};

function SearchForm(props) {
  const schema = yup.object().shape({});
  const form = useForm({
    defaultValues: {
      searchInput: "",
    },

    reValidateMode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (values) => {
    console.log(values);
  };

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <InputField
        name="searchInput"
        placeholder="Tìm sản phẩm, danh mục hay thương hiệu mong muốn..."
        form={form}
      />
      <Button variant="contained" type="submit">
        <Box
          component="img"
          src="https://imagedelivery.net/0zXr_E37UKCFiaGSBm0NrA/0fc17c54-56e3-49f2-4238-27ef672cb000/public"
          sx={{ width: "20px", height: "20px" }}
        ></Box>
        Tìm kiếm
      </Button>
    </form>
  );
}

export default SearchForm;
