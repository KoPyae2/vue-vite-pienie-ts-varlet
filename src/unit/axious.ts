import axios, { AxiosInstance } from "axios";

// create an axios instance
const service: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_API,
  //   baseURL: "https://api.publicapis.org/",
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
});

service.interceptors.request.use(
  (config) => {
    // add another field in header for example token language ...
    // if (store.state.user.token) {
    //   config.headers.Authorization = store.state.user.token;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use((res) => {
  // catch error in interface
  //   if (res.data.err_code != 0) {
  //     if (res.data.err_msg) {
  //       console.log(res.data.err_msg);
  //     }

  //     return Promise.reject(res.data);
  //   }
  return res.data;
});

export default service;
