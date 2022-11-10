import axios from "axios";
import cogoToast from "cogo-toast";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

instance.interceptors.request.use(
  (config: any) => {
    let authState = window.sessionStorage.getItem("token");

    config.headers.Authorization = `Bearer ${authState}`;
    return config;
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error.response);
    if (error.response.status === 401) {
      sessionStorage.clear();
      cogoToast.warn("Session timed out");
      window.location.href = "/";
    }
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      if (response.data.message === "" || response.data.message === undefined) {
        console.log("");
      } else {
        cogoToast.success(response.data.message);
      }
    }
    return response;
  },
  (error) => {
    console.log(error.response);

    if (!error?.response?.data) {
      // cogoToast.error("check your internet connection");
      console.log("");
    }

    if (error.response.status >= 300) {
      cogoToast.error(
        !!error.response.data.error
          ? error.response.data.error
          : "check your internet connection"
      );
    }
    return Promise.reject(error);
  }
);

export default instance;
