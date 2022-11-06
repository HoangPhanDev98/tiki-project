import axiosClient from "./axiosClient";

const orderApi = {
  add(data) {
    const url = "/orders";
    return axiosClient.post(url, data);
  },

  getAll(params) {
    const url = "/categories";
    return axiosClient.get(url, { params });
  },
};

export default orderApi;
