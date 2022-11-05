import axiosEzClient from "./axiosEzClient";

const userApi = {
  register(data) {
    const url = "/auth/local/register";
    return axiosEzClient.post(url, data);
  },
  login(data) {
    const url = "/auth/local";
    return axiosEzClient.post(url, data);
  },
};

export default userApi;
