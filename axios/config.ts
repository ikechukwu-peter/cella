import axios from "axios";
import cogoToast from "cogo-toast";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

instance.interceptors.request.use(
  (config: any) => {
    let authState = window.sessionStorage.getItem("token");

    config.headers.Authorization = `Bearer ${authState}`;
    return config;
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use((response) => {
  if (response.status === 200) {
    if (response.data.message === "" || response.data.message === undefined) {
      console.log("");
    } else {
      cogoToast.success(response.data.message);
    }
  }

  if (response.status >= 300) {
    cogoToast.warn(response.data.message);
  }

  return response;
});

export default instance;
