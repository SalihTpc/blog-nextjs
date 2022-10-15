import axios from "axios";
import { baseURL } from "../configuration/config";

const headers: any = axios.defaults.headers;
const instance = axios.create({
  baseURL,
  headers: headers,
});

// instance.interceptors.request.use((config: any) => {
//   const token = localStorage.getItem("token");
//   config.headers.Authorization = `Token ${token}`;
//   return config;
// });

instance.interceptors.response.use(
  (response: any) => {
    return response;
  },
  (error) => {
    // if (error.response.status == 401) {
    //   // store.dispatch(logout())
    // }
    if (error.response && error.response.data) {
      return Promise.reject(error.response.data);
    }
    return Promise.reject(error.message);
  }
);

export { instance as axios };
